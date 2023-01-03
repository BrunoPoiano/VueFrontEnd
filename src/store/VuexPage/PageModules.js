export default {
    namespaced: true,
    state: {
        toDoList: []
    },
    mutations: {
        UPDATE_LIST(state, payload){
            state.toDoList = payload
        }
    },
    actions: {
        addToDOList({commit}, value){
            commit('UPDATE_LIST', value)
        }
    }
}