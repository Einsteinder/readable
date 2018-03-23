import { combineReducers } from 'redux'
import { fetchPosts } from '../utils/api'

import {
    ADD_POST,
    GET_ALL_POST
  } from '../actions'
  const initialState = {
    visibilityFilter: {},
    posts: {}
  }
function postsRelated (state = {}, action) {
    switch (action.type) {
      case ADD_POST :
        const { post } = action
  
        return {
          ...state,
          [action.id]: action
        }
      default :
        return state
    }
  }

  export default combineReducers({
    postsRelated
  })