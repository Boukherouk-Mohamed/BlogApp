//app\addBlog\page.jsx
"use client";
 
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import "../../components/customQuill.css"; 



const modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['clean']
    ],
};

 export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (value) => {
      setContent(value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!title || !content) {
          alert("Title and content are required.");
          return;
      }

      try {
          const res = await fetch("http://localhost:3000/api/blogs", {
              method: "POST",
              headers: {
                  "Content-type": "application/json",
              },
              body: JSON.stringify({ title, content }),
          });

          if (res.ok) {
              toast.success("Blog created successfully!");
          } else {
              throw new Error("Failed to create a blog");
          }
      } catch (error) {
          console.log(error);
      }
  };

  return (
      <>
          <ToastContainer />
          <div className="divide-y divide-gray-200 dark:divide-gray-700 w-3/6 mt-5 m-auto pt-2 pl-6 pr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h1 className="max-w-lg mx-auto text-3xl font-medium dark:text-pink-300 pt-4 pb-1">Add new blog</h1>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto pb-6 pt-4">

                  <div className="mb-5">
                      <label htmlFor="blog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Title
                      </label>
                      <input
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          type="text"
                          id="blog"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Blog Title"
                          required
                      />
                  </div>

                  <div className="mb-5">
                      <label htmlFor="blogContent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Content
                      </label>
                      <ReactQuill
                          theme="snow"
                          value={content}
                          modules={modules}
                          onChange={handleChange}
                          required
                          className="text-sm rounded-b rounded-lg dark:placeholder-gray-400 dark:text-white"
                      />
                  </div>

                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add blog</button>
              </form>
          </div>
      </>
  );
}
