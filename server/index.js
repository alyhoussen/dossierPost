import express from "express";
import bodyParsrer from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'

const app = express();
app.use(cors());
app.use(bodyParsrer.json({ limit: "30mb", extended: true }));
app.use(bodyParsrer.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes)


const CONNEXION_URL = "mongodb://localhost:27017/test";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNEXION_URL)
.then(()=> app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
}))
.catch((err)=> console.log(err.message));


