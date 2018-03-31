<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

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
.input-group--text-field input {
  border-bottom: 1px solid #333333;
}
.toolbar__title {
  color: white;
}
.btn__content {
  color: white;
}
</style>
