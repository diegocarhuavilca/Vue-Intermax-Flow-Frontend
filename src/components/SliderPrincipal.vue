<template>
  <carousel :items-to-show="1" :wrap-around="true" >
    <slide v-for="slide in slider" :key="slide">
      <div class="container-fluid m-0 p-0">
        <img :src=slide.imagen alt="" class="img-fluid">
        <a href="#" class="btn">
          <button type="button" class="btn ref-contacto">
            Ingresar
          </button>
        </a>
      </div>
    </slide>

    <template #addons>
     <!--<navigation />--> 
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "Slider Principal",
  components: {
    Carousel,
    Slide,
    //Navigation,
  },
  data: function () {
    return {
      slider: [
        { imagen: "https://res.cloudinary.com/intermax/image/upload/v1623421063/Flow/Carousel/MicrosoftTeams-image_7_un2lek_mnceyj.webp" },
        { imagen: "https://res.cloudinary.com/intermax/image/upload/v1623421063/Flow/Carousel/MicrosoftTeams-image_6_gilhfl_b4urs0.webp" },
        { imagen: "https://res.cloudinary.com/intermax/image/upload/v1623951293/Flow/Carousel/SlideGame_mo6jhh_crmgwg.webp" },
        {imagen :"https://res.cloudinary.com/intermax/image/upload/v1623946479/Flow/Carousel/MicrosoftTeams-image_50_tjdxeq-min_quszhh.webp"}
      ],
    };
  },
};
</script>