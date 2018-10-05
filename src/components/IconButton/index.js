import React, { Component } from 'react'

import './component.css'


class IconButton extends Component{

    render () {
        return (
            <button className={`btn btn-info search-button`} >
                <i className='fa fa-search' />
            </button>
        )
    }

}

export default IconButton