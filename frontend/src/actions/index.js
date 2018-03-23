export const ADD_POST = 'ADD_POST'
export const GET_ALL_POST = 'GET_ADD_POST'

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

