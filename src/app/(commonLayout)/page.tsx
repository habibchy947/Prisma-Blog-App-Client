import BlogCard from "@/components/modules/homePage/blogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: true
    },
    {
      cache : "no-store",
    }
  );

  console.log(data);

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-5 gap-5">
      {
        data?.data?.map((post: BlogPost) => <BlogCard key={post.id} post={post}></BlogCard>)
      }
    </div>
  );
}
