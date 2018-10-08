import React, { Component } from 'react'
import autoBind from 'auto-bind'
import './component.css'

class ListItem extends Component {

    constructor () {
        super()
        autoBind(this)
    }

    formatToCurrency (value) {
        return parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }


    render () {

        const { product_image, product_name, category, product_value } = this.props.product

        return (
            <tr>
                <td>
                    <img alt='' src={product_image} />
                </td>
                <td className='align-middle'>
                    {product_name}
                </td>
                <td className='align-middle'>
                    {category}
                </td>
                <td className='align-middle'>
                    R$ {this.formatToCurrency(product_value)}
                </td>
            </tr>
        )
    }

}

export default ListItem