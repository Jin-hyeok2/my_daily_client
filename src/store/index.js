// import { createStore } from "vuex";
// import login from "@/store/modules/login";
// import formInitiator from "@/store/modules/formInitiator"
//
// export default createStore({
//   modules: [login, formInitiator],
// });


import { createStore } from "vuex";
// import login from "@/store/modules/login";
// import formInitiator from "@/store/modules/formInitiator"

export default createStore({
  state: {
    initFunction: undefined,
  },
  mutations: {
    setInitFunction(state, func) {
      state.initFunction = func;
    },
  },
  actions: {
    callFunction({ state }) {
      if (state.initFunction) {
        state.initFunction();
      }
    },
  },
});