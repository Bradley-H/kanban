import {defineStore} from "pinia";

export const useLoginStore = defineStore('login', {
  state: () => ({
    username: "",
    password: "",
  }),
  actions: {},
  getters: {},
});