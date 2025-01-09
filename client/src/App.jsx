import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import memories from "./images/memories.jpg"
import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { getPosts } from './actions/posts'
import Comments from "./components/comments/Comments"


function App() {
  const dispatch =  useDispatch()
  const [showComments, setShowComments] = useState(false)
  const [selectedPost, setSelectedPost] = useState({})
  

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])


  return (
    <>
      {showComments && 
        
        <Grow in className="z-[100]  bg-[#fff] t-[0] b-0 h-full mt-[-2rem] p-[2rem] w-full flex justify-center overflow-scroll">
          <div className="">
            <Comments setShowComments={setShowComments} selectedPost={selectedPost} />
          </div>      
        </Grow>
      }
      {!showComments &&
        <Container maxWidth="lg">
          <div className="rounded-lg my-[30px] p-2 shadow" >
            <div className="flex flex-row flex-wrap justify-center items-center " >
              <h1 className="text-[38px] text-violet-500 font-semibold">Dossier</h1>
              <div className="flex gap-3">
                <span className="text-[40px]">&#128518;</span>
                <img src={memories} alt="memories" className="h-[60px] ml-3 text-violet-600"/>
              </div>
            </div>
          </div>
          <Grow in className=" ">
            <Container>
              <Grid container justify="space-between" alignItems="stretch">
                <Grid item xs={12} lg={8}>
                    <Posts setShowComments={setShowComments} setSelectedPost={setSelectedPost}  />
                </Grid>
                <Grid item xs={12} lg={4} className="pl-4">
                    <Form />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      }
    </>
  )
}

export default App
