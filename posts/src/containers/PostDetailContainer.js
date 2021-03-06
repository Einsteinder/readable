import { connect } from 'react-redux'
import {onClickDown,deleteComment, onClickUp,onClickUpComment,updateComment,onClickDownComment, addComment} from '../actions'
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
  addComment:(parentId,author,body,timestamp) => dispatch(addComment(parentId,author,body,timestamp)),
  onDeleteComment:(id)=>dispatch(deleteComment(id)),
  updateC:(id,parentId,author,body,timestamp)=>(updateComment(id,parentId,author,body,timestamp))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)




