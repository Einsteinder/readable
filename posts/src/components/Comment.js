import React from 'react'
import PropTypes from 'prop-types'


class Comment extends React.Component {
  state = {
    edit: false,
  }

  render() {
    let inputAuthor
    let inputBody
    var updateCurrentdate = new Date(); 
var updateDatetime = updateCurrentdate.getDate() + "/"
            + (updateCurrentdate.getMonth()+1)  + "/" 
            + updateCurrentdate.getFullYear() + " @ "  
            + updateCurrentdate.getHours() + ":"  
            + updateCurrentdate.getMinutes() + ":" 
            + updateCurrentdate.getSeconds();
    return (
      <div>
      {this.state.edit ? (
          <form onSubmit={e => {
        e.preventDefault()

        if (!inputAuthor.value.trim()) {
          return
        }
        if (!inputBody.value.trim()) {
          return
        }
        this.setState({ edit: false })
        this.props.updateComment(this.props.id,this.props.parentId,inputAuthor.value,inputBody.value,updateDatetime)
        console.log(this.props.id,this.props.parentId,inputAuthor.value,inputBody.value)
        inputAuthor.value =''
        inputBody.value =''

      }}>
        <span>Author: </span>
        <input ref={node => inputAuthor = node} />
        <br/>
        <span>Content: </span>
        <br/>
        <textarea ref={node => inputBody = node} rows="8" cols="55"/>
        <button type="submit">
          Update Comment
        </button>
      </form>) : (
        <div>
  <h4>Author:{this.props.author}</h4> <button onClick={()=>this.setState({ edit: true } )}>EDIT</button><button onClick={this.props.onClickDeleteComment} >DELET</button>
  <p>{this.props.timestamp}</p>
  <button  onClick={this.props.onClickUp} >↑</button><p>Current Score: {this.props.voteScore}</p><button  onClick={this.props.onClickDown}>↓</button>

  <br/>
    {this.props.body}
    </div>


)}
</div>
)

}}

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
