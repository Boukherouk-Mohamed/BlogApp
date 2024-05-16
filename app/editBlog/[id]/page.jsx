
//app\editProduct\[id]\page.js

import EditBlogForm from "@/components/EditBlogForm";

 
const getBlogById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }
 
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
 
export default async function EditBlog({ params }) {
    const { id } = params;
    const { blog } = await getBlogById(id);
    const { title,content } = blog;

    return <EditBlogForm id={id} title={title} content={content} />;
}










