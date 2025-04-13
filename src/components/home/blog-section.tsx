import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";

const blogPosts = [
  {
    id: 1,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image: "/images/blogs/blog1.png",
    position: "top-left",
  },
  {
    id: 2,
    title: "10 stylish cream colour combination for your home",
    date: "20 Jan 2024",
    image: "/images/blogs/blog3.png",
    position: "center",
    featured: true,
  },
  {
    id: 3,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image: "/images/blogs/blog4.png",
    position: "top-right",
  },
  {
    id: 4,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image: "/images/blogs/blog2.png",
    position: "bottom-left",
  },
  {
    id: 5,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image: "/images/blogs/blog5.png",
    position: "bottom-right",
  },
];

const BlogSection = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-12 py-8 relative">
        <SectionHeader
          subtitle={"Our Blog"}
          title={"Latest"}
          imageUrl={"/images/blogs/latest-underline.svg"}
        />

        <div className="grid grid-cols-3 grid-rows-2 gap-6">
      
          <div className="col-span-1 row-span-1">
            <BlogCard post={blogPosts[0]} />
          </div>

          
          <div className="col-span-1 row-span-2">
            <BlogCard post={blogPosts[1]} tall={true} />
          </div>

         
          <div className="col-span-1 row-span-1">
            <BlogCard post={blogPosts[2]} />
          </div>

          <div className="col-span-1 row-span-1">
            <BlogCard post={blogPosts[3]} />
          </div>

          <div className="col-span-1 row-span-1">
            <BlogCard post={blogPosts[4]} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogSection;
function BlogCard({ post, tall = false }: { post: any; tall?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-md group h-full`}>
      <div
        className={`relative ${
          tall ? "h-full" : "h-64"
        } w-full overflow-hidden`}
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0  group-hover:bg-black/20 "></div>
        <div className="absolute bottom-0 left-0 p-4 text-white w-full">
          <div className="transform transition-transform duration-300 group-hover:-translate-y-12">
            <p className="text-sm mb-2">{post.date}</p>
            <h3 className="text-xl font-semibold">{post.title}</h3>
          </div>

          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Link href="#" className="group">
              <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-opacity-90 relative">
                Read More
                <span className="absolute bottom-0 left-0 w-full h-0.5  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
