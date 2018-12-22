export const strict = false

export const state = () => ({
  currentUser: null
})

export const mutations = {
  currentUser: (state, currentUser) => state.currentUser = currentUser
}

export const getters = {
  currentUser: (state) => state.currentUser
}

export const actions = {
  currentUser: ({ commit }, currentUser) => commit('currentUser', currentUser)
}