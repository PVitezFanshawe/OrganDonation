<template>
  <section class="container">
    <div class="row">
      <div id="story-title" class="col-12">
        <h2>The Story</h2>
      </div>
      <div id="main-vid">
        <img class="col-12" src="./assets/main_vid.png" alt="man holding donor card">
      </div>
      <div id="frames" class="row">
        <img class="col-4" src="./assets/club_frame3.png" alt="man holding donor card">
        <img class="col-4" src="./assets/restaurant_frame2.png" alt="man outside of bar with arms crossed">
        <img class="col-4" src="./assets/theater_frame2.png" alt="eating popcorn">
      </div>
      <div id="video-text" class="col-12">
        <p>Show that you're a donor, and doors just open for you!</p>
      </div>
      <div id="shareStory" class="col-12 col-sm-12">
        <h2>Have a story to share?</h2>
      </div>
      <div id="story-bttn" class="row">
        <div id="shareStoryBttn" class="col-12">
          <a>Share Your Story</a>
        </div>
        <div id="viewStoryBttn" class="col-12">
          <a>View Stories</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#story-title {
  text-align: center;
}

#story-title h2 {
  font-size: 27px;
  font-weight: bold;
  margin-top: 30px;
}

#frames img {
  height: 100%
}

#video-text {
  text-align: center;
  margin-top: 30px;
}

#video-text p {
  font-size: 23px;
}

#shareStory {
  text-align: center;
  margin-top: 50px;
}

#shareStory h2 {
  font-size:27px;
  font-weight: bold;
}

#shareStoryBttn {
  text-align: center;
}

#shareStoryBttn a {
  background-color: #B11010;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 30px 35px 30px 35px;
  cursor: pointer;
  box-shadow: 0 6px #650909;
}

#viewStoryBttn {
  text-align: center;
  margin-top: 105px;
}

#viewStoryBttn a {
  background-color: #B11010;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 30px 57px;
  cursor: pointer;
  box-shadow: 0 6px #650909;
}

#story-bttn {
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>
