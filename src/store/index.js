import { createStore, createLogger } from 'vuex'

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import user from './modules/auth/user'
import auth from './modules/auth/'
import payment from './modules/payment/'
var ls = new SecureLS({ isCompression: false });


const debug = process.env.NODE_ENV !== 'production'

let plugins = [
	createPersistedState({
    paths: ['user', 'auth', 'payment'],
    }),
]

if(debug) plugins.push(createLogger())

const store = createStore({
    modules: {user, auth, payment},
    strict: debug,
    plugins,
})

export default store
