import React from 'react'
import AddPost from '../containers/AddPost'
import VisiblePostsList from '../containers/VisiblePostsList'
import Category from './Category';
import PostDetailContainer from '../containers/PostDetailContainer'
const App = () => (
  <div>
    <AddPost />
    <Category />
    <VisiblePostsList />
    <PostDetailContainer/>

  </div>
)

export default App
