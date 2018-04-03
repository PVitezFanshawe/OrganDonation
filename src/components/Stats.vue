<template>
  <section class="container-fluid">
    <div id="stats-section" class="row">
      <div id="stats-title" class="col-12">
        <h2>Why is Organ Donation so Important?</h2>
      </div>

      <div id="reasons-banner" class="col-12 mobile">
        <img src="../assets/reasons.png" alt="paper icon">
        <h2>Reasons to Donate</h2>
      </div>
      <div class="col-12 open-arrow">
        <a>&#9660;</a>
      </div>
      <div id="reasons-content" class="col-12 hide mobile">
        <ul>
          <li>More than 85% of Ontarians are in favour of organ donation</li>
          <li>However, only 1 in 3 Ontarians have registered their consent to donate</li>
          <li>Signing up is quick and simple, and is something that can have a long-lasting and positive
impact on many lives</li>
        </ul>
        <div class="close-arrow">
          <a>&#9650;</a>
        </div>
      </div>

      <div id="savingLives-banner" class="col-12 mobile">
        <img src="../assets/saving_lives.png" alt="heart icon">
        <h2>Saving Lives</h2>
      </div>
      <div class="col-12 open-arrow mobile">
        <a>&#9660;</a>
      </div>
      <div id="savingLives-content" class="col-12 hide mobile">
        <ul>
          <li>One organ donor can save up to 8 lives, and enhance as many as 75 more through the gift of
  tissue.</li>
          <li>Registering as an organ donor provides hope for many lives.</li>
        </ul>
        <div class="close-arrow">
          <a>&#9650;</a>
        </div>
      </div>
      <div id="awareness-banner" class="col-12 mobile">
        <img src="../assets/awareness.png" alt="speech bubble icon">
        <h2>Help Spread Awareness</h2>
      </div>
      <div class="col-12 open-arrow">
        <a>&#9660;</a>
      </div>
      <div id="awareness-content" class="col-12 hide mobile">
        <ul>
          <li>Talk to your loved ones about your donation decision</li>
          <li>Share Your Story to inspire others</li>
          <li>Spread awareness by tagging us on social media at #DonorDateNight in your images and posts from our Donor Date Night event</li>
        </ul>
        <div class="close-arrow">
          <a>&#9650;</a>
        </div>
      </div>
    </div>
    <hr>
    <div id="stats-section-tablet" class="row">
      <div id="reasons-tablet" class="col-md-4">
        <img src="../assets/reasons_red.png" alt="red speech bubble">
        <h2>Reasons to Donate</h2>
        <ul>
          <li>More than 85% of Ontarians are in favour of organ donation.</li>
          <li>However, only 1 in 3 Ontarians have registered their consent to donate.</li>
          <li>Signing up is quick and simple, and is something that can have a long-lasting and positive
impact on many lives.</li>
        </ul>
      </div>
      <div id="savingLives-tablet" class="col-md-4">
        <img src="../assets/saving_lives_red.png" alt="">
        <h2>Saving Lives</h2>
        <ul>
          <li>One organ donor can save up to 8 lives, and enhance as many as 75 more through the gift of
  tissue.</li>
          <li>Registering as an organ donor provides hope for many lives.</li>
        </ul>
      </div>
      <div id="awareness-tablet" class="col-md-4">
        <img src="../assets/awareness_red.png" alt="">
        <h2>Help Spread Awareness</h2>
        <ul>
          <li>Talk to your loved ones about your donation decision.</li>
          <li>Share Your Story to inspire others.</li>
          <li>Spread awareness by tagging us on social media at #DonorDateNight in your images and posts from our Donor Date Night event.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.open-arrow {
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.close-arrow {
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}

#stats-title {
  text-align: center;
  margin-top: 45px;
}

#stats-titles h2 {
  font-size: 27px;
  font-weight: bold;
}

#savingLives-banner {
  text-align: center;
  margin-top: 25px;
  background-color: #B11010;
  height: 80px;
}

#savingLives-banner img {
  max-height: 60px;
  float: left;
  margin-left: 15px;
  margin-top: 10px;
}

#savingLives-banner h2 {
  font-size: 21px;
  float: right;
  line-height: 80px;
  margin-right: 20px;
  color: #FFFFFF;
}

#savingLives-content {
  margin-top: 25px;

}

#reasons-banner {
  text-align: center;
  margin-top: 25px;
  background-color: #B11010;
  height: 80px;
}

#reasons-banner img {
  max-height: 60px;
  float: left;
  margin-left: 25px;
  margin-top: 10px;
}

#reasons-banner h2 {
  font-size: 21px;
  float: right;
  line-height: 80px;
  margin-right: 20px;
  color: #FFFFFF;
}

#reasons-content {
  margin-top: 25px;
}

#reasons-content li {
  margin-bottom: 20px;
}

#awareness-banner {
  text-align: center;
  margin-top: 25px;
  background-color: #B11010;
  height: 80px;
}

#awareness-banner img {
max-height: 60px;
float: left;
margin-top: 10px;
margin-left: 20px;
}

#awareness-banner h2 {
  font-size: 21px;
  float: right;
  line-height: 80px;
  color: #FFFFFF;
  margin-right: 20px;
}

#awareness-content {
  margin-top: 25px;
}

#awareness-content li {
  margin-bottom: 20px;
}

hr {
  margin-top: 40px;
}

#stats-section-tablet {
  text-align: center;
}

#stats-section-tablet img {
  max-height: 100px;
}

#stats-section-tablet h2 {
  font-size: 19px;
}

#stats-section-tablet ul {
  text-align: left;
  margin-left: 20px;

}

#stats-section-tablet li {
  margin-top: 10px;
  font-size: 19px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

@media (max-width: 767px) {
  #stats-section-tablet {
    display: none;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .mobile {
    display: none;
  }

  .open-arrow {
    display: none;
  }

  hr {
    margin-bottom: 40px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}
</style>
