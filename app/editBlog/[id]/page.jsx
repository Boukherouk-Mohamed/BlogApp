
export default function editBlog() {
  return (
    <>
    <div class=" divide-y divide-gray-200 dark:divide-gray-700 w-3/6 mt-5 m-auto pt-2 pl-6 pr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="max-w-lg mx-auto text-3xl font-medium dark:text-pink-300 pt-4 pb-1">Edit your blog</h1>
        <form class="max-w-lg mx-auto pb-6 pt-4">
          <div class="mb-5">
            <label for="blog" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="blog" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New blog Title" required />
          </div>
          <div class="mb-5">
            <label for="blogContent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Content</label>
            <input type="text" id="blogContent" placeholder="New blog content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit blog</button>
        </form>
            
    </div>


   
    </>
  );
}
