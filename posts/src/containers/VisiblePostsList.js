import { connect } from 'react-redux'
import {downVotePost,upVotePost,setPostVisible,deletePost,updatePost,setVisibilityFilter } from '../actions'
import PostsList from '../components/PostsList';
function showFilter (post,category){
  if(post.category===category && !post.deleted){
    return true
  }
  return false

}
function showAll (post){
  if(!post.deleted){
    return true
  }
  return false

}
function comparePostByRate(a,b){
  return a.voteScore - b.voteScore
}
function comparePostByTime(a,b){
  return a.timestamp - b.timestamp
}
const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'REACT':
      return posts.filter(p => showFilter(p,'react')).sort(comparePostByRate)
    case 'REDUX':
      return posts.filter(p => showFilter(p,'redux')).sort(comparePostByRate)
    case 'UDACITY':
      return posts.filter(p => showFilter(p,'udacity')).sort(comparePostByRate)
    case 'ALL':
      return posts.filter(p => showAll(p)).sort(comparePostByRate)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const getVisiblePostsByTime = (posts, filter) => {
  switch (filter) {
    case 'REACT':
      return posts.filter(p => showFilter(p,'react')).sort(comparePostByTime)
    case 'REDUX':
      return posts.filter(p => showFilter(p,'redux')).sort(comparePostByTime)
    case 'UDACITY':
      return posts.filter(p => showFilter(p,'udacity')).sort(comparePostByTime)
    case 'ALL':
      return posts.filter(p => showAll(p)).sort(comparePostByTime)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const toUpperCase =(x)=>{
    return x.toUpperCase()
  
}
const mapStateToProps = state => (
  {
  posts: state.sortBy==="RATE" ? getVisiblePosts(state.posts, state.visibilityFilter):getVisiblePostsByTime(state.posts, state.visibilityFilter) ,
  numberOfComments: state.comments.length
})

const mapDispatchToProps = (dispatch,ownProp) => ({
  onClickUp: score =>dispatch(upVotePost(score)),
  onClickDown: score =>dispatch(downVotePost(score)),
  onClickDetail: id =>dispatch(setPostVisible(id)),
  onClickDelete: id =>dispatch(deletePost(id)),
  updatePost: (id,category,title,author,body,timestamp)=>dispatch(updatePost(id,category,title,author,body,timestamp)),
  checkLink: () =>dispatch(setVisibilityFilter(toUpperCase(ownProp.match.params.category)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
