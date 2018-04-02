<template>
<v-layout column>
    <v-flex xs6 offset-xs3 cms-panel>
      <panel title="Log In">
            <v-text-field v-model="email" label="Email:"></v-text-field>
            <v-text-field v-model="password" label="Password:" type="password"></v-text-field>
            <br>
          <div class="error" v-html="error"/>
            <br>
          <v-btn class="red" @click="login" dark>login</v-btn>
        </panel>
    </v-flex>
</v-layout>
</template>

<script>
import auth from '@/services/auth'
import panel from '@/components/panel.vue'
export default {
  components: {
    panel
  },
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await auth.login({
          email: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
