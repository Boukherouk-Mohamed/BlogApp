import { NextResponse } from 'next/server'
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';
import connectMongoDB from '@/libs/mongodb';

export async function POST(req) {
    try {

        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");
        console.log("User: ", user)

        return NextResponse.json({ user })

    } catch(error) {
        return NextResponse.json({ message: "An error occured while registering the user." }, { status: 500 })
    }
}