import { combineReducers } from 'redux'
import { fetchPosts } from '../utils/api'


import {
    ADD_POST,
    GET_ALL_POST,
    VisibilityFilters
  } from '../actions'
  const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    posts: {}
  }

  function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
      case VisibilityFilters.SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
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
    postsRelated,
    visibilityFilter
  })