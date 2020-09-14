const state = {
    currentUser:{
    }
}
const actions = {
    updateCurrentUser({commit},data){
        commit("setCurrentUser",data)
    }
}
const mutations = {
    setCurrentUser(state,data){
        state.currentUser = data
    }
}
const getters = {
    getCurrentUser(state){
        return state.currentUser
    }
}

export default{
    namespace:"user",
    state,
    actions,
    mutations,
    getters
}