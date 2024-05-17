//login page
'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { toast } from "react-toastify"
import React from 'react'
import Navbar from "@/components/Navbar"

const Login = () => {
    const router = useRouter()
    const { data: session, status: sessionStatus } = useSession();
    useEffect(() => {
        if (sessionStatus === 'authenticated') {
          router.push('/')
      }
    }, [sessionStatus, router])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if (!email || !password) {
			toast.error("Please fill all the input files")
			return;
        }
        const res = await signIn('credentials', {
            redirect: false,
            email,password
        })
        if (res?.error) {
            toast.error("Invalid Crediential")
        } else {
			router.replace('/')
            toast.success("Successfully logged in")
        }
    }
    
  return (
		sessionStatus !== "authenticated" && (
			<>
			
			<Navbar></Navbar>
			<div className=" mt-24 flex items-center justify-center">
				<div className="b-white bg-blue-900/10 p-6 rounded shadow-md w-96">
					<h2 className="text-2xl font-semibold">Login</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="black text-gray-700 text-sm font-bold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="password"
								className="black text-gray-700 text-sm font-bold mb-2"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="mb-5 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
							>
								LogIn
							</button>
						</div>
						<span>
							Don't have an account?
							<Link
								className="text-center text-blue-500 hover:underline mt-2"
								href={"/register"}
							>
								Register
							</Link>
						</span>
					</form>
				</div>
			</div>
			
			</>
		)
	);
}

export default Login