import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Category = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.REACT}>
    REACT
    </FilterLink>
    <FilterLink filter={VisibilityFilters.REDUX}>
    REDUX
    </FilterLink>
    <FilterLink filter={VisibilityFilters.UDACITY}>
    UDACITY
    </FilterLink>
    <FilterLink filter={VisibilityFilters.ALL}>
    ALL
    </FilterLink>
  </div>
)

export default Category
