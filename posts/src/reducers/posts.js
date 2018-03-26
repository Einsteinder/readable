
const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

      return [
        ...state,
        {
          id: action.id,
          category:action.category,
          body: action.text,
          title:action.title,
          author:action.author,
          timestamp:datetime,
          voteScore:action.voteScore,
          deleted: false
        }
      ]


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
