<template>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1240 120"
    style="enable-background: new 0 0 1240 120"
    xml:space="preserve"
  >
    <path
      class="st30"
      d="M-5.24,114.75c393.1-208.54,855.91,98.49,1250.49-98.81v-25.4L-5.24-7.43V114.75z"
    ></path>

    <path
      class="st22"
      d="M-5.24,114.41l-0.14,14.68h1250.04V15.88C850.21,212.59,387.66-94.03-5.24,114.41z"
    ></path>
  </svg> 
  <div class="container-fluid contenido-contacto" style="background-color:#16202b;">
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6 imagen">
          <img
            :src="contacto.imagen"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 formulario">
          <h1 class="display-5 fw-bold lh-1 mb-3" style="color:#f74567;">
            Te llamamos
          </h1>
          <Formulario/>
        </div>
      </div>
    </div>
  </div>

  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1240 120"
    style="enable-background: new 0 0 1240 120"
    xml:space="preserve"
  >
    <path
      class="st3"
      d="M-5.24,114.75c393.1-208.54,855.91,98.49,1250.49-98.81v-25.4L-5.24-7.43V114.75z"
    ></path>

    <path
      class="st4"
      d="M-5.24,114.41l-0.14,14.68h1250.04V15.88C850.21,212.59,387.66-94.03-5.24,114.41z"
    ></path>
  </svg>
</template>

<script>
import Formulario from "./FormularioContacto.vue"
export default {
  data: function() {
    return {
      contacto: {
        id: 1,
        imagen:
          "https://res.cloudinary.com/intermax/image/upload/v1628706228/Flow/Contacto/img-final_t9d9f5.png",
      },
    };
  },
  components:{
    Formulario
  }
};
</script>

<style scoped>
.st30 {
  fill: rgb(29, 41, 58);
}

.st22 {
  fill: #16202b;
}
.st3 {
  fill: #16202b;
}

.st4 {
  fill: #1b2638;
}

.contenido-contacto {
  background-image: url('https://res.cloudinary.com/intermax/image/upload/v1622219592/Flow/Contacto/MicrosoftTeams-image_11_lrs0ko.png');
  background-size: cover;
  background-position: 0 50%;
}

@media screen and (max-width: 990px) {
  .imagen{
    display: none;
  }

  .contenido-contacto{
    background-repeat: repeat-x repeat-y;
  }
}
</style>
