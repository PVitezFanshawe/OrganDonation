<template class="container-fluid">
  <div class="row">
    <div id="faq-cont" class="col-12">
      <h2>FAQ</h2>
    </div>
    <div id="qA" class="col-10 offset-1">
      <p><span class="qBold">Q:</span> Why should I register as an organ and tissue donor?</p>
      <p><span class="aBold">A:</span> By registering you give hope to the thousands of Ontarians waiting for a transplant. Transplants not only save lives, they return recipients to productive lives.</p>
      <p><span class="qBold">Q:</span> Does my age, medical condition, or sexual orientation prevent me from being a donor?</p>
      <p><span class="aBold">A:</span> Everyone is a potential donor regardless of age, medical condition or sexual orientation. All potential donors are evaluated on an individual, medical, case-by-case basis.</p>
      <p><span class="qBold">Q:</span> At what age am I eligible to register as an organ donor?</p>
      <p><span class="aBold">A:</span> Anyone 16 years or older, with a valid Ontario health card, can register their consent for tissue and organ donation.</p>
    </div>
  </div>
</template>

<style >
#faq-cont {
text-align: center;
margin-top: 40px;
}

#faq-cont h2 {
  font-size: 27px;
  font-weight: bold;
}

#qA {
  margin-top: 50px;
}

#qA p {
  margin-bottom: 20px;
}
.qBold {
  font-weight: bold;
  font-size: 21px;
  font-family: 'Poppins', sans-serif;
  margin-right: 10px;
}

.aBold {
  font-weight: bold;
  font-size: 21px;
  font-family: 'Poppins', sans-serif;
  margin-right: 10px;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #qA {
    margin-bottom: 90px;
  }

  #faq-cont h2 {
    font-size: 52px;
  }
  .qBold {
    font-size: 41px;
    margin-right: 25px;
  }

  .aBold {
    font-size: 41px;
    margin-right: 25px
  }
}
</style>
