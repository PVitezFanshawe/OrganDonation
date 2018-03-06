<!--<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <a href="https://www.youtube.com/watch?v=nyJSd6V2DRI&list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07">Here's a solid Vue tutorial</a>
    <app-header></app-header>
  </div>
</template>-->

<template>
  <div id="app">
    <h1 class="hide">Organ Donation</h1>
    <!--Insert vue components here as shown-->
    <app-header></app-header>
    <app-donor></app-donor>
    <app-companies></app-companies>
    <app-info></app-info>
    <app-stats></app-stats>
    <app-story></app-story>
    <app-faq></app-faq>
    <app-footer></app-footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Donate Date Night'
    }
  }
}
</script>

<style lang="scss">
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
