import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import task from "./module/task"


export default new Vuex.Store({
  modules: {
    task
  }
});
