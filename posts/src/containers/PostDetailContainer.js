import { connect } from 'react-redux'
import {onClickDown, onClickUp,onClickUpComment,onClickDownComment, addComment} from '../actions'
import PostDetail from '../components/PostDetail';
import CommentsList from '../components/CommentsList'


const getCommentsForPost = (comments,parentId) => {
  console.log(comments.filter(c => c.parentId===parentId))
  return comments.filter(c => c.parentId===parentId)

}
const mapStateToProps = state => (
  {
    post:state.showPost,
    comments: getCommentsForPost(state.comments,state.showPost[0].id)
  }
 

)

const mapDispatchToProps = dispatch => ({
  onClickUp: score =>dispatch(onClickUp(score)),
  onClickDown: score =>dispatch(onClickDown(score)),
  onClickUpComment: score =>dispatch(onClickUpComment(score)),
  onClickDownComment: score =>dispatch(onClickDownComment(score)),
  addComment:(parentId,author,body) => dispatch(addComment(parentId,author,body))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)




