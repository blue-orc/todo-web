<template>
    <div class="col-12 row justify-around">
        <q-input 
            type="title"
            v-model="form.title" 
            :error="$v.form.title.$error" 
            label="Title" 
            class="col-4 q-my-sm"
        />
        <q-input 
            type="description"
            v-model="form.description" 
            :error="$v.form.description.$error" 
            label="Description" 
            class="col-4 q-my-sm"
        />
        <q-btn color="primary" class="q-my-sm" @click="add()">Add</q-btn>
    </div>
</template>

<style>
</style>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            form: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        add () {
            this.$v.form.$touch()
            if (this.$v.form.$error){
                if(this.$v.form.title.$error){
                    this.$q.notify('Title is required')
                }
                if(this.$v.form.description.$error){
                    this.$q.notify('Description is required')
                }
                return
            }
            this.$store.dispatch("todo/create", this.form)
        }
    },
    validations: {
        form: {
            title: {required},
            description: {required}
        }
    }
}
</script>