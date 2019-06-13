<template>
    <div class="col-12 row justify-around">
        <q-card class="col-3 q-ma-sm boardered" v-for="(todo, i) in todos" :key="todo.title + i">
        <q-card-section>
            <div class="text-h6">{{todo.title}}</div>
            <div class="text-subtitle2">Created: {{new Date(todo.createdOn).toString()}}</div>
        </q-card-section>

        <q-card-section>
            {{todo.description}}
        </q-card-section>

        <q-separator/>

        <q-card-actions>
            <q-btn flat icon="delete" @click="del(todo.todoId)"/>
        </q-card-actions>
        </q-card>
    </div>
</template>
<script>
export default {
    computed: {
        todos(){
            return this.$store.state.todo.todos
        }
    },
    methods: {
        del(todoId){
            this.$store.dispatch("todo/delete", todoId)
        }
    },
    mounted() {
        this.$store.dispatch("todo/get")
    }
}
</script>
