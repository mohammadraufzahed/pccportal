<template>
  <div class="container-fluid">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="static/img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>شرکت راهکار هوشمند ایرانیان</h5>
            <p>تولید کننده نخستین موتور جست و جو کتاب و مقالات علمی کشور</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="static/img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>موتور ترجمه صوتی و متنی</h5>
            <p>تولید موتور ترجمه صوتی و متنی به 8 زبان زنده دنیا</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="static/img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>برند سازی و سئو</h5>
            <p>متخصص برند سازی و سئو سایت در صفحه اول گوگل تا به سود آوری آن</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="static/img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>CRM</h5>
            <p>طراحی پنل اختصاصی و سیستم ارتباط با مشتری(CRM)</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="static/img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>هدف</h5>
            <p>شرکت راهکار هوشمند ایرانیان سالیان سال وقت و انرژی خود را برای تولید تکنولوژی های هوش مصنوعی صرف کرده تا
              بتواند به ارتقاء سطح اقتصادی کشور کمک کند.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
}
</script>

<style scoped>
.carousel-item img {
  width: 1024px;
  height: 480px;
}
.carousel-caption h5 {
  font-weight: bold;
}
.carousel-caption p {
  font-weight: normal;
}
</style>