import React from 'react'
import PropTypes from 'prop-types'

const Post = ({onClickDetail,onClickUp,onClickDelete,onClickDown, deleted, body,title,author,timestamp,voteScore }) => (
  <li>
  <h3>{title}</h3>  <button  >EDIT</button><button onClick={onClickDelete} >DELET</button>

  <h4>Author:{author}</h4>
  <p>{timestamp}</p>
  <button  onClick={onClickUp} >↑</button><p>Current Score: {voteScore}</p><button  onClick={onClickDown}>↓</button>
  <button  onClick={onClickDetail}>DETAIL</button>

  <br/>
    {body}
  </li>
)

Post.propTypes = {
  deleted: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  timestamp:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  voteScore:PropTypes.number.isRequired,
  onClickUp:PropTypes.func.isRequired,
  onClickDown:PropTypes.func.isRequired,
  onClickDetail:PropTypes.func.isRequired


}

export default Post
