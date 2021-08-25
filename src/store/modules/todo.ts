import { Module } from "vuex";
import { State } from "..";
import { ToDo } from "../../components/types";
const initialState = {
  todo: [
    {
      id: 5,
      name: "喜欢学习",
      completed: false,
    },
  ] as ToDo[],
};

export type TodoState = typeof initialState;
export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: ToDo[]) {
      state.todo = payload;
    },
    addTodo(state, payload: ToDo) {
      state.todo.push(payload);
    },
  },
  actions: {
    initTodo({ commit }) {
      setTimeout(() => {
        commit("initTodo", [
          {
            id: 5,
            name: "不喜欢学习----state",
            completed: false,
          },
        ]);
      }, 500);
    },
  },
} as Module<TodoState, State>;
