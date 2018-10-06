import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/lib/Table'
import ListItem from '../ListItem'
import actionCreator from '../../action_creators'
import './component.css'

class ProductList extends Component {

    constructor () {
        super()

        this.state = {
            products: {}
        }

    }

    componentDidMount () {
        this.props.getProducts()
    }

    render () {

        const showProducts = this.props.products.rows

        return (
            <div>
                <Table condensed hover>
                    <thead>
                        <tr>
                            <th> <i className='fa fa-camera' /> </th>
                            <th> Nome </th>
                            <th> Categoria </th>
                            <th> Preço </th>
                        </tr>
                    </thead>
                    <tbody>
                        {showProducts ? 
                            this.props.products.rows.map(product => <ListItem product={product} key={product.id}/>)
                            : false}
                    </tbody>
                </Table>
            </div>
        )
    }

}

const mapStateToProps = state => ({ products: state.productsReducer.products })
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)