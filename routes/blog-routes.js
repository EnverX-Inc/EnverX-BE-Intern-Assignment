import express from 'express';
import { addBlog, getAllBlogs, updateBlog ,getbyId, deleteBlog, getByUserId} from '../controllers/Blog-controller';
const blogRouter = express.Router();

blogRouter.get("/posts",getAllBlogs);
blogRouter.post("/posts",addBlog);
blogRouter.put("/posts/:id",updateBlog);
blogRouter.get("/posts/:id",getbyId);
blogRouter.delete("/posts/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId);

export default blogRouter;
