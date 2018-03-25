import React from 'react'
import PropTypes from 'prop-types'

const PostDetail = ({ post, }) => (
  <li>
  <h3>{post[0].title}</h3>
  <h4>Author:{post[0].author}</h4>
  <p>{post[0].timestamp}</p>
  <br/>
    {post[0].text}
  </li>
)

PostDetail.propTypes = {
  post: PropTypes.array.isRequired,

}

export default PostDetail
