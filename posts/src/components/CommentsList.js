import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'


class CommentsList extends React.Component {

render(){
  function showAll (comment){
    if(!comment.deleted){
      return true
    }
    return false
  
  }
  return <ul>
    {this.props.comments.filter(c=>showAll(c)).map(comment =>
      <Comment
        key={comment.id}
        {...comment}
        onClickUp={() => this.props.onClickUpComment(comment.id)}
        onClickDown={() => this.props.onClickDownComment(comment.id)}
        onClickDeleteComment={()=>this.props.onDeleteComment(comment.id)}
        updateComment={this.props.updateC}
  
      ></Comment>
    )}
  </ul>}
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    parentId:PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    timestamp:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    voteScore:PropTypes.number.isRequired,
    parentDeleted:PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onClickDownComment: PropTypes.func.isRequired,
  onClickUpComment: PropTypes.func.isRequired,

}

export default CommentsList
