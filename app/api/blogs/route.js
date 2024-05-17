import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/Blog";
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


 
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}