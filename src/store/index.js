import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  //store 만든다
  state: {
    isAddBoard: false
  }
});

//store 내보내기
export default store;
