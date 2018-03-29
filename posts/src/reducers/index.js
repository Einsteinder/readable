
import posts from './posts'
import visibilityFilter from './visibilityFilter'
import showPost from './showPost'
import comments from './comments'
import sortBy from './sortBy'


const initialState = {
  visibilityFilter:'ALL',
  posts:[],
   showPost:[],
   comments:[
      
   ]
}




export default function combineReducers(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    posts: posts(state.posts, action),
    showPost:showPost(state.posts, action),
    comments:comments(state.comments, action),
    sortBy:sortBy(state.sortBy,action)

  }
}
