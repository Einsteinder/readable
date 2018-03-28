import React from 'react'
import PropTypes from 'prop-types'
import CommentsListContainer from '../containers/CommentsListContainer'





class PostDetail extends React.Component{
  render(){
  let inputCommentAuthor
  let inputCommentBody
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/" 
              + currentdate.getFullYear() + " @ "  
              + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
  return <div>
    <h3>{this.props.post[0].title}</h3>
    <h4>Author:{this.props.post[0].author}</h4>
    <p>{this.props.post[0].timestamp}</p>
    <p>Number of Comments: {this.props.numberOfComments}</p>
    <button onClick={() => this.props.onClickUp(this.props.post[0].id)}>↑</button> <p>Current Score: {this.props.post[0].voteScore}</p><button onClick={() => this.props.onClickDown(this.props.post[0].id)}>↓</button>
    <br />
    {this.props.post[0].body}


    <form onSubmit={e => {
      e.preventDefault()
      if (!inputCommentAuthor.value.trim()) {
        return
      }
      if (!inputCommentBody.value.trim()) {
        return
      }
      this.props.addComment(this.props.post[0].id, inputCommentAuthor.value, inputCommentBody.value,datetime)
      inputCommentAuthor.value = ''
      inputCommentBody.value = ''

    }}>

      <span>Author: </span>
      <input ref={nodeC => inputCommentAuthor = nodeC} />
      <br />
      <span>Content: </span>
      <br />
      <textarea ref={nodeC => inputCommentBody = nodeC} rows="8" cols="55" />
      <button type="submit">
        Add Comment
        </button>
    </form>
    <CommentsListContainer />
  </div>
  }}

PostDetail.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired
  }).isRequired).isRequired,
  numberOfComments: PropTypes.number.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired

}

export default PostDetail
