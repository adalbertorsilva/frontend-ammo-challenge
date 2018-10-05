import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import ProductList from '../../components/ProductList'
import ProductSearch from '../../components/ProductSearch'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <ProductSearch />
        <ProductList />
      </div>
    )
  }
}

export default Home
