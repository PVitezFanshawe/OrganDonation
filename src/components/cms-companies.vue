<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 cms-panel>
      <panel title="Stories">
        <router-link :to="{name: 'addstory'}">
          <h4 class="cms-add-button">Add a Story</h4>
        </router-link>
        <div v-for="story in stories" class="story" :key="story.id">
          <v-layout>
            <v-flex xs6>
              <div class="story-name">
                {{ story.name }}
              </div>
              <div class="story-quote">
                {{ story.quote }}
              </div>
            </v-flex>

            <v-flex xs6>
              <div class="story-para">
                {{ story.para }}
              </div>
            </v-flex>
          </v-layout>
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
  .cms-add-button{
    height: 75px;
    width: 75px;
    background: #f44336;
    color: #fafafa;
    text-align: center;
    padding: 15px 5px;
    border-radius: 75px;
    margin: 20px auto;
  }
  .story {
    padding: 20px;
    height: 200px;
    overflow: hidden;
  }
  .story-name {
    font-size: 2em;

  }
  .story-quote {
    font-size: 1.25em;

  }
  .story-para {
    font-size: 1em;
  }

</style>
