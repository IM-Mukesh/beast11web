import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "../types/blog";

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-96 w-full rounded-2xl overflow-hidden mb-12"
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-primary text-primary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-3xl">{post.excerpt}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full border-2 border-white mr-3"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-white/70 text-sm">{post.date}</p>
              </div>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center"
            >
              Read Article
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
