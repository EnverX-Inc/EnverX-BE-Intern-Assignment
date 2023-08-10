const Post = require("../model/postModel")

module.exports.getAllPosts = async (req,res)=>{
    try{
        const posts = await Post.getPosts();
        res.status(200).json({posts:posts});
    }
    catch(err){
        console.log("Error in fetching all posts", err);
        res.status(500);
    }
}

module.exports.getPostById = async (req,res)=>{
    try{
        const _id = req.params.id;
        const post = await Post.getPostById(_id);
        res.status(200).json({post:post});
    }
    catch(err){
        console.log("Error in fetching post by id");
        res.status(500).json({err:"Error in fetching post by id"});
    }
}

module.exports.createPost = async (req,res)=>{
    try{
        const {title,description} = req.body;
        const post = await Post.createPost(title,description);
        res.status(200).json({post:post});
    }
    catch(err){
        console.log("Error in creating post", err);
        res.status(500).json({err:"Error in creating post"});
    }
}

module.exports.updatePost = async (req,res)=>{
    try{
        const _id = req.params.id;
        const {title,description} = req.body;
        const post = await Post.updatePost(_id,title,description);
        res.status(200).json({post:post});
    }
    catch(err){
        console.log("Error in updating post", err);
        res.status(500).json({err:"Error in updating post"});
    }
}

module.exports.deletePost = async (req,res)=>{
    try{
        const _id = req.params.id;
        const post = await Post.deletePost(_id);
        res.status(200).json({message:post});
    }
    catch(err){
        console.log("Error in deleting post", err);
        res.status(500).json({err:"Error in deleting post"});
    }
}