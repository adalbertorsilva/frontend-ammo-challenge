import autoBind from 'auto-bind'
import axios from 'axios'

class ApiClient {
    constructor () {
        autoBind(this)
        this.url = process.env.REACT_APP_API_URL
    }

    async get(search, limit, offset) {
        const baseUrl = `${this.url}limit=${limit}&&offset=${offset}`
        const url = search ? `${baseUrl}&&product_name=${search}` : baseUrl
        return await axios.get(url)
    }

}

export default new ApiClient()