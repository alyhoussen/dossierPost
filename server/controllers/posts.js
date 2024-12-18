import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'


export const getPosts = async (req, res)=>{
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages)
    }catch(err){
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res)=>{
    const post = req.body;

    const newPost = new PostMessage(post)

    try{
       await newPost.save()
       res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({message: error.message})
    }
}

export const likePost = async (req, res)=>{
    const post = req.body;
    const ObjectId = post._id;
    console.log("Previous like(s)"+post.likeCount)
    
    try{
        const updatedPost =  await PostMessage.updateOne({_id: ObjectId}, {$set: { likeCount: post.likeCount}}, {new:true, runValidators: true} )
        console.log("Actual like(s)")
        console.log(updatedPost.likeCount);
        res.status(201).json(updatedPost);
    }catch(err){
        res.status(409).json({message: err.message})
    }
}

export const commentPost = async (req, res)=>{
    const post = req.body;
    const newComments = post.comments
    console.log("Previous comments: "+ JSON.stringify(post._id))
    const ObjectId = post._id
    
    try{
        const updatedPost =  await PostMessage.updateOne({_id: ObjectId}, {$set: { comments: newComments}},{new: true, runValidators: true} )
        console.log("Actual comments"+JSON.stringify(updatedPost));
        res.status(201).json(updatedPost);
    }catch(err){
        res.status(409).json({message: err.message})
    }
}

export const deletePost = (req, res)=>{
    try{

    }catch(err){
        res.status(404).json({message: error.message})
    }
}
