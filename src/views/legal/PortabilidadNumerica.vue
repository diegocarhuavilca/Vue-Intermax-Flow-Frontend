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
import Navbar from "@/components/Navbar.vue";
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
        titulo: "Portabilidad Numerica",
        subtitulos: [
          {
            id: 1,
            titulo: "¿Qué es la portabilidad numérica?",
            contenido:
              "La Portabilidad Numérica (PN) es una funcionalidad que permite conservar el número telefónico cuando se cambia a otra compañía, con el propósito de fomentar una competencia más equitativa entre los proveedores de servicios de telecomunicaciones, y a su vez se traduce en mejores tarifas, más servicios de telecomunicaciones y un uso más eficiente de la numeración.Todos los abonados del servicio móvil y del servicio de telefonía fija pueden acceder a la portabilidad numérica, independientemente de la modalidad de pago que tengan contratado (postpago, control o prepago).Cabe señalar que la portabilidad numérica no es aplicable entre servicios. Sólo se puede portar un número telefónico fijo de un operador hacia otro operador de telefonía fija. Del mismo modo, sólo se puede portar un número telefónico móvil hacia otro operador del servicio móvil.",
            boton: null,
            link: null,
          },
          {
            id: 2,
            titulo: "Preguntas frecuentes",
            contenido: null,
            boton: "Descargar",
            link: null,
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
