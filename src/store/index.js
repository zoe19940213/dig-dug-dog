import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      currentUser: {
        id: 1,
        name: "Zoe Chen",
        account: "zoechen34@hotmail.com",
        password: "831029",
        point: 26,
        postCount: 2,
        replyCount: 6,
      },
      isAuthenticated: true,
    }
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
})

export default store