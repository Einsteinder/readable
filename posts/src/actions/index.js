let nextPostId = 0

export const addPost = (category,title,author,text) => ({
  type: 'ADD_POST',
  id: nextPostId++,
  voteScore:0,
  category,
  title,
  author,
  text,

})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


export const setPostVisible = id => ({
  type: 'SET_POST_VISIBLE',
  id
})

export const onClickUp = id => ({
  type: 'ON_CLICK_UP',
  id
})
export const onClickDown = id => ({
  type: 'ON_CLICK_DOWN',
  id
})
export const VisibilityFilters = {
  ALL: 'ALL',
  REACT: 'REACT',
  REDUX: 'REDUX',
  UDACITY: 'UDACITY'
}
