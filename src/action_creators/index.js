import apiClient from '../api_client'


const getProductsAction = (response) => ({ type: 'GET_PRODUCTS', payload: response.data.products })
const changeOffsetAction = (payload) => ({ type: 'OFFSET_CHANGED', payload })


const getProducts = () => {
    return async (dispatch, getState) => {
        const {search, limit} = getState().searchReducer

        const paginationPayload = {
            offset: 0,
            activePage: 1
        }

        const response = await apiClient.get(search, limit, paginationPayload.offset)

        dispatch([getProductsAction(response), changeOffsetAction(paginationPayload)])
    }
}

const changeSearch = (event) => ({
    type: 'SEARCH_CHANGED',
    payload: event.target.value
})

const searchCleared = () => ({
    type: 'SEARCH_CLEARED',
    payload: ''
})

const changeLimit = (event) => {
    
    const limitChangedAction = {
        type: 'LIMIT_CHANGED',
        payload: event.target.value
    }

    return async (dispatch) => {
        dispatch([limitChangedAction, getProducts()])
    }
}

const changeOffset = (activePage = 0) => {
    return async (dispatch, getState) => {

        const {search, limit} = getState().searchReducer
        const offset = ( activePage -1 ) * limit
        const response = await apiClient.get(search, limit, offset)

        const offsetPayload = { offset, activePage }  

        dispatch([changeOffsetAction(offsetPayload) , getProductsAction(response)])
    }

}


export default { getProducts, changeSearch, changeLimit, searchCleared, changeOffset}