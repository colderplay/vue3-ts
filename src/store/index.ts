import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import todos, { TodoState } from "./modules/todo";

//在setup里面用的
export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  counter: number;
  todos?: TodoState;
};
export default createStore({
  state: {
    counter: 10,
  },
  mutations: {
    add(state) {
      state.counter++;
    },
  },
  modules: {
    todos,
  },
});
