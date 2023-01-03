import { createStore } from 'vuex'
import PageModules from '@/store/VuexPage/PageModules'

export default createStore({
  state: {
    pageState: PageModules.state
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    PageModules
  },
  getters: {
    getToDoListState(state){
      return state.PageModules.toDoList
    }
  },
})
