const showPost = (state , action) => {
    switch (action.type) {
      case 'SET_POST_VISIBLE':
        return state.filter(post=>
          (post.id===action.id))
      default:
        return state
    }
  }
  
  export default showPost
