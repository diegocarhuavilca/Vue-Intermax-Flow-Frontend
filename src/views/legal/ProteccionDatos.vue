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
      <h5 style="margin-top:2rem">
        {{ contenido.subtitulos[index].subtitulo }}
      </h5>
      <p style="text-align:justify;">
        INTERMAX S.A.C. (en adelante "FLOW") es una empresa privada que
        brinda servicios de telecomunicaciones en el Perú. En ese sentido,
        reconoce que la seguridad de la información de sus clientes y prospectos
        de clientes merece interés y cuidado conforme a lo establecido en la Ley
        No. 29733, Ley de Protección de datos personales
        <a href="http://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf">(http://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf)</a>
        , su Reglamento y normas complementarias, adoptando para ello las
        medidas técnicas y organizativas necesarias para evitar el mal uso,
        alteración, robo, acceso no autorizado de datos personales. Asimismo,
        FLOW recopila información personal, tales como: nombres completos,
        correos electrónicos, documentos de identidad; entre otros, que resulten
        necesarios para cumplir con los fines comerciales de la empresa. Esta
        recopilación puede llevarse a cabo a través de diversas plataformas. Sin
        embargo, los datos serán recopilados solo si el USUARIO autoriza el
        tratamiento de los datos personales (expresión de voluntad), mediante la
        aceptación automatizada y no automatizada. Por lo tanto, los datos
        personales suministrados a FLOW serán almacenados en nuestra base de
        datos de “Clientes” por tiempo indefinido y serán tratados de acuerdo
        con lo establecido en la ley y el contrato entre las partes,
        principalmente para fines administrativos, promocionales, publicitarios,
        comerciales, de contacto y otras finalidades comerciales directa o
        indirectamente relacionadas con la actividad comercial de FLOW. En
        algunos casos, sus datos serán transferidos a empresas del grupo o
        terceros no vinculados siempre dentro de los fines para los cuales se
        autorizó el tratamiento. Como encargado del tratamiento, garantizamos
        total confidencialidad y seguridad de la información.
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
        titulo: "Ley de protección de datos",
        subtitulos: [
          {
            id: 1,
            titulo: "POLÍTICA DE PROTECCIÓN DE DATOS Y PRIVACIDAD DE FLOW",
            contenido: "",
            subtitulo:
              "LEY N° 29733, Ley de Protección de Datos y su Reglamento DS. N° 003-2013-JUS",
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
