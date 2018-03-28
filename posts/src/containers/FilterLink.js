import { connect } from 'react-redux'
import { setVisibilityFilter,sortBy } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  onClickSortTime: () => dispatch(sortBy("TIME")),
  onClickSortRate: () => dispatch(sortBy("RATE"))


})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
