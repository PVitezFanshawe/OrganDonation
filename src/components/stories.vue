<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Stories">
     @click="navigateTo=({name: 'createStory'})"
          <v-btn slot="action" class="red accent-2" @click="navigateTo=({name: 'createStory'})" light medium right middle fab>
            <v-icon>add</v-icon>
          </v-btn>

        <div v-for="story in stories" :key="story.id">
          {{ story.name }}
          {{ story.quote }}
          {{ story.para }}
        </div>
      </panel>
    </v-flex>
</v-layout>
</template>

<script>
import storiesServ from '@/services/storiesServ'
import panel from '@/components/panel'
export default {
  components: {
    panel
  },
  data () {
    return {
      stories: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.stories = (await storiesServ.index()).data
  }
}
</script>

<style scoped>

</style>
