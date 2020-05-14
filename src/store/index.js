import Vue from 'vue'
import Vuex from 'vuex'
import todosList from '../data/todosList'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: todosList.todos,
    filteredTodoList: todosList.todos,
    filter: 'all'
  },
  mutations: {
    /* ADD NEW TASK */
    ADD_TODO(state, todo) {
      state.filteredTodoList.push(todo)
    },
    /* DELETE TASK */
    DELETE_TODO(state, index) {
      state.filteredTodoList.splice(index, 1)
    },
    /* FILTER TASKS */
    FILTER_TODO(state, filter) {
      if (filter == 'all') {
        return (state.filteredTodoList = state.todos)
      } else if (filter == 'active') {
        return (state.filteredTodoList = state.todos.filter(
          todo => !todo.completed
        ))
      } else if (filter == 'completed') {
        return (state.filteredTodoList = state.todos.filter(
          todo => todo.completed
        ))
      }
      return (state.filteredTodoList = state.todos)
    }
    /* MOVE TODO */
    // MOVE_TODO(state, { from, to }) {
    //   const todoToMove = state.filteredTodoList.splice(from, 1)
    //   state.filteredTodoList.splice(to, 0, todoToMove)
    // }
  },
  actions: {},
  getters: {},
  modules: {}
})
