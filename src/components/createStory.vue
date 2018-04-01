<template>
<v-layout>
  <v-flex xs4>
    <panel title="Story Info">
      <v-text-field label="Title" required :rules="[required]" v-model="story.title"></v-text-field>
      <v-text-field label="Quote" required v-model="story.quote"></v-text-field>
    </panel>
  </v-flex>
  <v-flex>
    <panel title="Story Body" class="ml-2">
      <v-text-field label="Story" required multi-line v-model="story.para"></v-text-field>
    </panel>
    <v-btn dark class="red" @click="create">Upload Story</v-btn>
  </v-flex>
  </v-layout>
</template>
<script>
import panel from '@/components/panel'
import storiesServ from '@/services/storiesServ'
export default {
  data () {
    return {
      story: {
        name: null,
        quote: null,
        para: null
      },
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    panel
  },
  methods: {
    async create () {
      try {
        await storiesServ.post(this.story)
        this.$router.push({
          name: 'stories'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
