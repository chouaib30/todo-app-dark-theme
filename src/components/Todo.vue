<template>
  <li
    class="todo w-full flex items-center py-4 bg-gray-900 rounded-lg px-4 my-3 transition transition-all ease-linear duration-200"
  >
    <div class="w-3/4 flex justify-start items-center">
      <label class="flex justify-center items-center relative w-6 h-6">
        <input
          type="checkbox"
          class="absolute opacity-0 w-0 h-0"
          @change="markAsCompleted"
          :checked="todo.completed"
        />
        <span
          class="checkmark absolute top-0 left-0 bg-gray-700 rounded-md w-6 h-6 shadow cursor-pointer"
        ></span>
      </label>
      <div class="flex justify-between items-center relative w-full ml-3">
        <span
          v-if="!todo.edit"
          class="w-full text-white absolute z-20 text-left ml-4 transition transition-all ease-linear duration-300"
          :class="{ completed: todo.completed }"
          @dblclick.prevent="editTodo"
        >{{ todo.description }}</span>
        <input
          class="shadow appearance-none rounded w-full px-5 py-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-none absolute z-10"
          type="text"
          placeholder="Add New Task ..."
          v-else
          @blur="doneEdit"
          @keyup.enter="doneEdit"
          @keyup.esc="cancelEdit"
          v-model="todo.description"
        />
      </div>
    </div>
    <div class="w-1/4 flex justify-end items-center">
      <button
        class="bg-pink-600 w-8 h-8 rounded-md focus:outline-none shadow-lg transition transition-all ease-linear duration-200 hover:bg-pink-500 focus:bg-pink-700"
        @click.prevent="deleteTodo"
      >
        <font-awesome-icon icon="trash-alt" class="text-md text-white" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      todoBeforeCached: this.todo.description
    }
  },
  methods: {
    /* MARK AS COMPLETED TODO */
    markAsCompleted() {
      return (this.todo.completed = !this.todo.completed)
    },
    /* EDIT TODO */
    editTodo() {
      this.todo.edit = true
      this.todoBeforeCached = this.todo.description
    },
    /* DONE EDIT  */
    doneEdit() {
      if (this.todo.description == '') {
        return (this.todo.description = this.todoBeforeCached)
      }
      this.todo.edit = false
    },
    /* CANCEL EDIT  */
    cancelEdit() {
      this.todo.description = this.todoBeforeCached
      this.todo.edit = false
    },
    /* DELETE TODO */
    deleteTodo() {
      this.$emit('delete-todo')
    }
  }
}
</script>

<style lang="scss" scoped>
.checkmark {
  transition: background 0.3s linear;
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
  &::after {
    left: 9px;
    top: 6px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover {
    @apply bg-gray-600;
  }
}

.completed {
  text-decoration: line-through;
  opacity: 0.3;
  transition: all 0.2s ease-in-out;
}

.todo {
  input:checked ~ .checkmark {
    background: #d53f8c;
    transition: background 0.2s ease-in-out;
    &::after {
      display: block;
    }
  }
}
</style>
