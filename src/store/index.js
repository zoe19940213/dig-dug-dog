import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      currentUser: {
        id: 0,
        name: "",
        account: "",
        password: "",
        point: 0,
        postCount: 0,
        replyCount: 0,
      },
      isAuthenticated: false,
      token: ''
    }
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
      state.token = sessionStorage.getItem('token')

    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      sessionStorage.removeItem('token')

      // <-- delete if api works
      sessionStorage.removeItem('currentUser')
        // delete if api works -->
    }
  },
  actions: {
    fetchCurrentUser({ commit }) {
      // api fetch currentUser 

      // <-- delete if api works
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
        // delete if api works -->

      commit('setCurrentUser', currentUser)
      return true // depend on api result
    }
  }
})

export default store