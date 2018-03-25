import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
 
const Posts = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <Post  {...post}  />
    ))}
  </ul>
)
 

 
export default Posts