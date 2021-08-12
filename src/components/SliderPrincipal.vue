<template>
  <div class="container-fluid p-0 m-0 contenido-slider-principal">
    <carousel
      :items-to-show="1"
      :wrap-around="true"
      :autoplay="3000"
    >
      <slide v-for="slide in slider" :key="slide">
        <div class="container-fluid contenido-slide m-0 p-0">
          <img
            :src="slide.imagen"
            alt=""
            class="img-fluid"
            style="width:100%; max-height:758px;object-fit: cover;"
          />

          <a v-if="slide.boton != null" href="#" class="btn btn-primary">
            <button type="button " class="ref-contacto">
              {{ slide.boton }}
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
  padding: 0.7rem 1.2rem;
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
  
  data: function() {
    return {
      slider: [
        {
          id: 1,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1623421063/Flow/Carousel/MicrosoftTeams-image_7_un2lek_mnceyj.webp",
          boton: "Conectacte",
        },
        {
          id: 2,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1623421063/Flow/Carousel/MicrosoftTeams-image_6_gilhfl_b4urs0.webp",
          boton: "Dale Flow",
        },
        {
          id: 3,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1623951293/Flow/Carousel/SlideGame_mo6jhh_crmgwg.webp",
          boton: "Dale play",
        },
        {
          id: 4,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1623946479/Flow/Carousel/MicrosoftTeams-image_50_tjdxeq-min_quszhh.webp",
          boton: null,
        },
      ],
    };
  },
};
</script>
