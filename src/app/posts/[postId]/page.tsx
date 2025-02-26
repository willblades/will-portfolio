import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type tParams = Promise<{ postId: string }>;

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params }: { params: tParams }) {
  const posts = getSortedPostsData(); // deduped data
  const { postId} = await params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return { title: post.title };
}

export default async function Post({ params }: { params: tParams }) {
  const posts = getSortedPostsData(); // deduped data
  const { postId } = await params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostsData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-lg dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to Home</Link>
        </p>
      </article>
    </main>
  );
}
