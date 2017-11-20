import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'
axios.interceptors.request.use(function (config) {
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const appService = {
  getPosts(categoryId) {
    return new Promise(resolve => {
      axios
        .get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then(response => {
          resolve(response.data)
        })
    })
  },
  getProfile() {
    return new Promise((resolve) => {
      // axios.get('./services/profile.php',
      //   {
      //     header: {
      //      'Authorization':`Bearer${window.localStorage.getItem('token')}`
      //    }
      //   }
      // )
      //   .then(response => {
      //     resolve(response.data)
      //   })
      const profile = {
        firstName: 'ridwan',
        lastName: 'fansuri',
        favoriteSandwich: 'beef'
      }
      resolve(profile)
    })
  },
  login(credentials) {
    return new Promise((resolve, reject) => {
      const data = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpZHdhbiIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJpc0F1dGhlbnRpY2F0ZWQiOnRydWV9.rkrj0gijTMGbvjFiOEJpyI26mnhX463rj2HpWcqjsuk',
        expiration: 1510199819306
      }
      resolve(data)
      // axios
      //   .post('/services/auth.php', credentials)
      //   .then(response => {
      //     resolve(response.data)
      //   })
      //   .catch(response => {
      //     const data = {
      //       token:
      //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpZHdhbiIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJpc0F1dGhlbnRpY2F0ZWQiOnRydWV9.rkrj0gijTMGbvjFiOEJpyI26mnhX463rj2HpWcqjsuk',
      //       tokenExpiration: new Date().getTime() + 1000000
      //     }
      //     resolve(data)
      //   })
    })
  }
}

export default appService
