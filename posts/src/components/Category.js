import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Category = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.REACT}>
    <Link to="/react">REACT</Link>

    </FilterLink>
    <FilterLink filter={VisibilityFilters.REDUX}>
    <Link to="/redux">REDUX</Link>

    
    </FilterLink>
    <FilterLink filter={VisibilityFilters.UDACITY}>
    <Link to="/udacity">UDACITY</Link>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.ALL}>
    ALL
    </FilterLink>
  </div>
)

export default Category
