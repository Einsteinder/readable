import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from '../components/CommentsList'




let inputCommentAuthor
let inputCommentBody
const PostDetail = ({ comments,post,onDeleteComment,onClickUp,onClickDown,onClickUpComment,onClickDownComment,addComment }) => (
 <div>
  <h3>{post[0].title}</h3>
  <h4>Author:{post[0].author}</h4>
  <p>{post[0].timestamp}</p>
  <button  onClick={() => onClickUp(post[0].id)}>↑</button> <p>Current Score: {post[0].voteScore}</p><button  onClick={() => onClickDown(post[0].id)}>↓</button>
  <br/>
    {post[0].body}

      
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputCommentAuthor.value.trim()) {
          return
        }
        if (!inputCommentBody.value.trim()) {
          return
        }
        addComment(post[0].id,inputCommentAuthor.value,inputCommentBody.value)
        inputCommentAuthor.value =''
        inputCommentBody.value =''

      }}>

        <span>Author: </span>
        <input ref={nodeC => inputCommentAuthor = nodeC} />
        <br/>
        <span>Content: </span>
        <br/>
        <textarea ref={nodeC => inputCommentBody = nodeC} rows="8" cols="55"/>
        <button type="submit">
          Add Comment
        </button>
      </form>
      <CommentsList  onDeleteComment={onDeleteComment} comments={comments} onClickUpComment={onClickUpComment} onClickDownComment={onClickDownComment}/>
    </div>
)

PostDetail.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    timestamp:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    voteScore:PropTypes.number.isRequired
  }).isRequired).isRequired,
  voteScore: PropTypes.number.isRequired,
  onClickUp:PropTypes.func.isRequired,
  onClickDown:PropTypes.func.isRequired,
  addComment:PropTypes.func.isRequired

}

export default PostDetail
