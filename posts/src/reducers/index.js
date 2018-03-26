
import posts from './posts'
import visibilityFilter from './visibilityFilter'
import showPost from './showPost'
import comments from './comments'

const initialState = {
  visibilityFilter:'ALL',
  posts:[{
    id:100000000000000,
    timestamp:"12341234fgg",
    title:"nihao",
    text:"xxixixixi",
    author:"wemngxuyabng",
    category:"eriefgb",
    voteScore:1,
    deleted:false
   }],
   showPost:[{
    id:100000000000000,
    timestamp:"12341234fgg",
    title:"nihao",
    text:"xxixixixi",
    author:"wemngxuyabng",
    category:"eriefgb",
    voteScore:1,
    deleted:false
   }],
   comments:[
       {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: 100000000000000,
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: 100000000000000,
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }
   ]
}



export default function combineReducers(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    posts: posts(state.posts, action),
    showPost:showPost(state.posts, action),
    comments:comments(state.comments, action)
  }
}
