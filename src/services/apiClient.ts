import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5d9cca0dc1d04234a8d4f6cbe56f4bee'
  }

})
