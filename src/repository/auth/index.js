import request from '../axios.js'
import config from '~/config'

export default {
  // Log in
  async login (data) {
    return await request().post(`${config.baseUrl}/login`, data)

  },
  
  async register (data) {
    return await request().post(`${config.baseUrl}/signup`, data)
  },

  async user () {
    return await request().get(`${config.baseUrl}/user`)
  },
}