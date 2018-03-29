import React from 'react'
import PropTypes from 'prop-types'
import {  Link } from "react-router-dom";






class Post extends React.Component {
  state = {
    edit: false,
    selectedOption:'react'
  }

  handleOptionChange =  (changeEvent)=> {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  render() {
    let inputTitle
    let inputAuthor
    let inputBody
    var updateCurrentdate = new Date(); 
    var updateCurrentdatetime = updateCurrentdate.getDate() + "/"
                + (updateCurrentdate.getMonth()+1)  + "/" 
                + updateCurrentdate.getFullYear() + " @ "  
                + updateCurrentdate.getHours() + ":"  
                + updateCurrentdate.getMinutes() + ":" 
                + updateCurrentdate.getSeconds();
    return (
      <li>
        {this.state.edit ? (
          <div>
          <form onSubmit={e => {
        e.preventDefault()
        if (!inputTitle.value.trim()) {
          return
        }
        if (!inputAuthor.value.trim()) {
          return
        }
        if (!inputBody.value.trim()) {
          return
        }
        this.setState({ edit: false })
        this.props.updatePost(this.props.id,this.state.selectedOption,inputTitle.value,inputAuthor.value,inputBody.value,updateCurrentdatetime)
        inputTitle.value = ''
        inputAuthor.value =''
        inputBody.value =''

      }}>
      <div className="radio">
          <label>
            <input type="radio" value="react" name = "category" checked={this.state.selectedOption === 'react'} onChange={this.handleOptionChange}/>
            REACT
          </label>
        </div>
        <div className="radio">
          <label>
          <input type="radio" value="redux"  name = "category" checked={this.state.selectedOption === 'redux'} onChange={this.handleOptionChange}/>
            REDUX
          </label>
        </div>
        <div className="radio">
          <label>
          <input type="radio" value="udacity"  name="category" checked={this.state.selectedOption === 'udacity'} onChange={this.handleOptionChange}/>
            UDACITY
          </label>
        </div>
        <span>Title: </span>
        <input ref={node => inputTitle = node} value={this.props.title}/>
        <span>Author: </span>
        <input ref={node => inputAuthor = node} value={this.props.author}/>
        <br/>
        <span>Content: </span>
        <br/>
        <textarea ref={node => inputBody = node} value = {this.props.body} rows="8" cols="55"/>
        <button type="submit">
          Update Post
        </button>
      </form>
          </div>


        ) : (
          <div>
            <button onClick={() =>this.setState({ edit: true })}>EDIT</button>
            <button onClick={this.props.onClickDelete} >DELET</button>
            <h3>{this.props.title}</h3>
            <h4>Author:{this.props.author}</h4>
            <p>{this.props.timestamp}</p>
            <p>Number of comments:{this.props.numberOfComments} </p>
            <button onClick={this.props.onClickUp} >↑</button>
            <p>Current Score: {this.props.voteScore}</p>
            <button onClick={this.props.onClickDown}>↓</button>
            <button onClick={this.props.onClickDetail}><Link to={this.props.linkAddress}>DETAIL</Link></button>
            <br />
            <p>{this.props.body} </p>
            </div>

          )}
    
  </li>
    )
  }
}
Post.propTypes = {
  deleted: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  onClickUp: PropTypes.func.isRequired,
  onClickDown: PropTypes.func.isRequired,
  onClickDetail: PropTypes.func.isRequired


}

export default Post
