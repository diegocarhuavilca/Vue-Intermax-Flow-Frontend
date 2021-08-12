<template>
  <transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap");

#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to right, #0b1016, #1d293a);
}
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus,
select:focus {
  border-color: #fe653a;
  box-shadow: 0 1px 1px #fe653a inset, 0 0 8px #fe653a;
  outline: 0 none;
}

.carousel__pagination-button {
  background-color:#fe643a94 !important ;
}

.carousel__pagination-button--active{
  background-color:#ff3801 !important ;
}
</style>

<script lang="ts">

</script>
