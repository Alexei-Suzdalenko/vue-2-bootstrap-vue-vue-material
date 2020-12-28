import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    displayJobs: [],
    rows: 0,
    userData: {showSpinner: false}
  },

  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_JOBS(state, displayJobs) {
      state.displayJobs = displayJobs;
    },
    SET_SPINNER(state, {showSpinner}){
      state.userData = Object.assign(state.userData, {showSpinner});
   }
  },

  actions: {
    async fetchData({commit}) {
      commit("SET_SPINNER", {showSpinner: true});
      return new Promise((resol) => {
        setTimeout(async () => {
          const res = await fetch("jobs.json");
          const val = await res.json();
          commit("SET_SPINNER", {showSpinner: false});
          resol(val);
        }, 1000);
      });
    },
    async fetchJobs({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");
      commit("SET_JOBS", myJson);
      const displayJobs = myJson.slice(0, 3);
      commit("SET_DISPLAY_JOBS", displayJobs);
      commit("SET_ROWS", myJson.length);
    },
    async paginate({ commit, state }, payload) {
      const start = (payload.currentPage - 1) * payload.perPage;
      const jobs = state.jobs.slice(start, start + payload.perPage);
      commit("SET_DISPLAY_JOBS", jobs);
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_JOBS", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async search({ dispatch }, payload) {
      const myJson = await this.dispatch("fetchData");
      const values = myJson.filter(val => val.name.toLowerCase().includes(payload.text.toLowerCase()));
      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3,
      });
    },
  },

  getters: {
    jobs(state) {
      return state.jobs;
    },
    displayJobs(state) {
      return state.displayJobs;
    },
    rows(state) {
      return state.rows;
    },
    userData(state) {
      return state.userData;
    },
  },

  modules: {},
});
