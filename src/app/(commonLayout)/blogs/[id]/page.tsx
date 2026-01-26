// This can be used in client component
// import { useParams } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    // This can be used in client component
    // const { id } = useParams();
    const { id } = await params;
    
    return (
        <div>
            <h1>This is a Dynamic page: {id}</h1>
        </div>
    );
};

export default BlogPage;