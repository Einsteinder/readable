import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
class PostsList extends React.Component {
  componentDidMount(){
    this.props.checkLink()
  }

render(){
  return(

  <ul>
    {this.props.posts.map(post =>
      <Post
        key={post.id}
        {...post}
        onClickUp={() => this.props.onClickUp(post.id)}
        onClickDown={() => this.props.onClickDown(post.id)}
        onClickDetail={() => this.props.onClickDetail(post.id)}
        onClickDelete={() =>this.props.onClickDelete(post.id)}
        linkAddress={post.category+"/"+post.id}
        numberOfComments={this.props.numberOfComments}
        updatePost={this.props.updatePost}
      ></Post>
    )}
  </ul>
)}}

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
