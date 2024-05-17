//app\api\products\route.js
import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/Blog";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
 
export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
}
 
export async function POST(request) {
    const { title , content,session } = await request.json();
    await connectMongoDB();
    const userEmail = session.user.email;
    await Blog.create({ title, content,userEmail });
    return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

// export async function POST(request) {
//     const { title, content,session } = await request.json();    console.log(session)
//     console.log(session.user.email)
//     if (!session) {
//         return NextResponse.error(new Error("User not authenticated"), { status: 401 });
//     }

//     const creatorEmail = session.user.email; 
    
//     try {
//         await connectMongoDB();
//         const newBlog = await Blog.create({ title, content, creatorEmail, timestamp: Date.now() });
//         return NextResponse.json({ message: "Blog Created", blog: newBlog }, { status: 201 });
//     } catch (error) {
//         return NextResponse.error(new Error("Failed to create blog"), { status: 500 });
//     }
// }
 
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}