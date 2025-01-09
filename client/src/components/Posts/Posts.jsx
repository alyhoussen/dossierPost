import Post from "./Post/Post"
import { useSelector } from 'react-redux'



function Posts({setShowComments, setSelectedPost}) {
  const posts = useSelector((state) => state.posts);
  
  console.log(useSelector((state)=> state))

  return (
    <div>
      <h1 className="text-[28px] font-semibold mb-4">POSTS</h1>
      <div className="flex flex-wrap gap-5 justify-center mb-5">
        {posts.map((post, index)=> <Post setShowComments={setShowComments} setSelectedPost={setSelectedPost}  key={index} 
        post={post}
/>)}
      {posts.length<=0 && <p className="text-[26px]">No posts yet!!</p>}
      </div>
    </div>
  )
}

export default Posts