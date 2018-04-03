<template>
  <header class="container-fluid">
    <div class="row">
      <a id="logo" class="col-6">donate<span class="logo-red">date</span>night.ca</a>
      <div class="col-6" id="nav">
        <img src="../assets/menu.png" alt="menu icon">
      </div>
    </div>
  </header>
</template>

<style lang="scss">
#logo {
  font-size: 19px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #2B2B2B;
}
#logo:hover {
  cursor: pointer;
}

.logo-red {
  color: #B11010;
}

#nav img {
  height: 29.9px;
  width: 29.9px;
  float: right;
  margin-top: 10px;
  margin-bottom: 10px;
}

#nav img:hover {
  cursor: pointer;
}

 /* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #logo {
    font-size: 29px;
  }

  #nav img {
    height: 40.52px;
    width: 40.52px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #logo {
    font-size: 35px;
  }

  #nav img {
    height: 45px;
    width: 45px;
  }
}

</style>
