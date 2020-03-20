export const state = () => ({
    _currentUser: null,
    _token: null,
    toast: null, //if we have an alert to show    
    todo: 'TODO. For Human Sake officially launches on April 1st, 2020... and this is one of the pieces that still needs to be finished before then. <a href="/join" class="link">Become a member</a> before that April 1st launch - while we’re still working on things - and get 50% off for life ($10/mo instead of $20/mo).'
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