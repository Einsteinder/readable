
const comments = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
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
            parentId:action.parentId,
            body: action.body,
            author:action.author,
            timestamp:datetime,
            voteScore:0,
            deleted: false,
            parentDeleted:false
          }
        ]
  
      case 'DELETE_COMMENT':
        return state.map(comment=>
         (comment.id===action.id)?{...comment,deleted:true}:comment)

        
      case 'ON_CLICK_UP_C':
        return state.map(comment=>
          (comment.id===action.id)?{...comment,voteScore:comment.voteScore+1}:comment)
      case 'ON_CLICK_DOWN_C':
        return state.map(comment=>
          (comment.id===action.id)?{...comment,voteScore:comment.voteScore-1}:comment)
  
      default:
        return state
  
    }
  }
  
  export default comments
  