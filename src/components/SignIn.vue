<template>
    <q-page class="flex flex-center column items-center">
        <div class="shadow-10 q-pa-xl">
            <span>Sign in</span>
            <q-input 
                type="username"
                v-model="form.username" 
                :error="$v.form.username.$error" 
                label="Username" 
                class="q-my-sm"
            />
            <q-btn color="primary" class="q-my-sm" @click="submit">Submit</q-btn>
        </div>
    </q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            form: {
                username: ''
            }
        }
    },
    methods: {
        submit () {
            this.$v.form.$touch()
            if (this.$v.form.$error){
                if(this.$v.form.username.$error){
                    this.$q.notify('Username is required')
                }
                return
            }
            console.log(this.form)
            this.$store.dispatch("username/signIn", this.form.username)
        }
    },
    validations: {
        form: {
            username: {required}
        }
    }
}
</script>
