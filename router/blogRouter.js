const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController.js");

router.get("/blogs", blogController.getAllBlogs);
router.get("/blogs/:id", blogController.getBlogById);
router.post("/blogs", blogController.createBlog);
router.put("/blogs/:id", blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);
module.exports = router;
