import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Post = ({onClickDetail,numberOfComments,onClickUp,linkAddress,onClickDelete,onClickDown, deleted, body,title,author,timestamp,voteScore,category }) => (

  <li>
  <h3>{title}</h3>  <button  >EDIT</button><button onClick={onClickDelete} >DELET</button>

  <h4>Author:{author}</h4>
  <p>{timestamp}</p>
  <p>Number of comments:{numberOfComments} </p>
  <button  onClick={onClickUp} >↑</button><p>Current Score: {voteScore}</p><button  onClick={onClickDown}>↓</button>
  <button  onClick={onClickDetail}>    <Link to={linkAddress}>DETAIL</Link></button>

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
