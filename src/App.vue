<template>
  <div id="app">
    <Navbar />
    <Slider />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

export default {
  name: 'App',
  components: {
    'Navbar': Navbar,
    'Slider': Slider
  },
}
</script>

<style>
@font-face {
  font-family: Sahel;
  src: url('../public/static/fonts/Sahel.eot');
  src: url('../public/static/fonts/Sahel.eot?#iefix') format('embedded-opentype'),
  url('../public/static/fonts/Sahel.woff2') format('woff2'),
  url('../public/static/fonts/Sahel.woff') format('woff'),
  url('../public/static/fonts/Sahel.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Sahel;
  src: url('../public/static/fonts/Sahel-Bold.eot');
  src: url('../public/static/fonts/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
  url('../public/static/fonts/Sahel-Bold.woff2') format('woff2'),
  url('../public/static/fonts/Sahel-Bold.woff') format('woff'),
  url('../public/static/fonts/Sahel-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Sahel;
  src: url('../public/static/fonts/Sahel-Light.eot');
  src: url('../public/static/fonts/Sahel-Light.eot?#iefix') format('embedded-opentype'),
  url('../public/static/fonts/Sahel-Light.woff2') format('woff2'),
  url('../public/static/fonts/Sahel-Light.woff') format('woff'),
  url('../public/static/fonts/Sahel-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Sahel;
  src: url('../public/static/fonts/Sahel-SemiBold.eot');
  src: url('../public/static/fonts/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
  url('../public/static/fonts/Sahel-SemiBold.woff2') format('woff2'),
  url('../public/static/fonts/Sahel-SemiBold.woff') format('woff'),
  url('../public/static/fonts/Sahel-SemiBold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: Sahel;
  src: url('../public/static/fonts/Sahel-Black.eot');
  src: url('../public/static/fonts/Sahel-Black.eot?#iefix') format('embedded-opentype'),
  url('../public/static/fonts/Sahel-Black.woff2') format('woff2'),
  url('../public/static/fonts/Sahel-Black.woff') format('woff'),
  url('../public/static/fonts/Sahel-Black.ttf') format('truetype');
  font-weight: 900;
}
html, body, #app {
  width:100%;
  height: 100%;
  font-family: Sahel;
}

</style>
