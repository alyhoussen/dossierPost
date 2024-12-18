import { useState } from "react";
import { commentPost } from "../../actions/posts"
import { useDispatch } from "react-redux"
import { AiOutlineComment, AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";


function Comments({setShowComments, selectedPost}) {
  const [post, setPost ]= useState(()=>selectedPost);
  const [newComment, setNewComment] = useState(()=> ({comment:"",writer:""}))

  const dispatch = useDispatch();
  
  const handleComment = () =>{
    if(newComment){
      const newPost = {...post, comments:[...post.comments, newComment]}
      setPost(()=> newPost)
      setNewComment({comment:"",writer:""})
      dispatch(commentPost(newPost))
    }
    
  }

  return (
    <div className="">
      <div className="pb-3 cursor-pointer"><div className="text-[26px] hover:scale-[0.99]" onClick={()=>{setShowComments(prev=>!prev)}}><AiOutlineArrowLeft className="" /></div></div>
      <h1 className="absolute m-2 p-2 text-white font-semibold bg-violet-600 text-[12px] px-[2rem] rounded-[50px] cursor-pointer transition hover:scale-[0.9]">By: {post.creator}</h1>
      <img src={post.selectedFile} alt="" className="max-w-[500px] w-full" />
      <div className="flex justify-between items-center mt-3 font-semibold">
          <div className={`cursor-pointer transition hover:scale-[0.9] p-2 rounded `} >&#128514; {post.likeCount} <span className="font-medium text-[12px]">laugh{post.likeCount>0 &&'s' }</span></div>
          <div className="cursor-pointer transition hover:scale-[0.9] flex items-center gap-2" onClick={()=>{}}><span>{post.comments.length}</span><AiOutlineComment className="text-[26px]" /></div>
      </div>
      <div>
        <div className=" text-[18px] mb-[1rem] flex justify-between items-center"><p className="font-semibold">Comments</p> <a href="#comment"> <p className="flex justify-center items-center gap-2 bg-violet-600 hover:scale-[0.99] transition text-[14px] p-2 text-white rounded cursor-pointer"><AiOutlinePlus className="" /> Write a comment</p></a></div>
        {post.comments.map((comment, index)=> (
          <div key={index} className="text-[14px] mx-4 mb-2">
            <p className="text-violet-500 font-semibold">{comment.writer}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <div className=" r-[0] l-[0] flex flex-col gap-3 items-center mt-[2rem]" id="comment">
        <div className="grid gap-3 grid-flow-col">
          <input type="text" placeholder="Write a comment" className="p-2 px-4 border rounded-l flex-1 outline-[skyblue]" value={newComment.comment} onChange={(e)=> setNewComment((prev)=>{ return {...prev,comment:e.target.value}})} />
          <input type="text" placeholder="Your name" className="p-2 px-4 border rounded-l outline-[skyblue]" value={newComment.writer} onChange={(e)=> setNewComment((prev)=>{ return {...prev, writer:e.target.value}})} />
        </div>
        <p className="p-2 px-4 rounded w-full text-center hover:scale-[0.99] transition bg-violet-600 text-white cursor-pointer" onClick={handleComment}>Submit</p>
      </div>
    </div>
  )
}

export default Comments