
import posts from './posts'
import visibilityFilter from './visibilityFilter'
import showPost from './showPost'

const initialState = {
  visibilityFilter:'ALL',
  posts:[  {
    id:23412341234,
    timestamp:"12341234fgg",
    title:"nihao",
    text:"xxixixixi",
    author:"wemngxuyabng",
    category:"eriefgb",
    voteScore:1,
    deleted:false
   }],
   showPost:[{
    id:23412341234,
    timestamp:"12341234fgg",
    title:"nihao",
    text:"xxixixixi",
    author:"wemngxuyabng",
    category:"eriefgb",
    voteScore:1,
    deleted:false
   }]
}



export default function combineReducers(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    posts: posts(state.posts, action),
    showPost:showPost(state.posts, action)
  }
}
