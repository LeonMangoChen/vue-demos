<template>
    <li :style="{background: bgColor}" @mouseenter="changeState(true)" @mouseleave="changeState(false)">
        <label>
            <input type="checkbox" v-model="todo.isDone"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
</template>

<script>
export default {
  props: ['todo', 'deleteTodo'],
  data () {
    return {
      bgColor: '#fff',
      isShow: false
    }
  },
  methods: {
    changeState (isEnter) {
      if (isEnter) {
        this.bgColor = '#eee'
        this.isShow = true
      } else {
        this.bgColor = '#fff'
        this.isShow = false
      }
      this.isShow = isEnter
    },
    deleteItem () {
      // const {deleteTodo, todo} = this
      if (confirm(`确定删除${this.todo.title}吗？`)) {
        this.deleteTodo(this.todo)
      }
    }
  }
}
</script>

<style>

</style>
