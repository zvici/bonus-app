import Cookies from 'js-cookie'
export const state = () => ({
  decks: [],
  token: null
})
export const mutations = {
  addDeck (state, newDeck) {
    state.decks.push(newDeck)
  },
  editDeck (state, editDeck) {
    const deckIndex = state.decks.findIndex(deck => deck.id === editDeck)
    state.decks[deckIndex] = editDeck
  },
  setDecks (state, decks) {
    state.decks = decks
  },
  setToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = null
  }
}
export const actions = {
  addDeck (vuexContext, deckData) {
    return this.$axios
      .$post(
        `${process.env.baseApiUrl}/decks.json?auth=${vuexContext.state.token}`,
        deckData
      )
      .then((data) => {
        vuexContext.commit('addDeck', { ...data, id: data.name })
      })
      .catch((e) => {})
  },
  editDeck (vuexContext, deckData) {
    const deckId = deckData.id
    delete deckData.id
    return this.$axios
      .$put(
        `${process.env.baseApiUrl}/decks/${deckId}.json?auth=${vuexContext.state.token}`,
        deckData
      )
      .then((data) => {
        vuexContext.commit('editDeck', { ...data, id: deckId })
      })
      .catch((e) => {})
  },
  setDecks (vuexContext, decks) {
    vuexContext.commit('setDecks', decks)
  },
  // Auth
  authenticateUser (vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      // Mặc định là login
      let authUrlApi = `${process.env.baseApiUrl}/login`
      // Còn cái này là register
      if (!credentials.isLogin) {
        authUrlApi = `${process.env.baseApiUrl}/register`
      }
      // call api bằng axios
      this.$axios
        .$post(authUrlApi, {
          email: credentials.email,
          password: credentials.password
          // returnSecureToken: true
        })
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          if (result.message === 'true') {
            resolve({ success: true })
            if (credentials.isLogin) {
              // Set state token
              vuexContext.commit('setToken', result.token)
              // // Lưu token  Cookie
              Cookies.set('token', result.token)
            }
          } else if (result.message === 'false') {
            reject(result.message)
          }
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  },
  initAuth (vuexContext, req) {
    // eslint-disable-next-line no-console
    console.log('jiji')
    // eslint-disable-next-line no-console
    let token = Cookies.get('token')
    if (req) {
      // lần đầu load, Nuxt chạy ở phía sever
      if (!req.headers.cookie) {
        return false
      }
      const tokenKey = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('token='))
      if (!tokenKey) {
        vuexContext.dispatch('logout')
        return false
      }
      token = tokenKey.split('=')[1]
    }

    vuexContext.commit('setToken', token)
  },
  logout (vuexContext) {
    // Xoá token ở store và cookie
    vuexContext.commit('clearToken')
    Cookies.remove('token')
    Cookies.remove('tokenExpiration')
  }
}
export const getters = {
  decks (state) {
    return state.decks.reverse()
  },
  isAuthenticated (state) {
    return state.token != null
  }
}
