export default {
  state: {
    initFunction: undefined,
  },
  mutations: {
    setInitFunction(state, func) {
      state.initFunction = func;
    }
  },
  actions: {
    callFunction(state) {
      if (state.initFunction) {
        console.log("hi")
        state.initFunction();
      }
    }
  }
}