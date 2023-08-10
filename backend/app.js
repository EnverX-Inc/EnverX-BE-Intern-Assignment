const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const postRouter = require("./routes/postRouter");
const app = express();

dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// connecting to mongodb
const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const dbname = process.env.MONGO_DBNAME;

const dburl = `mongodb+srv://${username}:${password}@cluster0.barpeqe.mongodb.net/${dbname}`;
const connectionParams={
    // as per documentation
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dburl,connectionParams)
.then((response)=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Error connecting to database");
})


// routes

app.use("/posts",postRouter);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})