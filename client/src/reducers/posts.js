export default (posts = [], action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]

        case 'UPDATE':
            for(let i=0; i< posts.length; i++){
                if(posts[i].id == action.payload.id){
                    posts[i] = action.payload
                }
            }

            return posts
            
        case 'DELETE':
            return posts

        case '':
            return posts

        default:
            return posts
    }
}