import axios from "axios";

const url = import.meta.env.VITE_URL;
console.log ("The url is "+url) 

export const FetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)
export const likePost = (likedPost) => axios.put( `${url}/like`, likedPost )
export const commentPost = (commentedPost) => axios.put( `${url}/comment`, commentedPost )