import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const story = blogs.find((s) => s.id === params.slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.description,
    openGraph: {
      images: [story.image],
    },
  };
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = blogs.find((s) => s.id === params.slug);
  if (!story) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={story.image}
        alt={story.title}
        className="rounded-lg w-full mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{story.title}</h1>
      <p className="text-gray-500 mb-6">{story.date}</p>
      <p className="text-lg">{story.content}</p>
    </div>
  );
}
