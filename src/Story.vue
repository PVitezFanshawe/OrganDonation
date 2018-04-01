<template>
  <section class="container-fluid">
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

      <div id="shareStory" class="col-12">
        <h2>Have a story to share?</h2>
      </div>

      <div id="share-cont" class="col-12 col-md-6">
        <a href="#"><button type="button" class="story-bttn">Share Your Story</button></a>
      </div>

      <div id="share-form" class="col-12">
        <hr>
        <form action="index.html" method="post">
          <label>Name (optional):</label>
          <br>
          <input type="text" name="firstname" class="input-text">
          <br>
          <label>Email (optional):</label>
          <br>
          <input type="text" name="email" class="input-text">
          <br>
          <label>My Story:</label>
          <textarea name="story" rows="5"></textarea>
          <br>
          <div id="submit-bttn">
            <input type="submit" name="submit" value="Share">
          </div>
        </form>
        <hr>
      </div>

      <div id="view-cont" class="col-12 col-md-6">
        <a href="#"><button type="button" class="story-bttn">View Stories</button></a>
      </div>

      <div id="view-story" class="col-12">
        <hr>
        <h3>Drake</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <hr />
      </div>



    </div>
  </section>
</template>

<script>


</script>

<style lang="scss">

#view-story h3 {
  margin-top: 30px;
}

textarea {
  width: 100%;
  border-color: #ccc;
  border-radius: 3px;
}


#share-form label {
  margin-top: 20px;
}

.input-text {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
}

#submit-bttn {
  margin-top: 20px;
  text-align: center;
}

#submit-bttn input{
  background-color: #FFFFFF;
  box-shadow: 0 5px #fff;
  border: 3px solid #b11010;
  border-radius: 5px;
  padding: 10px 50px 10px 50px;
  color: #B11010;
  font-weight: bold;
  cursor: pointer;
}

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

#share-cont {
  margin-top: 30px;
  text-align: center;
}

#view-cont {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 20px;
}

.story-bttn {
  background-color: #B11010;
  color: #FFFFFF;
  border:none;
  height: 75px;
  width: 250px;
  box-shadow: 0 6px #650909;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 7px;
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  #story-title h2 {
    font-size: 32px;
  }

  #video-text p {
    font-size: 34px;
  }

  #shareStory h2{
    font-size: 35px;
  }

  #share-cont {
    margin-top: 50px;
  }

  #view-cont {
    margin-top: 50px;
  }

  .story-bttn {
    height: 82.67px;
    width: 262px;
    font-size: 20;
    border-radius: 15px;
  }

}
</style>
