<template>
  <h1>THIS IS CONTENT</h1>
</template>

<script>
import storiesServ from '@/services/storiesServ'
import panel from '@/components/cms-panel'
export default {
  data () {
    return {
      story: {}
    }
  },
  async mounted () {
    const storyId = this.$route.params.PROPERTY
    console.log(storyId)
    this.story = await storiesServ.show(storyId).data
  },
  components: {
    panel
  }
}
</script>

<style scoped>

</style>
