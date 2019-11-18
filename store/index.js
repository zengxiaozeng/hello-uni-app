import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/modules/home.js'
import mine from '@/store/modules/mine.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
	storage: {
		getItem: key => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: key => uni.clearStorageSync(key)
	}
})

const store = new Vuex.Store({
	modules: {
		home,
		mine
	},
	plugins:[vuexPersisted]
})

export default store
