
import posts from './posts'
import visibilityFilter from './visibilityFilter'
import showPost from './showPost'
import comments from './comments'
import sortBy from './sortBy'


const initialState = {
  visibilityFilter:'ALL',
  posts:[{
    id:100000000000000,
    timestamp:"27/3/2018 @ 0:0:40",
    title:"nihao",
    body:"xxixixixi",
    author:"wemngxuyabng",
    category:"react",
    voteScore:1,
    deleted:false
   }],
   showPost:[{
    id:100000000000000,
    timestamp:"27/3/2018 @ 0:0:40",
    title:"nihao",
    body:"xxixixixi",
    author:"wemngxuyabng",
    category:"react",
    voteScore:1,
    deleted:false
   }],
   comments:[
       {
        id: 12345123512351235,
        parentId: 100000000000000,
        timestamp: "27/3/2018 @ 0:0:40",
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: 1234616123462345634,
        parentId: 100000000000000,
        timestamp: "27/3/2018 @ 0:0:41",
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
    comments:comments(state.comments, action),
    sortBy:sortBy(state.sortBy,action)

  }
}
