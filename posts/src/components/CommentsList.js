import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const CommentsList = ({ comments, onClickDetail,onClickUpComment,onClickDownComment }) => (
  <ul>
    {comments.map(comment =>
      <Comment
        key={comment.id}
        {...comment}
        onClickUp={() => onClickUpComment(comment.id)}
        onClickDown={() => onClickDownComment(comment.id)}
        onClickDetail={() => onClickDetail(comment.id)}
      ></Comment>
    )}
  </ul>
)

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
  onClickDown: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDetail:PropTypes.func.isRequired

}

export default CommentsList
