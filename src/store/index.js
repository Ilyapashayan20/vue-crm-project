import { startOfSecond } from 'date-fns'
import { createStore } from 'vuex'
import auth from './auth'

export default createStore({
  state: {
    error : null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError(state,error){
      startOfSecond.error = error
    },
    clearError(state){
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
