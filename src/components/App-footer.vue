<template>
  <footer class="container-fluid">
    <div id="foot-content" class="row">
      <div id="foot-title" class="col-12">
        <h2>Ready to become a Donor?</h2>
      </div>

      <div id="foot-bttn" class="col-12">
        <a href="#">Become a Donor</a>
      </div>

      <div id="foot-social-media" class="col-12 footer-social">
        <img src="../assets/twitter.png" alt="twitter">
        <img src="../assets/instagram.png" alt="instagram">
        <img src="../assets/facebook.png" alt="facebook">
        <img src="../assets/youtube.png" alt="youtube">
      </div>

    </div>
  </footer>
</template>

<style>
#foot-content {
  background-color: #B11010;
  padding-top: 45px;
}

#foot-title {
  text-align: center;
}

#foot-title h2 {
  font-size: 23px;
  font-weight: bold;
  color: #ffffff;
}

#foot-bttn {
  text-align: center;
  margin-top: 65px;
}
#foot-bttn a {
  background-color: #ffffff;
  color: #2B2B2B;
  padding: 30px 35px 30px 35px;
  border-radius: 50px;
  box-shadow: 0 6px #2B2B2B;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

#foot-social-media {
  text-align: center;
  margin-top: 100px;
  margin-bottom:40px;
}

#foot-social-media img {
  width: 59.06px;
  margin-right: 17px;
  cursor: pointer;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

  #foot-title h2 {
    font-size: 33px;
  }

  #foot-bttn a {
    font-size: 23px;
    padding: 30px 35px 30px 35px;
  }

  #foot-social-media img {
    width: 86.8px;
    margin-right: 25px;

  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

}

</style>
