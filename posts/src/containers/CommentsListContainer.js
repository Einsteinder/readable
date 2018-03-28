import { connect } from 'react-redux'
import {deleteComment,onClickUpComment,updateComment,onClickDownComment} from '../actions'
import CommentsList from '../components/CommentsList';


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
  onClickUpComment: score =>dispatch(onClickUpComment(score)),
  onClickDownComment: score =>dispatch(onClickDownComment(score)),
  onDeleteComment:(id)=>dispatch(deleteComment(id)),
  updateC:(id,parentId,author,body,updateDatetime)=>(updateComment(id,parentId,author,body,updateDatetime))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList)




