import axios from '@service/axios'

class AuthService {
  /* - use this generic method as alternative
    async postRequests(url, data) {
      return await axios.post(url, data)
    }
  */

  async signup(body) {
    const res = await axios.post('/signup', body)
    return res
  }

  async signin(body) {
    const res = await axios.post('/signin', body)
    return res
  }

  async forgotPassword(email) {
    const res = await axios.post('/forgot-password', { email })
    return res
  }

  async resetPassword(token, body) {
    const res = await axios.post(`/reset-password/${token}`, body)
    return res
  }
}

export const authService = new AuthService()
