<template>
  <div class="container-fluid p-0 m-0 contenido-slider-principal">
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
      <slide v-for="slide in content" :key="slide">
        <div class="container-fluid contenido-slide m-0 p-0">
          <img
            :src="slide.imagen.name"
            alt=""
            class="img-fluid"
            style="width:100%; max-height:758px;object-fit: cover;"
          />

          <a
            v-if="slide.boton != null"
            href="#"
            class="btn btn-primary hvr-grow"
          >
            <button type="button " class="ref-contacto ">
              {{ slide.boton.Contenido }}
            </button>
          </a>
        </div>
      </slide>
    </carousel>
    <div class="container-fluid curva m-0 p-0">
      <img
        src="https://res.cloudinary.com/intermax/image/upload/v1624033964/Flow/Carousel/Curvaa_4_qybznx.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contenido-slider-principal {
  position: relative;
}
.curva {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.contenido-slide {
  position: relative;
  display: inline-block;
}
.btn {
  position: absolute;
  top: 65%;
  left: 32%;
  transform: translate(-50%, -50%);
  width: fit-content;
  margin-top: 0.7rem;
  background: linear-gradient(to right, #f74567, #fe653a);
  border-radius: rem;
  border: none;
  color: white;

  .ref-contacto {
    background: none;
    border: none;
    outline: none;
    color: white;
  }
}

@media only screen and (max-width: 990px) {
  .ref-contacto {
    font-size: 0.7rem;
    padding: 0rem;
    margin: 0;
  }

  .btn-primary {
    margin: 0;
    margin-top: 1rem;
  }
}
</style>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "Slider Principal",
  components: {
    Carousel,
    Slide,
  },
  props:{
    content : Object,
  },


};
</script>
