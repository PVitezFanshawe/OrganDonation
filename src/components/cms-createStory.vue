<template>
<v-layout>
  <v-flex xs4 cms-panel>
    <panel title="Story Info">
      <v-text-field label="Title" required :rules="[required]" v-model="story.title"></v-text-field>
      <v-text-field label="Quote" required :rules="[required]" v-model="story.quote"></v-text-field>
    </panel>
  </v-flex>
  <v-flex cms-panel>
    <panel title="Story Body" class="ml-2">
      <v-text-field label="Story" required :rules="[required]" multi-line v-model="story.para"></v-text-field>
    </panel>
    <div class="error-alert" v-if="error">
      {{ error }}
    </div>
    <v-btn dark class="red" @click="create">Upload Story</v-btn>
  </v-flex>
  </v-layout>
</template>
<script>
import panel from '@/components/cms-panel'
import storiesServ from '@/services/storiesServ'
export default {
  data () {
    return {
      story: {
        name: null,
        quote: null,
        para: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    panel
  },
  methods: {
    async create () {
      this.error = null
      const allFilled = Object.keys(this.story).every(key => !!this.story[key])

      if (!allFilled) {
        this.error = 'Please fill in all required fields'
      }
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
.error-alert {
  color: red;
}
</style>
