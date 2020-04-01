export const state = () => ({
    _currentUser: null,
    _token: null,
    toast: null 
})

export const mutations = {
    UPDATE_USER_AVAILABILITY: function (state, availability) {
        state.auth.user.is_available_to_listen = availability
    },
    ADD_USER_ROOM: function (state, room) {
        state.auth.user.rooms.push(room)
    },
}

export const actions = {
    async updateUserAvailability(context, availability){
        context.commit('UPDATE_USER_AVAILABILITY', availability)
    },
    async addUserRoom(context, room){
        context.commit('ADD_USER_ROOM', room)
    }
}

export const getters = {
    isLoggedIn(state) {
        return state.auth.loggedIn
    },
    memberProfile(state) {
        return state.auth.user
    },
    isListener(state){
        return (state.auth.loggedIn && state.auth.user.is_listener)
    },
    isAvailableToListen(state, getters){
        return (getters.isListener && state.auth.user.is_available_to_listen)
    }
}