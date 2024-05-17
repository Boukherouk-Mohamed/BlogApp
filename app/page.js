"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import BlogsList from "@/components/BlogsList";
import Navbar from "@/components/Navbar";
export default function Home() {
	const { data: session } = useSession();
	return !session ? (
		<>
			<Navbar></Navbar>
			<div className="flex min-h-screen  flex-col items-center justify-between p-24">
				<Link
					href="/login"
					className="border border-blue-600/20 font-bold bg-blue-900/10 text-xl pl-24 pb-6 pr-24 pt-6 px-4 py-2 text-red-400 rounded"
				>
					Login to Create Blogs
				</Link>
			</div>
		</>
		
	) : (
		<BlogsList></BlogsList>   

	);
}
