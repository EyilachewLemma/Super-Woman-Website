import { createStore } from 'vuex'
import apiClient from '../url/index'

export default createStore({
    state: {
        fields: [],
    },
    getters: {
        fields(state) {
            return state.fields
        }
    },
    mutations: {
        setFields(state, fields) {
            state.fields = fields
        }
    },
    actions: {
        async fetchFields({ commit }) {
            try {
                var response = await apiClient.get('fields')
                if (response.status === 200) {
                    commit('setFields', response.data)
                }
            } catch (err) {
                throw 'error'
            }
        }
    },
    modules: {}
})