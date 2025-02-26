import { getSortedPostsData } from "@/lib/posts";
import ListItems from "@/components/ListItems";
const Blog = () => {
    const allPostsData = getSortedPostsData();
    
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-semibold dark:text-white/90">Blog</h2>
            <ul className="w-full flex">
                {allPostsData.map(post => (
                    <ListItems key={post.id} post={post} />
                ))}     
            </ul>
        </section>
    );
};

export default Blog;