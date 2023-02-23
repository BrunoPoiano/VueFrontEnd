import axios from "axios"

export default{
    namespaced: true,
    state:{
        productsList:[],
        cart:[],
    },
    mutations:{
        UPDATE_LIST(state, payload){
            state.productsList = payload
        },
        ADD_TO_CART(state, payload){
            state.cart.push(payload)
        },
        REMOVE_FROM_CART(state, payload){
            state.cart = payload
        }
    },
    actions:{
        getProductList({commit}, payload){
            axios.get('products', {
                params:{
                    ...payload
                }
            }).then(({data}) => {
                commit('UPDATE_LIST', data)
            })
        },
        addToCard({commit}, payload){
            commit("ADD_TO_CART", payload)
        },
        removeFromCart({commit}, payload){
            commit("REMOVE_FROM_CART", payload)
        }
    },
}