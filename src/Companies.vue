<template>
  <section class="container-fluid">
    <div class="row">
      <div id="companies-images" class="col-12 scrollmenu">
        <a><img src="./assets/covent.png" alt="covent garden market"></a>
        <a><img src="./assets/cineplex.png" alt="cineplex"></a>
        <a><img src="./assets/budgardens.png" alt="budweiser gardens"></a>
        <a><img src="./assets/keg.png" alt="keg"></a>
        <a><img src="./assets/lq.png" alt="lasor quest"></a>
        <a><img src="./assets/junction.png" alt="junction"></a>
      </div>
      <div class="lightbox col-12">
        <span class="close-lightbox">x</span>
        <div id="lightbox-cont">
          <h2>Covent Garden Market: Voucher for two</h2>
          <h2>Bring your donor card and recieve a complimentary voucher for two to spend at the Covent Garden Market.</h2>
          <img src="./assets/covent.png" alt="covent garden market">
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
  height: 165px;
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
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  #companies-images {
    height: 260px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

}
</style>
