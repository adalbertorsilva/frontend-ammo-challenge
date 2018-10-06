
import React, { Component } from 'react'
import autoBind from 'auto-bind'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from '../../action_creators'
import BSPagination from 'react-bootstrap/lib/Pagination'
import Col from 'react-bootstrap/lib/Col'
import './component.css'

class Pagination extends Component {
    constructor () {
        super()
        autoBind(this)
    }

    getPages() {
        const {products, limit} = this.props
        let pages = Math.floor(products.count/limit) 
        pages = products.count % limit > 0 ? pages + 1 : pages

        return pages
    }

    getPaginationItems () {
        const paginationItems = []

        for (let i = 1; i <= this.getPages(); i++) {
            paginationItems.push(<BSPagination.Item key={i} 
                active={i === this.props.activePage} 
                value={i} onClick={() => this.props.changeOffset(i)} >{i}</BSPagination.Item>)
        }

        return paginationItems
    }

    changePagination (activePage) {
        if (activePage >= 1 && activePage <= this.getPages()) {
            this.props.changeOffset(activePage)
        }
    }

    render () {

        const {activePage} = this.props 

        return (
        <Col className='pagination'>
            <BSPagination bsSize="medium">
                <BSPagination.Prev onClick={() => this.changePagination(activePage -1)}/>
                {this.getPaginationItems()}
                <BSPagination.Next onClick={() => this.changePagination(activePage +1)}/>
            </BSPagination>
        </Col>
        )
    }
}

const mapStateToProps = state => ({ products: state.productsReducer.products, limit: state.searchReducer.limit, activePage: state.searchReducer.activePage })
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)






