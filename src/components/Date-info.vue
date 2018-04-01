<template>
  <section class="container-fluid">
    <div id="date-info-cont" class="row">
      <div id="info" class="col-12">
        <h2>#DonateDateNight</h2>
        <p>Donate Date Night allows for Organ Donors to recieve awesome rewards! It's simple - Come visit us at our monthly events and show us your donor card, and recieve amazing discounts and special deals.</p>
        <p>If you are not an Organ Donor, the process is simple, and only takes two minutes; All you need is your health card. </p>
      </div>
      <div id="details" class="col-12 col-lg-7">
        <h4><span class="details-bold">Current Event:</span> Movie Tickets For Two</h4>
        <h4><span class="details-bold">Where:</span> Saturday, April 28, 2018 @ 7:00 PM</h4>
        <h4><span class="details-bold">Time:</span> 7:00pm ET</h4>
      </div>
      <div id="info-donor-bttn" class="col-12 col-md-6 col-lg-5">
        <a href="#">Become A Donor</a>
      </div>
      <div id="socialMedia" class="col-12 col-md-6 ">
        <img src="../assets/twitter-red.png" alt="twitter">
        <img src="../assets/instagram-red.png" alt="instagram">
        <img src="../assets/facebook-red.png" alt="facebook">
        <img src="../assets/youtube-red.png" alt="youtube">
      </div>
    </div>
  </section>
</template>

<style>
#date-info-cont {
  background: url('../assets/datenight_img_mobile.png') no-repeat;
  background-position: center;
  height: 100%;
  color: #FFFFFF;
}

#info h2 {
  font-size: 27px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
}

#info p {
  font-size: 18px;
}

.details-bold {
  font-weight: bold;
}

#details {
  margin-top: 30px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
}

#details h4 {
  margin-top:20px;
  font-size: 20px;

}

#info-donor-bttn {
  text-align: center;
  margin-top: 20px;
}

#info-donor-bttn a {
  padding: 55px 30px 55px 30px;
  background-color: #B11010;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: #FFFFFF;
  padding: 20px 30px 20px 30px;
  box-shadow: 0 6px #650909;
  border-radius:50px;
}

#info-donor-bttn a:hover {
  text-decoration: none;
}

#socialMedia {
  text-align: center;
  margin-top: 50px;
}

#socialMedia img {
  width: 85px;
  cursor: pointer;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #date-info-cont {
    background: url('../assets/datenight_img_desktop.png') no-repeat;
  }
  #info {
    margin-top: 10px;
  }

  #info h2 {
    font-size: 47px;
  }

  #info p {
    margin-top: 75px;
    font-size: 20px;
    line-height: 24px;
  }

  #details {
    margin-top: 30px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
  }

  #details h4 {
    margin-top:20px;
  }

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}
</style>
