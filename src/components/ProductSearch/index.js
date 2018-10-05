import React, { Component } from 'react'
import autoBind from 'auto-bind'
import IconButton from '../IconButton'

import './component.css'

class ProductSearch extends Component {

    constructor () {
        super()
        autoBind(this)
    }

    render () {

        return (
            <div role='form' className='search-form'>
                <input id='description' className='search-field' placeholder='Lista de produtos ...'/>
                <IconButton/>
            </div>
        )
    }
}


export default ProductSearch