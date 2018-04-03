<template>
  <section class="container-fluid">
    <div id="donate" class="row">
      <div id="donateText" class="col-12">
        <h2>{{ heading }}</h2>
      </div>
      <div id="bttn-container" class="col-12">
        <a id="bttn" href="#">Become A Donor</a>
      </div>
      <div id="promo-text-donate" class="col-12">
        <h3>{{ promotext }}</h3>
      </div>
      <div id="down-arrow" class="col-12">
        <a href="#companies-images">
          <img src="../assets/arrow.png" alt="down arrow">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'donateText',
  data () {
    return {
      heading: 'Bring your donor card to one of the following venues, and recieve discounts and special deals',
      promotext: 'Available at these awesome locations below'
    }
  }
}
</script>

<style lang="scss">
#donate {
  background: url('../assets/main_img_tablet.png') no-repeat;
  text-align: center;
  height: 100%;
}

#donateText {
  margin-top: 100px;
}

#donateText h2 {
  font-size: 17px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 100px;
}

#bttn {
  background-color: #B11010;
  text-decoration: none;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  padding: 30px 35px 30px 35px;
  border-radius: 50px;
  box-shadow: 0px 6px #650909;
}

#bttn:hover {
  text-decoration: none;
}

#promo-text-donate h3{
  font-size: 14px;
  color: #FFFFFF;
  margin-top: 70px;
}

#down-arrow img {
  height: 30px;
  width: 30px;
  margin-top: 40px;
  margin-bottom: 30px;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #donate {
    background: url('../assets/main_img_desktop.png') no-repeat;
  }

  #donateText h2 {
    font-size: 31px;
  }

  #bttn-container {
    margin-top: 30px;
  }

  #bttn {
    font-size: 31px;
    padding: 50px 70px 50px 70px;;
    border-radius: 100px;
    box-shadow: 0px 10px #650909;
  }

  #promo-text-donate {
    margin-top: 60px;
  }

  #promo-text-donate h3 {
    font-size: 27px;
  }

  #down-arrow img {
    height: 37.56px;
    width: 37.56px;
  }

  #down-arrow {
    margin-bottom: 20px;
  }

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #donateText h2 {
    font-size: 39px;
  }

  #promotext h3 {
    font-size: 27px;
  }
}
</style>
