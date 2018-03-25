import { connect } from 'react-redux'
import {onClickDown,onClickUp,setPostVisible } from '../actions'
import PostsList from '../components/PostsList';


const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'REACT':
      return posts.filter(t => t.category==="react")
    case 'REDUX':
      return posts.filter(t => t.category==="redux")
    case 'UDACITY':
      return posts.filter(t => t.category==="udacity")
    case 'ALL':
      return posts
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onClickUp: score =>dispatch(onClickUp(score)),
  onClickDown: score =>dispatch(onClickDown(score)),
  onClickDetail: id =>dispatch(setPostVisible(id))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
