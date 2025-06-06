import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const corsOptions = { origin: 'https://dossier-post.netlify.app/', optionsSuccessStatus: 200 };

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes)


const CONNEXION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;
console.log(CONNEXION_URL)
mongoose.connect(CONNEXION_URL)
.then(()=> app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
}))
.catch((err)=> console.log(err.message));


