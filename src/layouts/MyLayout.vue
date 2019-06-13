<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Todo App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Links</q-item-label>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todo List</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container v-if="username !== null">
      <router-view />
    </q-page-container>
    <q-page-container v-else >
      <sign-in/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import SignIn from '../components/SignIn.vue'

export default {
  name: 'MyLayout',
  components: {
    SignIn
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    logout(){
      this.$store.dispatch('username/signOut')
    }
  },
  computed: {
    username(){
      return this.$store.state.username.username
    }
  }
}
</script>

<style>
</style>
