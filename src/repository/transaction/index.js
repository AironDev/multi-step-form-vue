import request from '../axios.js'
import config from '~/config'

export default {
  // Verify fluttewave
  async verify (data) {
    return await request().post(`${config.baseUrl}/flutterwave/webhook`, data)
  },
  
}