import BlogsList from "@/components/BlogsList";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";



export default async function Home () {

    return <>      
 
    <BlogsList></BlogsList>   
        {/* <div  class="m-auto w-5/6 mt-6 " >
            
            
                
                <ul class=" divide-y divide-gray-200 dark:divide-gray-700 w-4/6 m-auto pt-2 pl-6 pr-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <li class="pb-3 sm:pb-4 pt-3">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            <div class="flex-shrink-0">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                                Blog Title
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                                    elit. Unde libero quos tempore? Voluptas, temporibus in.
                                     Cum eaque iste placeat deleniti ad voluptatum, possimus
                                      saepe? Odit soluta at corporis itaque possimus.                                
                                </p>
                            </div>
                            <div class=" pr-4 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <p className="pr-4 text-red-600	hover:cursor-pointer hover:text-red-400"> <DeleteOutlined /> </p>
                                <p className="text-cyan-600 hover:cursor-pointer hover:text-cyan-400" >     <Link href="/editBlog/13"><EditOutlined/></Link>      </p>
                            </div>
                        </div>
                    </li>



                    
               
                </ul>

            

        </div>

         */}
        


    
    </>
}