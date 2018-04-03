<template>
  <section class="container-fluid">
    <div class="row">
      <div id="companies-images" class="col-12 scrollmenu">
        <a><img src="../assets/covent.png" alt="covent garden market"></a>
        <a><img src="../assets/cineplex.png" alt="cineplex"></a>
        <a><img src="../assets/budgardens.png" alt="budweiser gardens"></a>
        <a><img src="../assets/keg.png" alt="keg"></a>
        <a><img src="../assets/lq.png" alt="lasor quest"></a>
        <a><img src="../assets/junction.png" alt="junction"></a>
        <a><img src="../assets/eastpark.png" alt="east park"></a>
        <a><img src="../assets/eastside.png" alt="east sides"></a>
        <a><img src="../assets/foxfiddle.png" alt="fox fiddle"></a>
        <a><img src="../assets/lmh.png" alt="london music hall"></a>
        <a><img src="../assets/landmark.png" alt="landmark"></a>
        <a><img src="../assets/masonville.png" alt="masonville"></a>
        <a><img src="../assets/mandarin.png" alt="mandarin"></a>
        <a><img src="../assets/mcabes.png" alt="mcabes"></a>
        <a><img src="../assets/milos.png" alt="milos"></a>
        <a><img src="../assets/morissey.png" alt="morissey"></a>
        <a><img src="../assets/olg.png" alt="olg"></a>
        <a><img src="../assets/stobies.png" alt="stobies"></a>
        <a><img src="../assets/tastingroom.png" alt="tasting room"></a>
        <a><img src="../assets/whiteoaks.png" alt="whiteoaks"></a>
        <a><img src="../assets/toboggan.png" alt="toboggan"></a>
        <a><img src="../assets/sakata.png" alt="sakata"></a>
      </div>
      <div class="lightbox col-12">
        <span class="close-lightbox">x</span>
        <div id="lightbox-cont">
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
// Variables

// Functions

// Events
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
