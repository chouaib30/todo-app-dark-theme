<template>
  <div class="flex lg:justify-end lg:w-1/2 md:w-full sm:w-full sm:justify-start md:justify-start">
    <button
      class="bg-pink-600 text-white w-1/3 p-2 shadow-lg lg:text-lg text-sm font-medium rounded transition transition-all easing-linear duration-200 hover:bg-pink-500 focus:outline-none focus:bg-pink-700 cursor-pointer"
      @click.prevent="filterTodo((filter = 'all'))"
    >All</button>
    <button
      class="bg-pink-600 text-white w-1/3 p-2 shadow-lg ml-3 font-medium rounded transition transition-all easing-linear duration-200 hover:bg-pink-500 focus:outline-none focus:bg-pink-700 cursor-pointer"
      @click.prevent="filterTodo((filter = 'active'))"
    >Incomplete Tasks</button>
    <button
      class="bg-pink-600 text-white w-1/3 p-2 shadow-lg ml-3 rounded font-medium transition transition-all easing-linear duration-200 hover:bg-pink-500 focus:outline-none focus:bg-pink-700 cursor-pointer"
      @click.prevent="filterTodo((filter = 'completed'))"
    >Completed Tasks</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TodoFilters',
  methods: {
    filterTodo(filter) {
      this.$store.commit('FILTER_TODO', filter)
    }
  },
  computed: {
    ...mapState(['filteredTodoList'])
  }
}
</script>

<style lang="scss" scoped></style>
