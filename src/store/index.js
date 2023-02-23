import { createStore } from 'vuex'
import PageModules from '@/store/VuexPage/PageModules'
import ProductModules from '@/store/Product/ProductModules'
export default createStore({
  state: {
    pageState: PageModules.state,
    productState: ProductModules.state,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    PageModules,
    ProductModules,
  },
  getters: {
    getToDoListState(state){
      return state.PageModules.toDoList
    },
    getProducts(state){
      return state.ProductModules.productsList
    },
    getCartContent(state){
      return state.ProductModules.cart
    }
  },
})
