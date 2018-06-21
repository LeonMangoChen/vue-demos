<template>
    <ul class="todo-main">
        <todo-item v-for="todo in todos" :todo="todo"></todo-item>
    </ul>
</template>

<script>
import todoItem from './todoItem'
export default {
  props: ['todos'],
  components: { todoItem }
}
</script>

<style>
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}

li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li button {
    float: left;
    display: none;
    margin-top: 3px;
}

li:before {
    content: inherit;
}

li:last-child {
    border-bottom: none;
}
</style>
