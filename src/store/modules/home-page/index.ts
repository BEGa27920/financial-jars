/* eslint-disable */

export default {
  namespaced: true,
  state: {
    isOpenNavLeft: true,
  },
  mutations: {
    setIsOpenNavLeft(state: any, value: boolean) {
      state.isOpenNavLeft = value;
    },
    toggleIsOpenNavLeft(state: any) {
      state.isOpenNavLeft = !state.isOpenNavLeft;
    },
  },
  // getters,
};
