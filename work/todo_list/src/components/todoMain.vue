<template>
    <ul class="todo-main">
        <li>
            <label>
                <input type="checkbox">
                <span>xxxxx</span>
            </label>
            <button class="btn btn-danger" style="display:none">删除</button>
        </li>
        <li>
            <label>
                <input type="checkbox">
                <span>yyyyy</span>
            </label>
            <button class="btn btn-danger" style="display:none">删除</button>
        </li>
    </ul>
</template>

<script>
export default {
}
</script>

<style>
.todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding:0px;
}
.todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}

li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label{
    float: left;
    cursor: pointer;
}
li button{
    float: left;
    display: none;
    margin-top: 3px;
}
li:before{
    content:inherit;
}
li:last-child{
    border-bottom: none;
}
</style>
