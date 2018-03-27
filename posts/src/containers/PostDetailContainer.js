import { connect } from 'react-redux'
import {onClickDown,deleteComment, onClickUp,onClickUpComment,onClickDownComment, addComment} from '../actions'
import PostDetail from '../components/PostDetail';


const getCommentsForPost = (comments,parentId) => {
  return comments.filter(c => c.parentId===parentId)

}
const mapStateToProps = state => (
  {
    post:state.showPost,
    comments: getCommentsForPost(state.comments,state.showPost[0].id),
    numberOfComments: state.comments.length

  }
 

)

const mapDispatchToProps = dispatch => ({
  onClickUp: score =>dispatch(onClickUp(score)),
  onClickDown: score =>dispatch(onClickDown(score)),
  onClickUpComment: score =>dispatch(onClickUpComment(score)),
  onClickDownComment: score =>dispatch(onClickDownComment(score)),
  addComment:(parentId,author,body) => dispatch(addComment(parentId,author,body)),
  onDeleteComment:(id)=>dispatch(deleteComment(id))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)




