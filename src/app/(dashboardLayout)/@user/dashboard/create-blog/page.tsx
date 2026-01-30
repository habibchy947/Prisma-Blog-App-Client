import { CreateBlogFormClient } from "@/components/modules/user/create-blog/CreateBlogFormClient";
// import CreateBlogFormServer from "@/components/modules/user/create-blog/CreateBlogFormServer";

const CreateBlogPage = () => {
    return (
        <div>
            {/* <CreateBlogFormServer/> */}
            <CreateBlogFormClient/>
        </div>
    );
};

export default CreateBlogPage;