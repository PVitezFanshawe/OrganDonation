<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Sign Up">
          <form name="cms-register" autocomplete="off">
            <v-text-field v-model="email" label="Email:"></v-text-field>
            <v-text-field v-model="password" label="Password:" type="password" autocomplete="new-password"></v-text-field>
          </form>
            <br>
          <div class="error" v-html="error"/>
            <br>
          <v-btn class="red" @click="register">Register</v-btn>
        </panel>
    </v-flex>
</v-layout>
</template>

<script>
import auth from '@/services/auth'
import panel from '@/components/panel'
export default {
  name: 'register',
  components: {
    panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await auth.register({
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
