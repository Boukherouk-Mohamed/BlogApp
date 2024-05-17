"use client";
//this component is used to import the Blogs list from the database
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { EditOutlined } from "@ant-design/icons";
import sanitizeHtml from "sanitize-html";
import Navbar from './Navbar';

const getBlogs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/blogs", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading blogs: ", error);
    }
};

const sanitizeContent = (htmlContent) => {
    const cleanHtml = sanitizeHtml(htmlContent, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedAttributes: {
            img: ["src"],
        },
    });

    return { __html: cleanHtml };
};

export default function BlogsList() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedBlogId, setExpandedBlogId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 4;
    const blogListRef = useRef(null);

    const handleRemove = (deletedId) => {
        setBlogs(blogs.filter((blog) => blog._id !== deletedId));
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            const { blogs } = await getBlogs();
            setBlogs(blogs);
        };

        fetchBlogs();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handleClickOutside = (event) => {
        if (blogListRef.current && !blogListRef.current.contains(event.target)) {
            setExpandedBlogId(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Navbar onSearch={setSearchTerm} />
            <div className="m-auto w-5/6 mt-6" ref={blogListRef}>
                {currentBlogs.length === 0 ? (
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 w-4/6 m-auto pt-2 pl-6 pr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <li className="pb-3 sm:pb-4 pt-3">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div className="flex-shrink-0"></div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                        there is no blog yet
                                    </p>
                                    <div className="text-sm text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <>
                        <ul className="divide-y ease-in duration-300 min-h-96 divide-gray-200 dark:divide-gray-700 w-4/6 m-auto pt-2 pl-6 pr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            {currentBlogs.map((blog) => (
                                <li
                                    className="pb-3 sm:pb-4 pt-3 cursor-pointer ease-in duration-300"
                                    key={blog._id}
                                    onClick={() => setExpandedBlogId(blog._id)}
                                >
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="flex-shrink-0"></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                                {blog.title}
                                            </p>
                                            <div
                                                className={`text-sm text-gray-500 dark:text-gray-400 transition-all ease-in duration-300 ${
                                                    expandedBlogId === blog._id
                                                        ? "max-h-full whitespace-normal"
                                                        : "max-h-6 overflow-hidden truncate"
                                                }`}
                                                dangerouslySetInnerHTML={sanitizeContent(blog.content)}
                                            />
                                            {/* Render userEmail and createdAt conditionally based on expandedBlogId */}
                                            {expandedBlogId === blog._id && (
                                                <div className="text-xs font-small text-cyan-900 truncate dark:text-rose-200/30">
                                                    By {blog.userEmail} in {blog.createdAt}
                                                </div>
                                            )}
                                        </div>
                                        <div className="pr-4 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <p className="pr-4 text-red-600 hover:cursor-pointer hover:text-red-400">
                                                <RemoveBtn id={blog._id} onRemove={handleRemove} />
                                            </p>
                                            <p className="text-cyan-600 hover:cursor-pointer hover:text-cyan-400">
                                                <Link href={`/editBlog/${blog._id}`}>
                                                    <EditOutlined />
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-gray-400">{indexOfFirstItem + 1}</span> to <span className="font-semibold text-gray-900 dark:text-gray-400">{Math.min(indexOfLastItem, filteredBlogs.length)}</span> of <span className="font-semibold text-gray-900 dark:text-gray-400">{filteredBlogs.length}</span> Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={isFirstPage}
                                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                    </svg>
                                    Prev
                                </button>
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={isLastPage}
                                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Next
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    );
}

