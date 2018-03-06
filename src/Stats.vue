<template>
  <section class="container">
    <div id="stats-sect" class="row">
      <div id="stats-title" class="col-12">
        <h2>Why is Organ Donation so Important?</h2>
      </div>
      <div id="savingLives" class="col-12 col-md-4">
        <img src="./assets/saving_lives.png" alt="heart">
        <h2>Saving Lives</h2>
        <p>One organ donor can save up to 8 lives, and enhance as many as 75 more through the gift of tissue. Registering as an organ donor provides hope for many lives.</p>
      </div>
      <div id="reasons" class="col-12 col-md-4">
        <img src="./assets/reasons.png" alt="paper">
        <h2>Reasons to Register</h2>
        <ul>
          <li>More than 85% of Ontarians are in favour of organ donation</li>
          <li>However, only 1 in 3 Ontarians have registered their consent to donate</li>
          <li>Signing up is quick and simple, and is something that can have a long-lasting and positive
impact on many lives</li>
        </ul>
      </div>

      <div id="awareness" class="col-12 col-md-4 col-lg-4">
        <img src="./assets/awareness.png" alt="text bubble">
        <h2>Ways to Help Spread Awareness</h2>
        <ul>
          <li>Talk to your loved ones about your donation decision</li>
          <li>Share Your Story to inspire others</li>
          <li>Spread awareness by tagging us on social media at #DonorDateNight in your images and
posts from our Donor Date Night events</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#stats-title h2 {
  font-size: 27px;
  font-weight: bold;
}

#stats-sect {
  text-align: center;
}

#stats-sect img {
  max-height: 225px;
}

#stats-sect h2 {
  margin-top: 40px;
  font-size: 35px;
}

#stats-sect p, ul {
  text-align: left;
  margin-top: 45px;
}

#reasons {
  margin-top: 70px
}

#awareness {
  margin-top: 70px;
}
</style>
