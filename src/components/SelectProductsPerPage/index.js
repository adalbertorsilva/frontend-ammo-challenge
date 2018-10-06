import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from '../../action_creators'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import './component.css'

class SelectProductsPerPage extends Component {

    createSelectOptions () {
        const options = []

        for (let i = 1; i <= this.props.products.count; i++) {
            options.push(<option value={i} key={i}>{i} Itens por página</option>)
        }

        return options
    }

    render () {
        return (
            <Col md={3}>
                <FormControl componentClass="select" className='custom-select select-items'
                    value={this.props.limit} onChange={this.props.changeLimit}>
                    {this.createSelectOptions()}
                </FormControl>
            </Col>
        )
    }
}

const mapStateToProps = state => ({
    limit: state.searchReducer.limit,
    products: state.productsReducer.products
})
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SelectProductsPerPage)