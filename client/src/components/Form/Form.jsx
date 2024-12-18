import { TextField, Button, Typography, Paper } from '@mui/material'
import { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'


function Form() {

  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(postData.creator && postData.selectedFile && postData.message && postData.title){
      dispatch(createPost(postData))
      clear()
    }
    
  }

  const clear = ()=>{
     setPostData(()=> ({
      creator: '', title: '', message: '', tags: '', selectedFile: ''
    }))
  }

  const dispatch = useDispatch();

  return (
    <Paper className='p-3'>
      <form autoComplete='off' noValidate className='' onSubmit={handleSubmit}>
        <div className='my-2'>
          <Typography variant='h6' align='center' className='font-bold'>
            Lezzzgoooo !!!&#128518;
          </Typography>
        </div>
        <div className='my-3'>
          <input name="creator" placeholder="Creator" className='outline-[skyblue] p-2 px-[1rem] border w-full rounded-[50px]' value={postData.creator} onChange={(e)=>{
            setPostData({...postData, creator: e.target.value})
          }}/>
        </div>
        <div className='my-3'>
          <input name="title" placeholder="title" className='outline-[skyblue] p-2 px-[1rem] border w-full rounded-[50px]' value={postData.title} onChange={(e)=>{
            setPostData({...postData, title: e.target.value})
          }}/>
        </div>
        <div className='my-3'>
          <input name="message" placeholder="message" className='outline-[skyblue] p-2 px-[1rem] border w-full rounded-[50px]' value={postData.message} onChange={(e)=>{
            setPostData({...postData, message: e.target.value})
          }}/>
        </div>
        <div className='my-3'>
          <input name="tags" placeholder="tags" className='outline-[skyblue] p-2 px-[1rem] border w-full rounded-[50px]' value={postData.tags} onChange={(e)=>{
            setPostData({...postData, tags: e.target.value})
          }}/>
        </div>
        <div className='flex'>
          <div className='overflow-hidden'><FileBase className='flex flex-wrap' type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64 })} /></div>
           ...
        </div>
        <div className='my-2 mt-4'>
          <button className='transition hover:scale-[0.98] text-center bg-violet-600 text-white p-2 w-full rounded-[50px]' type="submit">Submit</button>
        </div>
        <div className='my-2'>
          <button className='transition hover:scale-[0.98] bg-[#eee] p-2 w-full rounded-[50px]' onClick={clear} type="submit">Clear</button>
        </div>
      </form>
    </Paper>
  )
}

export default Form