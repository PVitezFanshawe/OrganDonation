<template>
  <v-toolbar fixed class="red">
    <v-toolbar-title class="mr-4"><span class="home" @click="navigateTo({name:'cmspage'})"> Donate Date Night: Content Management</span></v-toolbar-title>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'stories'})">Stories</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'companies'})">Events</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

  <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name:'login'})">
            Login
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="navigateTo({name:'register'})">
            Create New User
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
            Log Out
        </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'cmspage'
      })
    }
  }
}
</script>

<style scoped>
  .home{
    cursor: pointer;
  }
  .home:hover{
    color: #3f3f3f;
  }
</style>
