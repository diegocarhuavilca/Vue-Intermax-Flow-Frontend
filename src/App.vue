<template>
    <div v-if="$route.path == '/'">
        <Navbar />
    </div>
    <div v-else>
        <Navbar2 />
    </div>
    <router-view></router-view>
    <FooterMain />
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
input[type="color"]:focus {
    border-color: #fe653a;
    box-shadow: 0 1px 1px #fe653a inset, 0 0 8px #fe653a;
    outline: 0 none;
}

.form-select:focus {
    border-color: #fe653a !important;
    box-shadow: 0 1px 1px #fe653a inset, 0 0 8px #fe653a !important;
    outline: 0 none !important;
}

.carousel__pagination-button {
    background-color: #fe643a94 !important ;
}

.carousel__pagination-button--active {
    background-color: #ff3801 !important ;
}

.carousel__pagination {
    padding: 0;
}

.carousel__prev {
    background-color: #fe653a !important ;
    left: -5% !important;
    display: none !important;
}

.carousel__next {
    background-color: #fe653a !important ;
    right: -5% !important;
    display: none !important;
}

@media screen and (max-width: 1400px) {
    .carousel__next,
    .carousel__prev {
        display: block !important;
    }
}
</style>

<script>
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import FooterMain from "./components/Footer.vue";
export default {
    name: "App",
    components: {
        Navbar,
        Navbar2,
        FooterMain,
    },
};
</script>
