import mongoose, { mongo } from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String, 
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0,
    },
    comments: [{
        writer: String,
        comment: String
    }],
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;