<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 cms-panel>
      <panel title="Companies">
        <router-link :to="{name: 'addcompany'}">
          <h4 class="cms-add-button">Add an Event</h4>
        </router-link>
        <div v-for="company in companies" class="story" :key="company.id">
          <v-layout>
            <v-flex xs6>
              <div class="story-name">
                {{ company.name }}
              </div>
              <div class="story-quote">
                {{ company.link }}
              </div>
              <div class="company-img">
                <img :src="company.img" alt="">
              </div>
            </v-flex>

            <v-flex xs6>
              <div class="story-para">
                {{ company.para }}
              </div>
            </v-flex>
          </v-layout>
        </div>

      </panel>
    </v-flex>
</v-layout>
</template>

<script>
import companiesServ from '@/services/storiesServ'
import panel from '@/components/cms-panel'
export default {
  components: {
    panel
  },
  data () {
    return {
      companies: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.companies = (await companiesServ.index()).data
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
