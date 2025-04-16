// import { blogs } from "@/data/blogs";
// import { notFound } from "next/navigation";
// import { Metadata } from "next";
// import Image from "next/image";

// // ✅ This function is synchronous
// function getBlogById(id: string) {
//   return blogs.find((b) => b.id === id) || null;
// }

// // ✅ SEO Metadata generation
// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const story = getBlogById(params.id);
//   if (!story) return {};

//   return {
//     title: story.title,
//     description: story.description,
//     openGraph: {
//       images: [story.image],
//     },
//   };
// }

// // ✅ Statically generate paths at build time
// export async function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }

// // ✅ Page Component
// export default function StoryPage({ params }: { params: { id: string } }) {
//   const story = getBlogById(params.id);
//   if (!story) return notFound();

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <Image
//         src={story.image}
//         alt={story.title}
//         width={800} // Set appropriate width
//         height={450} // Set appropriate height
//         className="rounded-lg w-full mb-4 object-cover"
//         style={{ height: "auto" }} // Optional: if you're using Tailwind fully, you might not need this
//       />
//       <h1 className="text-2xl font-bold mb-2">{story.title}</h1>
//       <p className="text-gray-500 mb-6">{story.date}</p>
//       <p className="text-lg whitespace-pre-line">{story.content}</p>
//     </div>
//   );
// }
export default function DescriptionView() {
  return <></>;
}
