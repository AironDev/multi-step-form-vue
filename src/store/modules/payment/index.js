import payment from '~/repository/payment'
const state = () => ({
    isLogged: false,
    token: '',
})

const getters = {
    isLogged: (state) => {
        return state.isLogged
    },
}

const actions = {
    async createPaymentLink({ commit, dispatch }, data) {
        let res = await payment.createPaymentLink(data)
        return res.data
    },

    
    async getPaymentLinkDetails({ commit, dispatch }, data) {
        let res = await payment.fetchPaymentLink(data)
        return res.data.data
    },

    
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
