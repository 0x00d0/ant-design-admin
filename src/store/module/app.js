export default {
  state: {
    Lang: localStorage.getItem("lang")?localStorage.getItem("lang"):'zh_CN'
  },
  getters: {
    Lang(state, getters,rootState){
      return rootState.app.Lang;
    }
  },
  mutations: {
    setLang(state, Lang){
      state.Lang = Lang;
      localStorage.setItem('lang', Lang);
    }
  },
  actions: {
    setLanguage({commit}, {Lang}){
      commit('setLang', Lang);
    }
  }
}












