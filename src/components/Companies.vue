<template>
  <section class="container-fluid">
    <div class="row">
      <div id="companies-images" class="col-12 scrollmenu">
        <a  v-for="company in companies" :key="company.id"> <img  @click="lightbox = !lightbox" :src="'../static/' + company.logo" :alt="company.name"> </a>
      </div>
      <div class="lightbox col-12">
        <span class="close-lightbox">x</span>
        <div v-if="lightbox" id="lightbox-cont">
          <h2>Covent Garden Market: Voucher for two</h2>
          <h2>Bring your donor card and recieve a complimentary voucher for two to spend at the Covent Garden Market.</h2>
          <img src="../assets/covent.png" alt="covent garden market">
          <br />
          <a href="http://www.coventmarket.com">Website</a>
          <h2>Donors Save More</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import companiesServ from '@/services/companiesServ'
export default {
  data () {
    return {
      companies: null,
      lightbox: false
    }
  },
  methods: {

  },
  async mounted () {
    this.companies = (await companiesServ.index()).data
  }
}
</script>

<style lang="scss">

#lightbox-cont {
  margin-top: 80px;
  text-align: center;
}

#lightbox-cont h2 {
  font-size: 20px;
  color: #fff;
  margin-top: 30px;
}

#lightbox-cont img {
  margin-top: 50px;
  margin-bottom: 20px;
}

#lightbox-cont a {
  text-decoration: none;
  color: #B11010;
  font-weight: bold;
  letter-spacing: 1px;
}

#lightbox-cont a:hover {
  opacity: 0.75;
}

.lightbox {
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0,0,0,0.95);
}

.close-lightbox {
  position: absolute;
  right: 12px;
  top: 12px;
  font-family: arial, helvetica, sans-serif;
  font-size: 2em;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.show-lightbox { display: block; }

#companies-images {
  height: 135px;
  background-color: #fff;
}

.scrollmenu{
  overflow: auto;
  white-space: nowrap;
}

.scrollmenu a {
    display: inline-block;
    color: white;
    padding: 0px;
    text-decoration: none;
    opacity: 0.6;
    cursor: pointer;
}

.scrollmenu a:hover {
  opacity: 1;
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #companies-images {
    height: 135px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}
</style>
