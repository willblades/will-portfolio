import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsData, getSortedPostsData, BlogPost } from "@/lib/posts";
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
  const posts = getSortedPostsData();
  const { postId } = await params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return { title: post.title };
}

export default async function Post({ params }: { params: tParams }) {
  const posts = getSortedPostsData();
  const { postId } = await params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostsData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 mx-auto">
      <div className="max-w-8xl border border-gray-200 p-4 my-6">
        <h1 className="text-3xl mt-4 mb-0 text-accent">{title}</h1>
        <p className="mt-0 text-sm">{pubDate}</p>
        <article className="prose prose-lg dark:prose-invert mt-4">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p>
            <Link href="/blog" className="underline text-accent">← Back to Blog</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
