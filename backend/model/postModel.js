const mongoose = require("mongoose");

// defining the schema for posts
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

postSchema.statics.getPosts = async function(){
    const posts = await this.find({});
    return posts;
}

postSchema.statics.getPostById = async function(_id){
    if(!_id){
        throw new Error("ID is null");
    }
    const post = await this.findById(_id);
    return post;
}

postSchema.statics.createPost = async function(title,description){
    if(!title || !description){
        throw new Error("Title or description is null");
    }
    const post = await this.create({title:title,description:description});
    return post;
}

postSchema.statics.updatePost = async function(_id,title,description){
    if(!_id || !title || !description){
        throw new Error("ID or title or description is null");
    }
    const post = await this.findById(_id);
    post.title = title;
    post.description = description;
    await post.save();
    return post;
}

postSchema.statics.deletePost = async function(_id){
    if(!_id){
        throw new Error("ID is null");
    }
    const post = await this.findByIdAndDelete(_id);
    return "Post deleted";
}

// creating the model for posts
const Post = mongoose.model("Post",postSchema);

// exporting the model
module.exports = Post;