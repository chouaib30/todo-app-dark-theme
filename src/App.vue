<template>
  <div
    id="app"
    class="bg-gray-800 h-auto lg:max-w-full lg:w-1/2 w-11/12 my-6 lg:my-8 mx-auto px-6 py-4 rounded-lg shadow-xl overflow-hidden"
  >
    <TodoContainer />
  </div>
</template>

<script>
import TodoContainer from '@/components/TodoContainer.vue'

export default {
  name: 'App',
  components: {
    TodoContainer
  }
}
</script>

<style lang="scss">
body {
  @apply bg-pink-600;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
