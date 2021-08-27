<template>
    <Navbar />

    <div class="container w-50" style="color:white; margin-top:5rem;margin-bottom:10rem;">
        <h1>{{ contenido.titulo }}</h1>

        <a href="https://backend-strapi-flow.herokuapp.com/uploads/POLITICA_DE_PROTECCION_DE_DATOS_Y_PRIVACIDAD_DE_INTERMAX_1_b452fbf863.pdf" target="_blank">
          <button class="btn">Descargar Aqui</button>
        </a>
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
        />

        <path
            class="st4"
            d="M-5.24,114.41l-0.14,14.68h1250.04V15.88C850.21,212.59,387.66-94.03-5.24,114.41z"
        />
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

    data: function () {
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
                        boton: null,
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
