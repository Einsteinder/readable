import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostsList = ({ posts, onClickDetail,onClickUp,onClickDown }) => (
  <ul>
    {posts.map(post =>
      <Post
        key={post.id}
        {...post}
        onClickUp={() => onClickUp(post.id)}
        onClickDown={() => onClickDown(post.id)}
        onClickDetail={() => onClickDetail(post.id)}
      ></Post>
    )}
  </ul>
)

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    timestamp:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    voteScore:PropTypes.number.isRequired
  }).isRequired).isRequired,
  onClickDown: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDetail:PropTypes.func.isRequired

}

export default PostsList
