<template>
  <section class="container">
    <div class="row">
      <div id="story-title" class="col-12">
        <h2>Donors Save More</h2>
      </div>
      <div id="mainVideo" class="row">
        <video autoplay controls poster="../assets/resto_placeholder.png" class="col-12 col-md-10 offset-md-1">
          <source src="../video/speeddate.mp4" type="video/mp4">
        </video>
      </div>

      <div id="video-controls" class="col-12">
        <button type="button" id="play-pause" class="play col-1 col-lg-1">&#9658;</button>
          <div id="volume-bar-cont" class="col-2">
            <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1" class="slider">
        </div>
        <div id="seek-bar-cont" class=" col-8">
          <input type="range" id="seek-bar" value="0" class="slider">
        </div>
        <button type="button" id="full-screen" class="col-1">
          <img src="images/full-screen.png" alt="fullscreen icon">
        </button>
      </div>

        <img src="../assets/speeddate_placeholder.png" alt="" class="col-4 thumbnails">
        <img src="../assets/club_placeholder.png" alt="" class="col-4 thumbnails">
        <img src="../assets/resto_placeholder.png" alt="" class="col-4 thumbnails">

      <div id="video-text" class="col-12">
        <p>Show that you're a donor, and doors just open for you!</p>
      </div>

      <div id="shareStory" class="col-12 col-sm-12">
        <h2>Have a story to share?</h2>
      </div>

      <div id="story-bttn" class="row">
        <div id="shareStoryBttn" class="col-12 desktop-hide">
          <a>Share Your Story</a>
        </div>

        <div id="share-form" class="col-10 offset-1 col-lg-12 desktop-hide">
          <hr>
          <form method="post" class="col-lg-8 offset-lg-2">
            <label>Name (optional):</label>
            <br>
            <input type="text" name="firstname" class="input-text">
            <br>
            <label>Email (optional):</label>
            <br>
            <input type="text" name="email" class="input-text">
            <br>
            <label>My Story:</label>
            <textarea name="story" rows="5" class="input-text"></textarea>
            <br>
            <div id="submit-bttn">
              <input type="submit" name="submit" value="Share">
            </div>
          </form>
          <hr>
        </div>

        <div id="viewStoryBttn" class="col-12 desktop-hide">
          <a>View Stories</a>
        </div>

        <div id="story-pages" class="col-10 offset-1 desktop-hide">
          <hr>
          <h3>Drake</h3>
          <p>Lorem ipsum dolor sit amet, corpora lobortis te mea, sumo graeci epicuri duo at, est an partem rationibus. Vix nostrum praesent ea, tantas labitur splendide no duo, idque graeci et his. Fierent explicari necessitatibus eu eos. Ne enim utinam neglegentur cum, mei putant feugait dissentias eu, et putant nusquam persequeris est. In graecis suavitate elaboraret vix, mel tempor adipisci eu. Per ex hinc mollis meliore, et evertitur rationibus intellegam mei.</p>
          <hr>
        </div>
      </div>
    </div>
        <div id="story-bttn-desktop" class="row">
          <div id="shareStoryBttn-desktop" class="col-lg-6 mobile-hide">
            <a>Share Your Story</a>
          </div>
          <div id="viewStoryBttn-desktop" class="col-lg-6 mobile-hide">
            <a>View Stories</a>
          </div>
        </div>

        <div id="story-dropdown-desktop" class="row mobile-hide">
          <div id="share-form-desktop" class="col-lg-6 offset-lg-3">
            <hr>
            <form action="index.html" method="post">
              <label>Name (optional):</label>
              <br>
              <input type="text" name="firstname" class="input-text">
              <br>
              <label>Email:</label>
              <br>
              <input type="text" name="email" class="input-text">
              <br>
              <label>My Story:</label>
              <textarea name="story" rows="5" class="input-text"></textarea>
              <br>
              <div id="submit-bttn">
                <input type="submit" name="submit" value="Share">
              </div>
            </form>
            <hr>
          </div>

          <div id="story-pages-desktop" class="col-lg-10 offset-lg-1 mobile-hide">
            <hr>
            <h3>Drake</h3>
            <p>Lorem ipsum dolor sit amet, corpora lobortis te mea, sumo graeci epicuri duo at, est an partem rationibus. Vix nostrum praesent ea, tantas labitur splendide no duo, idque graeci et his. Fierent explicari necessitatibus eu eos. Ne enim utinam neglegentur cum, mei putant feugait dissentias eu, et putant nusquam persequeris est. In graecis suavitate elaboraret vix, mel tempor adipisci eu. Per ex hinc mollis meliore, et evertitur rationibus intellegam mei.</p>
            <hr>
          </div>
        </div>
  </section>
</template>

<script>
// always include this as syntax under created write js. (var funct listnr)
// for returning text make object follow syntax then after closing curly brace of object put a comma and then add js functions after that.
export default {
  created: {

  }
}
</script>

<style>
#video-controls {
  background-color: green;
  margin-bottom: 40px;
}

video {
  width: 100%;
  height: 100%;
}

.thumbnails {
  width: 100%;
  height: 100%;
}

#video-thumbnails{
  text-align: center;
}

#story-bttn-desktop {
  margin-top: 100px;
  margin-bottom: 40px;
}

#shareStoryBttn-desktop {
  text-align: center;
}

#shareStoryBttn-desktop a {
  background-color: #B11010;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 30px 35px 30px 35px;
  cursor: pointer;
  box-shadow: 0 6px #650909;
}

#viewStoryBttn-desktop {
  text-align: center;
}

#viewStoryBttn-desktop a {
  background-color: #B11010;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 30px 57px;
  cursor: pointer;
  box-shadow: 0 6px #650909;
}

#story-pages {
  margin-top: 30px;
}

#story-pages h3 {
  margin-top: 30px;
}

#share-form {
  margin-top: 30px;
  font-size: 16px;
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

#submit-bttn input {
  background-color: #FFFFFF;
  box-shadow: 0 5px #fff;
  border: 3px solid #b11010;
  border-radius: 5px;
  padding: 10px 50px 10px 50px;
  color: #B11010;
  font-weight: bold;
  cursor: pointer;
}

#view-story h3 {
  margin-top: 30px;
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

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

@media (max-width: 991px) {
  .mobile-hide {
    display: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .desktop-hide {
    display: none;
  }

  #share-form-desktop {
    font-size: 20px;
  }

  #story-pages-desktop {
    font-size: 20px;
  }

  #story-title h2 {
    font-size:35px;
  }

  #story-title {
    margin-bottom: 20px;
  }

}
</style>
