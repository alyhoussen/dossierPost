import { useState } from "react"
import { AiOutlineComment } from "react-icons/ai"
import { likePost } from "../../../actions/posts"
import { useDispatch, useSelector } from "react-redux"



function Post({post, setShowComments, setSelectedPost}) {
  const [likedPost, setLikedPost] = useState(post)
  const [reacted, setReacted] = useState(false)
  const dispatch = useDispatch();
  
  const handleLike = () =>{
    setReacted((prev)=> !prev)
    
    const newPost = !reacted ? {...likedPost, likeCount: likedPost.likeCount + 1}:{...likedPost, likeCount: likedPost.likeCount - 1}
    dispatch(likePost(newPost))
    setLikedPost(()=> (newPost))
    
  }

  return (
    <div className="rounded-lg shadow-lg max-w-[300px] min-h-[300px] overflow-hidden">
      <div className="w-full h-[150px]">
        <h1 className="absolute m-2 p-2 text-white font-semibold bg-violet-700  px-[2rem] rounded-[50px] cursor-pointer transition hover:scale-[0.9] text-[12px]">By: {likedPost.creator}</h1>
        <img src={`${likedPost.selectedFile}`} alt="image" />
      </div>
      <div className="p-4 bg-white z-10">
        <p className="text-[14px] mt-2 text-blue-500 font-semibold">{likedPost.tags}</p>
        <h1 className="font-semibold text-[22px] my-3">{likedPost.title}</h1>
        <p className="">{likedPost.message}</p>
        <div className="flex justify-between items-center mt-3 font-semibold">
          <div className={`cursor-pointer transition hover:scale-[0.9] p-2 rounded-[50px] px-[1rem]  ${reacted ? "bg-blue-500 text-white":"bg-[#eee]"}`} onClick={handleLike}>&#128514; {likedPost.likeCount} <span className="font-medium text-[12px]">laugh{likedPost.likeCount>0 &&'s' }</span></div>
          <div className="cursor-pointer transition hover:scale-[0.9] flex items-center gap-2 bg-[#eee] p-2 rounded-[50px] px-[1rem]" onClick={()=>{ setSelectedPost(()=>post);setShowComments((prev)=> !prev)}}><span>{likedPost.comments.length}</span><AiOutlineComment className="text-[26px]" /></div>
        </div>
      </div>
    </div>
  )
}

export default Post