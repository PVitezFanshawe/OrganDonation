<template>
  <v-toolbar fixed class="red">
    <v-toolbar-title class="mr-4"><span class="home" @click="navigateTo({name:'cmspage'})"> Donate Date Night: Content Management</span></v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>Stories</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

  <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({name:'login'})">
            Login
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn flat dark @click="navigateTo({name:'register'})">
            Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
