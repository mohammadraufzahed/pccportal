<template>
  <!-- Navbar-->
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">خانه</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">دیجیتال مارکتینگ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">طراحی اپلیکیشن</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">طراحی سایت</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">سئو سایت</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ارتباط باما</a>
          </li>
        </ul>
        <a class="navbar-brand ms-auto" href="#">
          راهکار هوشمند ایرانیان
        </a>
      </div>
    </div>
  </nav>
  <!-- Navbar-->
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
}
.navbar-item {
  font-weight: normal;
}
</style>