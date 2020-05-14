<template>
  <transition-group tag="ul" name="slide-up" mode="out-in" class="todo_list relative my-4">
    <Todo
      :todo="todo"
      v-for="(todo, index) in filteredTodoList"
      :key="index"
      v-on:delete-todo="deleteTodo(index)"
    />
  </transition-group>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'Todos',
  components: {
    Todo
  },
  props: {
    filteredTodoList: {
      type: Array,
      required: true
    }
  },
  methods: {
    /* DELETE TODO */
    deleteTodo(index) {
      this.$store.commit('DELETE_TODO', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
