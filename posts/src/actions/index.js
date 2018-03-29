import fetchPostsApi from '../utils/api'



let nextPostId = 0
let nextCommentId = 0


export const receivePosts = posts=>({
  type:'RECEIVE_POSTS',
  posts
})

const fetchPosts =() => dispatch =>{
  return fetchPostsApi().then(posts => dispatch(receivePosts(posts)))
}

export const fetchPostsIfNeeded = ()=> (dispatch) => {

    return dispatch(fetchPosts())

}


export const addPost = (category,title,author,body,timestamp) => ({
  type: 'ADD_POST',
  id: nextPostId++,
  voteScore:0,
  category,
  title,
  author,
  body,
  timestamp

})
export const updatePost = (id,category,title,author,body,timestamp) => ({
  type:'UPDATE_POST',
  id,
  category,
  title,
  author,
  body,
  voteScore:0,
  timestamp

})

export const updateComment = (id,parentId,author,body,timestamp) => ({
  type:'UPDATE_COMMENT',
  id,
  parentId,
  author,
  body,
  voteScore:0,
  timestamp
})


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const sortBy = filter => ({
  type: 'SORT_BY',
  filter
})
export const addComment = (parentId,author,body,timestamp) => ({
  type: 'ADD_COMMENT',
  id:nextCommentId++,
  parentId,
  author,
  body,
  timestamp
})


export const setPostVisible = id => ({
  type: 'SET_POST_VISIBLE',
  id
})

export const onClickUp = id => ({
  type: 'ON_CLICK_UP',
  id
})

export const deletePost = id => ({
  type: 'DELETE_POST',
  id
})

export const deleteComment = id => ({
  type: 'DELETE_COMMENT',
  id
})
export const onClickDown = id => ({
  type: 'ON_CLICK_DOWN',
  id
})

export const onClickUpComment = id => ({
  type: 'ON_CLICK_UP_C',
  id
})
export const onClickDownComment = id => ({
  type: 'ON_CLICK_DOWN_C',
  id
})
export const VisibilityFilters = {
  ALL: 'ALL',
  REACT: 'REACT',
  REDUX: 'REDUX',
  UDACITY: 'UDACITY'
}
