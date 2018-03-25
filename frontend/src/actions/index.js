export const ADD_POST = 'ADD_POST'
export const GET_ALL_POST = 'GET_ADD_POST'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function getAllPost ({posts}) {
  return {
    type: GET_ALL_POST,
    posts
  }
}


export function addPost ({id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted}) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

