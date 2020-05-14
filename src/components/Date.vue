<template>
  <div class="text-left lg:w-1/2 lg:mb-0 md:w-full sm:w-full mb-3">
    <h2 class="text-white text-2xl">{{ date }}</h2>
    <span class="text-pink-600 font-medium">
      <b>{{ filteredTodoList.length }}</b> Tasks
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'Date',
  computed: {
    date() {
      return moment().format('MMMM Do YYYY')
    },
    ...mapState(['filteredTodoList'])
  }
}
</script>

<style lang="scss" scoped></style>
