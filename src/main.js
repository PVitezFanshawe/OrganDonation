import Vue from 'vue';
import App from './App.vue';
import header from './App-header.vue';
import donor from './Donor.vue';
import companies from './Companies.vue';
import info from './Date-info.vue';
import stats from './Stats.vue';
import story from './Story.vue';
import faq from './Faq.vue';
import footer from './App-footer.vue';

Vue.component('app-header', header);
Vue.component('app-donor', donor);
Vue.component('app-companies', companies);
Vue.component('app-info', info);
Vue.component('app-stats', stats);
Vue.component('app-story', story);
Vue.component('app-faq', faq);
Vue.component('app-footer', footer);


new Vue({
  el: '#app',
  render: h => h(App)
});
