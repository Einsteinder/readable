import { connect } from 'react-redux'
import {onClickDown,onClickUp,setPostVisible,deletePost,updatePost } from '../actions'
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

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'REACT':
      return posts.filter(p => showFilter(p,'react'))
    case 'REDUX':
      return posts.filter(p => showFilter(p,'redux'))
    case 'UDACITY':
      return posts.filter(p => showFilter(p,'udacity'))
    case 'ALL':
      return posts.filter(p => showAll(p))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.visibilityFilter),
  numberOfComments: state.comments.length
})

const mapDispatchToProps = dispatch => ({
  onClickUp: score =>dispatch(onClickUp(score)),
  onClickDown: score =>dispatch(onClickDown(score)),
  onClickDetail: id =>dispatch(setPostVisible(id)),
  onClickDelete: id =>dispatch(deletePost(id)),
  updatePost: (id,category,title,author,body)=>dispatch(updatePost(id,category,title,author,body))
  

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
