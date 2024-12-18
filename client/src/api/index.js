import axios from "axios";

const url = 'http://localhost:5000/posts';

export const FetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)
export const likePost = (likedPost) => axios.put( `${url}/like`, likedPost )
export const commentPost = (commentedPost) => axios.put( `${url}/comment`, commentedPost )