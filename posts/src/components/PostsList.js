import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostsList = ({ posts, numberOfComments,onClickDetail,onClickDelete,onClickUp,onClickDown,updatePost }) => (
  <ul>
    {posts.map(post =>
      <Post
        key={post.id}
        {...post}
        onClickUp={() => onClickUp(post.id)}
        onClickDown={() => onClickDown(post.id)}
        onClickDetail={() => onClickDetail(post.id)}
        onClickDelete={() =>onClickDelete(post.id)}
        linkAddress={post.category+"/"+post.id}
        numberOfComments={numberOfComments}
        updatePost={updatePost}
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
  numberOfComments: PropTypes.number.isRequired,
  onClickDown: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDetail:PropTypes.func.isRequired,
  updatePost:PropTypes.func.isRequired

}

export default PostsList
