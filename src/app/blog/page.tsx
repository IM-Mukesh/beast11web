import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <main className="pt-24">
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
}
