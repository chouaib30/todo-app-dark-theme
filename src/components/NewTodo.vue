<template>
  <div class="flex justify-start mt-8 w-full">
    <input
      class="shadow appearance-none rounded w-3/4 sm:w-4/5 px-5 py-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-none mr-3"
      type="text"
      placeholder="Add New Task ..."
      v-model="description"
    />
    <button
      class="bg-pink-600 text-white rounded px-5 py-3 font-medium focus:outline-none focus:shadow-none hover:bg-pink-500 focus:bg-pink-700 transition transition-all easing-linear duration-200 shadow-lg w-1/4 sm:w-1/5"
      @click.prevent="addNewTodo"
    >
      Add Task
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { uuid } from '../utils/utils'
export default {
  name: 'NewTodo',
  data() {
    return {
      description: '',
      id: uuid()
    }
  },
  methods: {
    addNewTodo() {
      if (this.description.trim().length === 0) {
        return
      }
      let newTodo = {
        id: this.id,
        description: this.description,
        completed: false,
        edit: false
      }
      this.$store.commit('ADD_TODO', newTodo)
      this.description = ''
    }
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style lang="scss" scoped></style>
