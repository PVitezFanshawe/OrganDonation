<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 cms-panel>
      <panel title="Companies">
        <router-link :to="{name: 'addcompany'}">
          <h4 class="cms-add-button">Add an Event</h4>
        </router-link>
        <div v-for="company in companies" class="company" :key="company.id">
          <v-layout>
            <v-flex xs6>
              <div class="company-name">
                {{ company.name }}
              </div>
              <div class="company-logo">
                <img :src="'../static/' + company.logo" :alt="company.name">
              </div>
              <div>
                <img class="company-img" :src="'../static/' + company.img" :alt="company.name">
              </div>
            </v-flex>

            <v-flex xs6>
              <div class="company-quote">
                {{ company.quote }}
              </div>
              <div class="comany-desc">
                {{ company.desc }}
              </div>
            </v-flex>
          </v-layout>
        </div>

      </panel>
    </v-flex>
</v-layout>
</template>

<script>
import companiesServ from '@/services/companiesServ'
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
  .company {
    padding: 20px;
    height: 500px;
    overflow: hidden;
    background-color: #efefef;
    border-bottom: 10px #fff solid;
  }
  .company * {
    margin-bottom: 5px;
  }
  .company-name {
    font-size: 2.5em;

  }
  .company-quote {
    font-size: 1.25em;

  }
  .company-desc {
    font-size: 1em;
  }
  .company-img {
    width: 90%;
  }

</style>
