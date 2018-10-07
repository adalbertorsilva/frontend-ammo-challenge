import React, { Component } from 'react'
import ProductList from '../../components/ProductList'
import ProductSearch from '../../components/ProductSearch'
import SelectProductsPerPage from '../../components/SelectProductsPerPage'
import Pagination from '../../components/Pagination'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Helmet from 'react-helmet'
import './page.css'

class Home extends Component {
  render() {
    return (
      <div className='container'>

        <Helmet>
          <title>Meu Brechó</title>
        </Helmet>

        <Grid>
          <Col>
            <ProductSearch />
          </Col>
          
          <Col>
            <ProductList />
          </Col>

          <SelectProductsPerPage />
        </Grid>

        <Pagination />
      </div>
    )
  }
}

export default Home
