import React, { Component } from 'react'
import autoBind from 'auto-bind'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'

import IconButton from '../IconButton'
import actionCreator from '../../action_creators'

import './component.css'

export class ProductSearch extends Component {

    constructor () {
        super()
        autoBind(this)
    }

    keyHandler (event) {
        const { getProducts, searchCleared } = this.props
        
        if (event.key === 'Enter') {
            getProducts()
        } else if (event.key === 'Escape') {
            searchCleared()
        }
    }

    render () {

        const { changeSearch, search } = this.props

        return (
            <Grid className='search-form'>
                <Row className='show-grid'>
                    <Col md={11}>
                        <FormControl className='search-field' type='text' placeholder='Lista de produtos ...' value={search} onChange={changeSearch} onKeyDown={this.keyHandler}/>
                    </Col>
                    <Col md={1}>
                        <IconButton/> 
                    </Col>    
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({search: state.searchReducer.search})
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)