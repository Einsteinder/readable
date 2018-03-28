import React from 'react'
import PropTypes from 'prop-types'


class Link extends React.Component {

    render(){
      return(
        <div>
        <button
       onClick={this.props.onClick}
       disabled={this.props.active}
       style={{
           marginLeft: '4px',
       }}
    >
   {this.props.children}
      
    </button>
        <span>Sort By: </span>
        <button onClick={this.props.onClickSortTime}>TIME</button><button onClick={this.props.onClickSortRate} >RATE</button>
    
        </div>
      )
    }
    }





Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
