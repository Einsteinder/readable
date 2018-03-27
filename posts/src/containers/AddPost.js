import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

class AddPost extends React.Component {
  state = {
    selectedOption:'react'
  }
  handleOptionChange =  (changeEvent)=> {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }


  dispatch = this.props.dispatch
  render(){
  let inputTitle
  let inputAuthor
  let inputBody

  return (
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
        this.dispatch(addPost(this.state.selectedOption,inputTitle.value,inputAuthor.value,inputBody.value))
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
        <input ref={node => inputTitle = node} />
        <span>Author: </span>
        <input ref={node => inputAuthor = node} />
        <br/>
        <span>Content: </span>
        <br/>
        <textarea ref={node => inputBody = node} rows="8" cols="55"/>
        <button type="submit">
          Add Post
        </button>
      </form>
    </div>
  )
}
}
export default connect()(AddPost)
