<template>
  <Navbar />

  <div class="container w-50" style="color:white; margin-top:5rem;margin-bottom:10rem;">
    <h1>{{ contenido.titulo }}</h1>

    <div
      style="margin-top:2.5rem;"
      v-for="(content, index) in contenido.subtitulos"
      :key="contenido.subtitulos[index].id"
    >
      <h2 style="margin-top:2rem">{{ contenido.subtitulos[index].titulo }}</h2>
      <div
        v-for="(sub, index2) in contenido.subtitulos[index].contenido"
        :key="index2"
      >
        <h4 class="subtitulos" style="margin-top:1.5rem">
          {{ sub.titulo }}
        </h4>

        <div
          class="container mx-1 my-4"
          v-for="(info, i) in contenido.subtitulos[index].contenido[index2]
            .contenido"
          :key="i"
        >
          <h5 class="mx-2">{{ info.titulo }}</h5>
          <h6 class="mx-3">{{ info.contenido }}</h6>
          <p class="mx-5" style="color:gray" v-if="info.mensaje != null">
            {{ info.mensaje }}
          </p>
        </div>

        <a :href="sub.link" target="_blank" style="margin-left:2rem"
          ><button v-if="sub.boton" class="btn">
            {{ sub.boton }}
          </button></a
        >
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
        titulo: "Informacion Abonados",
        subtitulos: [
          {
            id: 1,
            titulo: "Gestiona tus servicios",
            contenido: [
              {
                id: 1,
                titulo: "Nuestras Oficinas y horarios de atencion",
                contenido: [
                  {
                    id: 1,
                    titulo: "Direccion",
                    contenido: "Avenida Ernesto Diez Canseco 236 Oficina 403",
                    mensaje: null,
                  },
                  {
                    id: 2,
                    titulo: "Horario de Atencion",
                    contenido:
                      "De lunes a viernes de 9:00 a 17:30 y sábados de 9:00 a 13:00",
                    mensaje:
                      "*Debido a la emergencia sanitaria estamos atendiendo de manera remota desde nuestros hogares.",
                  },
                  {
                    id: 3,
                    titulo:
                      "Puede contactarnos a nuestra central telefónica 740-1740",
                    contenido: null,
                    mensaje: null,
                  },
                ],
                boton: null,
                link: "",
              },
              {
                id: 2,
                titulo: "Mide la velocidad de tu internet",
                contenido: null,
                boton: "Mide tu velocidad Aqui",
                link: "https://www.speedtest.net",
              },
              {
                id: 3,
                titulo: "Directorio telefónico",
                contenido: null,
                boton: "Directorio Telefonico Aqui",
                link: "https://www.speedtest.net",
              },
            ],
          },
          {
            id: 2,
            titulo: "Contratos y requisitos",
            contenido: [
              
              {
                id: 1,
                titulo: "Alta de servicio",
                contenido: [{
                    id: 1,
                    titulo: "Dirección",
                    contenido: "Avenida Ernesto Diez Canseco 236 Oficina 403",
                    mensaje: null,
                  },],
                boton: "Descargar",
                link: "/",
              },
            ],
          },
          {
            id: 3,
            titulo: "Atención de reclamos y solicitudes",
            contenido: [
              
              {
                id: 1,
                titulo: "Procedimiento para presentar reclamos, recursos y quejas",
                contenido: [{
                    id: 1,
                    titulo: "Expediente Nº 06982-2003-TRASU-GUS-Precedente",
                    contenido: null,
                    mensaje: null,
                  },],
                boton: "Descargar",
                link: "/",
              },
              {
                id: 2,
                titulo: "Expedientes de reclamos en primera instancia",
                contenido: [{
                    id: 1,
                    titulo: "Expediente Nº 06982-2003-TRASU-GUS-Precedente",
                    contenido: null,
                    mensaje: null,
                  },],
                boton: "Descargar",
                link: "/",
              },
            ],
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
