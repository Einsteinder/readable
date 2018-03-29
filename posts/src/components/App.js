import React from 'react'
import AddPost from '../containers/AddPost'
import VisiblePostsList from '../containers/VisiblePostsList'
import Category from './Category';
import PostDetailContainer from '../containers/PostDetailContainer'
import { Route, Redirect } from "react-router-dom";
const App = () => (
  <div>
    <AddPost />
    <Category />
    <Route path="/:category" component={VisiblePostsList} />

    <Route path="/:category/:id" component={PostDetailContainer} />


    <Route exact path="/" render={() => (

      <Redirect to="/ALL" />

    )} />
  </div>
)

export default App
