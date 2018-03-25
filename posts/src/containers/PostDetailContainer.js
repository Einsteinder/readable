import { connect } from 'react-redux'
import {onClickDown,onClickUp } from '../actions'
import PostDetail from '../components/PostDetail';



const mapStateToProps = state => (
  {post:state.showPost}
)

const mapDispatchToProps = dispatch => ({
  onClickUp: score =>dispatch(onClickUp(score)),
  onClickDown: score =>dispatch(onClickDown(score)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
