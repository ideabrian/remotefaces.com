export const state = () => ({
    _currentUser: null,
    _token: null,
    toast: null
})

export const mutations = {
    UPDATE_USER_AVAILABILITY: function (state, availability) {
        state.auth.user.is_available_to_listen = availability
    },
}

export const actions = {
    async updateUserAvailability(context, availability){
        context.commit('UPDATE_USER_AVAILABILITY', availability)
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