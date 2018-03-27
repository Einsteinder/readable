import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ onClickUp,onClickDown,onClickDeleteComment, deleted, body,author,timestamp,voteScore }) => (
  <li>
  <h4>Author:{author}</h4> <button  >EDIT</button><button onClick={onClickDeleteComment} >DELET</button>
  <p>{timestamp}</p>
  <button  onClick={onClickUp} >↑</button><p>Current Score: {voteScore}</p><button  onClick={onClickDown}>↓</button>

  <br/>
    {body}
  </li>
)

Comment.propTypes = {
  deleted: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  timestamp:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  voteScore:PropTypes.number.isRequired,
  onClickUp:PropTypes.func.isRequired,
  onClickDown:PropTypes.func.isRequired,



}

export default Comment
