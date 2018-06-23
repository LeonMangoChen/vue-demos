<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header :todos="todos"></todo-header>
        <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
        <todo-footer :todos="todos" :delete-dones="deleteDones" :updata-todos="updataTodos"></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
import todoHeader from './todoHeader'
import todoMain from './todoMain'
import todoFooter from './todoFooter'
export default {
  data () {
    return {
      todos: [{isDone: false, title: '吃饭'}, {isDone: true, title: '睡觉'}]
    }
  },
  methods: {
    deleteTodo (todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    updataTodos (isDone) {
      this.todos.forEach(todo => { todo.isDone = isDone })
    },
    deleteDones () {
      this.todos = this.todos.filter(todo => !todo.isDone)
    }
  },
  components: {
    todoHeader,
    todoMain,
    todoFooter
  }
}
</script>

<style>
.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
