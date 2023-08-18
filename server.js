
import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/Blog-routes.js';
import router from './routes/user-routes.js';
import dotenv from 'dotenv';


const app =express();
dotenv.config();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const DB=`mongodb+srv://${USERNAME}:${PASSWORD}@blog.8qoogrp.mongodb.net/`
mongoose.connect(DB,{
    useNewUrlParser:true,
   //useCreateIndex:true,
    useUnifiedTopology:true,
  // useFindAndModify:false,
})
.then(app.listen(5000))
.then(()=>console.log("connected to server"))
.catch((err)=>console.log(err));

 