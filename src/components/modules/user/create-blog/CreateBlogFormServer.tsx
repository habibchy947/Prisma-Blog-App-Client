import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";
import { toast } from "sonner";

const API_URL = env.API_URL;

const CreateBlogFormServer = () => {

    const createBlog = async (formdata: FormData) => {
        "use server";
        const title = formdata.get("title") as string;
        const content = formdata.get("content") as string;
        const tags = formdata.get("tags") as string;
        const blogData = {
            title,
            content,
            tags : tags.split(",").map(tag => tag.trim()).filter(tag => tag !== "")
        };
        console.log("Blog Data: ", blogData);

        const cookieStore = await cookies();

        const res = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieStore.toString()
            },
            body: JSON.stringify(blogData)
        });

        if(res.ok) {
            // use either one of them
            revalidateTag("blogPosts", "max");
            // updateTag("blogPosts");
        };
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Create Blog</CardTitle>
                <CardDescription>You can write your blog here.</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="blog-form" action={createBlog}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="title">Title</FieldLabel>
                            <Input id="title" name="title" placeholder="Blog Title" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="content">Content</FieldLabel>
                            <Textarea id="content" name="content" placeholder="Write Your Blog" required></Textarea>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="tags">Tags (Comma Separeted)</FieldLabel>
                            <Input id="tags" name="tags" placeholder="next.js, web" />
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Button form="blog-form" type="submit" className="w-full">Submit</Button>
            </CardFooter>
        </Card>
    );
};

export default CreateBlogFormServer;