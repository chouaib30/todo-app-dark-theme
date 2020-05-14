<template>
  <div>
    <!-- DATE + TODO FILTERS -->
    <div
      class="flex lg:justify-between lg:items-center lg:flex-row md:flex-col sm:flex-col flex-col w-full h-auto"
    >
      <Date />
      <TodoFilters />
    </div>

    <!-- ADD NEW TASK -->
    <NewTodo />

    <!-- TODO LIST -->
    <div class="mt-8">
      <h2 class="text-white text-2xl text-left mb-2">Todo List</h2>
      <Todos :filteredTodoList="filteredTodoList">
        <Todo />
      </Todos>
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue'
import NewTodo from '@/components/NewTodo.vue'
import Date from '@/components/Date.vue'
import TodoFilters from '@/components/TodoFilters'
import { mapState } from 'vuex'
export default {
  name: 'TodoContainer',
  components: {
    Todos,
    NewTodo,
    Date,
    TodoFilters
  },
  computed: {
    ...mapState(['filteredTodoList'])
  }
}
</script>

<style lang="scss" scoped>
</style>
