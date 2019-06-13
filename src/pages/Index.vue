<template>
  <q-page class="flex items-start q-pa-md row">
    <create-todo/>
    <todo-cards/>
  </q-page>
</template>

<style>
</style>

<script>
import CreateTodo from "../components/CreateTodo"
import TodoCards from "../components/TodoCards"
export default {
  name: 'PageIndex',
  components: {
    CreateTodo,
    TodoCards
  },
}
</script>
