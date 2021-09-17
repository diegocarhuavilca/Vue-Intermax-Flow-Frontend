<template>
  <Navbar />

  <div
    class="container w-50"
    style="color:white; margin-top:5rem;margin-bottom:10rem;"
  >
    <h1>{{ contenido.titulo }}</h1>

    <div
      style="margin-top:2.5rem;"
      v-for="(content, index) in contenido.subtitulos"
      :key="contenido.subtitulos[index].id"
    >
      <h2 style="margin-top:2rem">{{ contenido.subtitulos[index].titulo }}</h2>
      <p style="text-align:justify;">
        {{ contenido.subtitulos[index].contenido }}
      </p>
      <a :href="contenido.subtitulos[index].link"
        ><button v-if="contenido.subtitulos[index].boton" class="btn">
          {{ contenido.subtitulos[index].boton }}
        </button></a
      >
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
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar2.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },

  data: function() {
    return {
      contenido: {
        id: 1,
        titulo: "Neutralidad de la red",
        subtitulos: [
          {
            id: 1,
            titulo: "Neutralidad de la red",
            contenido:null,
            boton: "Descargar",
            link: 'http://45.182.37.13:1337/uploads/NEUTRALIDAD_DE_RED_version_1_1_fce0d4fe42.pdf',
          },
          {
            id: 2,
            titulo: "ExpedienteNº 07837-2003-TRASU-GUS-RQJ-Precedente",
            contenido:null,
            boton: "Descargar",
            link: 'http://45.182.37.13:1337/uploads/Expediente_N_07837_2003_TRASU_GUS_RQJ_Precedente_2_91cb9638f6.pdf',
          },
          {
            id: 3,
            titulo: "Expediente  Nº 06982-2003-TRASU-GUS-Precedente",
            contenido: null,
            boton: "Descargar",
            link: 'http://45.182.37.13:1337/uploads/Expediente_N_06982_2003_TRASU_GUS_Precedente_1_f4aee25fd3.pdf',
          },
           {
            id: 4,
            titulo: "ExpedienteNº 12957-2005-TRASU-GUS-RA-Precedente",
            contenido: null,
            boton: "Descargar",
            link: 'http://45.182.37.13:1337/uploads/Expediente_N_12957_2005_TRASU_GUS_RA_Precedente_2_d2ab9da67e.pdf',
          },
          {
            id: 5,
            titulo: "ExpedienteNº 382-2007-TRASU-GUS-RA-Precedente",
            contenido: null,
            boton: "Descargar",
            link: 'http://45.182.37.13:1337/uploads/Expediente_N_382_2007_TRASU_GUS_RA_Precedente_1_0a8c112ea3.pdf',
          },
          {
            id: 6,
            titulo: "ExpedienteN° 02674-2015-TRASU-ST-RQJ-Precedente",
            contenido: null,
            boton: "Descargar",
            link: 'http://45.182.37.13:1337/uploads/Expediente_N_02674_2015_TRASU_ST_RQJ_Precedente_1_fdf0c08c4d.pdf',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h1,
.subtitulos {
  background: linear-gradient(to right, #f74567, #fe653a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.btn {
  width: fit-content;
  margin-top: 0.7rem;
  padding: 0.7rem 1.2rem;
  background: linear-gradient(to right, #f74567, #fe653a);
  border-radius: rem;
  border: none;
  color: white;
  &:hover {
    color: white;
  }
}
.st3 {
  fill: transparent;
}

.st4 {
  fill: #1b2638;
}
</style>
