
const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':


      return [
        ...state,
        {
          id: action.id,
          category:action.category,
          body: action.body,
          title:action.title,
          author:action.author,
          timestamp:action.timestamp,
          voteScore:action.voteScore,
          deleted: false
        }
      ]
    case 'RECEIVE_POSTS':
      const arr = []
      action.posts.map(post=>arr.push({
        id: post.id,
        category:post.category,
        body: post.body,
        title:post.title,
        author:post.author,
        timestamp:post.timestamp,
        voteScore:post.voteScore,
        deleted: post.deleted
      }))
      for(let i = 0;i<state.length;i++){
        arr.push(state[i])

      }
      return arr
      
      

    case 'UPDATE_POST':

      return state.map(post=>
        (post.id===action.id)?{...post,          
          category:action.category,
          body: action.body,
          title:action.title,
          author:action.author,
          timestamp:action.timestamp,
          voteScore:action.voteScore,
          deleted: false}:post)

    case 'DELETE_POST':
      return state.map(post=>
        (post.id===action.id)?{...post,deleted:true}:post)
    case 'ON_CLICK_UP':
      return state.map(post=>
        (post.id===action.id)?{...post,voteScore:post.voteScore+1}:post)
    case 'ON_CLICK_DOWN':
      return state.map(post=>
        (post.id===action.id)?{...post,voteScore:post.voteScore-1}:post)


      
    default:
      return state

  }
}

export default posts
