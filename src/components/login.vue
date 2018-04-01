<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="red" dark>
          <v-toolbar-title>login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field v-model="email" label="Email:"></v-text-field>
          <v-text-field v-model="password" label="Password:"></v-text-field>
            <br>
          <div class="error" v-html="error"/>
            <br>
          <v-btn class="red" @click="login">login</v-btn>
        </div>
      </div>
    </v-flex>
</v-layout>
</template>

<script>
import auth from '@/services/auth'
import cmsheader from '@/components/cms-header.vue'
export default {
  components: {
    cmsheader
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
        await auth.login({
          email: this.username,
          password: this.password
        })
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
