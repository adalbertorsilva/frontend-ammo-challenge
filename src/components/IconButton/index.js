import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from '../../action_creators'
import Button from 'react-bootstrap/lib/Button'
import './component.css'


class IconButton extends Component{
    
    render () {
        return (
            <Button bsStyle='primary' bsSize='large' className='search-button' onClick={this.props.getProducts}>
                <i className='fa fa-search' />
            </Button>
        )
    }
}

const mapStateToProps = state => ({search: state.searchReducer.search})
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IconButton)