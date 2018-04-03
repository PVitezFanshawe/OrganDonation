<template>
  <v-app>
    <cmsheader></cmsheader>
    <main>
      <v-container fluid>
          <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import cmsheader from '@/components/cms-header.vue'
import register from '@/components/cms-register.vue'
export default {
  components: {
    cmsheader,
    register
  },
  name: 'cms',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
