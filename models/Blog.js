//models\BlogModel.js
import mongoose, { Schema } from "mongoose";
 
const BlogSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        userEmail: { type: String, required: true },
        }, { timestamps: true });
        
 
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
 
export default Blog;