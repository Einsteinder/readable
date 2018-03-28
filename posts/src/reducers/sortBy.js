const sortBy = (state , action) => {
    switch (action.type) {
      case 'SORT_BY':
        return action.filter
      default:
        return state
    }
  }
  
  export default sortBy
  