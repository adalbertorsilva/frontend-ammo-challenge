import React, { Component } from 'react'
import './component.css'

class ListItem extends Component {

    render () {
        return (
            <tr>
                <td>
                    <img alt='' src={this.props.product.product_image} />
                </td>
                <td className='align-middle'>
                    {this.props.product.product_name}
                </td>
                <td className='align-middle'>
                    {this.props.product.category}
                </td>
                <td className='align-middle'>
                    {this.props.product.product_value} R$
                </td>
            </tr>
        )
    }

}

export default ListItem