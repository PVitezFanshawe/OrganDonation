<template>
  <div class="mainpage">
    <h1 class="hide">{{ msg }}</h1>
    <!--Insert vue components here as shown-->
    <appheader></appheader>
    <appdonor></appdonor>
    <companies></companies>
    <appinfo></appinfo>
    <appstats></appstats>
    <appstory></appstory>
    <appfaq></appfaq>
    <appfooter></appfooter>

  </div>
</template>

<script>
import appheader from '@/components/App-header.vue'
import appdonor from '@/components/Donor.vue'
import companies from '@/components/Companies.vue'
import appinfo from '@/components/Date-info.vue'
import appstats from '@/components/Stats.vue'
import appstory from '@/components/Story.vue'
import appfaq from '@/components/Faq.vue'
import appfooter from '@/components/App-footer.vue'
export default {
  components: {
    appheader,
    appdonor,
    companies,
    appinfo,
    appstats,
    appstory,
    appfaq,
    appfooter
  },
  name: 'mainpage',
  data () {
    return {
      msg: 'Donate Date Night'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
}

.hide {
  display: none;
}
</style>
