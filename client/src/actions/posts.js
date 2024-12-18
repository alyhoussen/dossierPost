import * as api from '../api'

//Action creators

export const getPosts = ()=> async (dispatch) =>{
    try{
        const { data } = await api.FetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    }catch(err){
        console.log(err.message)
    }

}

export const createPost = (post)=> async (dispatch)=>{
    try{
        const { data } = await api.createPost(post)
        
        dispatch({ type: 'CREATE', payload: data })
    }catch(err){
        console.log(err.message)
    }
}


export const likePost = (post)=> async (dispatch)=>{
    try{
        const { data } = await api.likePost(post)
        dispatch({ type: 'UPDATE', payload: data })
    }catch(err){
        console.log(err.message)
    }
}

export const commentPost = (post)=> async (dispatch)=>{
    try{
        const { data } = await api.commentPost(post)
        
        dispatch({ type: 'UPDATE', payload: post })
    }catch(err){
        console.log(err.message)
    }
}