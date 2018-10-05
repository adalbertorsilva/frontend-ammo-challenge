import axios from 'axios'

const getProducts = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:3333/api/products`)
        dispatch({ type: 'GET_PRODUCTS', payload: response.data.products })
    }
}

export default {getProducts}