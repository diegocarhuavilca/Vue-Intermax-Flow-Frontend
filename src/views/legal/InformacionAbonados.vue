<template>
    <Navbar />

    <div class="container px-5" style="color:white; margin-top:1rem;margin-bottom:10rem;">
        <h1>{{ contenido.titulo }}</h1>

        <div
            style="margin-top:2.5rem;"
            v-for="(content, index) in contenido.subtitulos"
            :key="contenido.subtitulos[index].id"
        >
            <h2 style="margin-top:2rem">{{ contenido.subtitulos[index].titulo }}</h2>
            <div v-for="(sub, index2) in contenido.subtitulos[index].contenido" :key="index2">
                <h4 class="subtitulos" style="margin-top:1.5rem">{{ sub.titulo }}</h4>

                <div
                    class="container mx-1 my-4"
                    v-for="(info, i) in contenido.subtitulos[index].contenido[index2]
            .contenido"
                    :key="i"
                >
                    <h5 class="mx-2">{{ info.titulo }}</h5>
                    <h6 class="mx-3">{{ info.contenido }}</h6>
                    <p
                        class="mx-5"
                        style="color:gray"
                        v-if="info.mensaje != null"
                    >{{ info.mensaje }}</p>
                </div>

                <a :href="sub.link" target="_blank" style="margin-left:2rem">
                    <button v-if="sub.boton" class="btn">{{ sub.boton }}</button>
                </a>
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
                                        contenido:
                                            "Avenida Ernesto Diez Canseco 236 Oficina 403",
                                        mensaje: null,
                                    },
                                    {
                                        id: 2,
                                        titulo: "Horario de Atencion",
                                        contenido:
                                            "De lunes a viernes de 9:00 a 17:30 y sábados de 9:00 a 13:00",
                                        mensaje:
                                            "**Debido a la emergencia Sanitaria estamos atendiendo de manera remota desde nuestros hogares. Puede contactarnos a nuestra central telefónica (51) 1740-1740",
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
                        ],
                    },
                    {
                        id: 2,
                        titulo: "Contratos y requisitos",
                        contenido: [
                            {
                                id: 1,
                                titulo: "CONTRATO DE ABONADOS FLOW (10.08.2021)",
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/01_CONTRATO_DE_ABONADO_FLOW_10_08_2021_1_188bedd674.pdf",
                            },
                            {
                                id: 2,
                                titulo: "FORMULARIO DE REQUERIMIENTO INTERNET FLOW (10.08.2021)",
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/02_FORMULARIO_DE_REQUERIMIENTO_INTERNET_FLOW_10_08_2021_2_d8d139baa1.pdf",
                            },
                            {
                                id: 2,
                                titulo: "PROCEDIMIENTOS PARA LA ATENCIÓN DE AVERÍAS Y TRABAJOS DE OPERACIÓN Y MANTENIMIENTO",
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/ANEXO_2_PROCEDIMIENTOS_PARA_LA_ATENCION_DE_AVERIAS_Y_TRABAJOS_DE_OPERACION_Y_MANTENIMIENTO_2_359f87a72d.pdf",
                            },
                        ],
                    },
                    {
                        id: 3,
                        titulo: "Atención de reclamos y solicitudes",
                        contenido: [
                            {
                                id: 1,
                                contenido: [
                                    {
                                        id: 1,
                                        titulo: "FORMULARIO DE QUEJA-Anexo 2.5",
                                        contenido: null,
                                        mensaje: null,
                                    },
                                ],
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/FORMULARIO_DE_QUEJA_Anexo_2_5_5fe1cfc701.pdf",
                            },
                            {
                                id: 2,
                                contenido: [
                                    {
                                        id: 1,
                                        titulo: "FORMULARIO DE RECLAMOS _RECURSO DE APELACION",
                                        contenido: null,
                                        mensaje: null,
                                    },
                                ],
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/FORMULARIO_DE_RECLAMOS_RECURSO_DE_APELACION_Anexo_2_4_1_b6046ef688.pdf",
                            },
                            {
                                id: 3,
                                contenido: [
                                    {
                                        id: 1,
                                        titulo: "FORMULARIO DE RECLAMO-SERVICIO DE TELEFONÍA FIJA",
                                        contenido: null,
                                        mensaje: null,
                                    },
                                ],
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/FORMULARIO_DE_RECLAMO_SERVICIO_DE_TELEFONIA_FIJA_Anexo_2_1_8dd31865aa.pdf",
                            },
                            {
                                id: 4,
                                contenido: [
                                    {
                                        id: 1,
                                        titulo: "FORMULARIO DE RECLAMO OTROS SERVICIOS",
                                        contenido: null,
                                        mensaje: null,
                                    },
                                ],
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/FORMULARIO_DE_RECLAMO_OTROS_SERVICIOS_Anexo_2_3_1_5a1dfa49e2.pdf",
                            },
                            {
                                id: 5,
                                contenido: [
                                    {
                                        id: 1,
                                        titulo: "Relacion de medios probatorios",
                                        contenido: null,
                                        mensaje: null,
                                    },
                                ],
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/Relacion_de_Medios_Probatorios_f2176c4ceb.pdf",
                            },
                        ],
                    },
                    {
                        id: 1,
                        titulo: "Reclamos Precedentes",
                        contenido: [
                            {
                                id: 1,
                                titulo: "Expediente N° 02674-2015-TRASU-ST-RQJ-Precedente",
                                contenido: null,
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/Expediente_N_02674_2015_TRASU_ST_RQJ_Precedente_218e7505fe.pdf",
                            },
                            {
                                id: 2,
                                titulo: "Expediente Nº 12957-2005-TRASU-GUS-RA-Precedente",
                                contenido: null,
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/Expediente_N_12957_2005_TRASU_GUS_RA_Precedente_1_327b42d269.pdf",
                            },
                            {
                                id: 3,
                                titulo: "Expediente Nº 382-2007-TRASU-GUS-RA-Precedente",
                                contenido: null,
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/Expediente_N_382_2007_TRASU_GUS_RA_Precedente_cdc09703d4.pdf",
                            },
                            {
                                id: 4,
                                titulo: "Expediente Nº 07837-2003-TRASU-GUS-RQJ-Precedente",
                                contenido: null,
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/Expediente_N_07837_2003_TRASU_GUS_RQJ_Precedente_1_207fa3ddbc.pdf",
                            },
                            {
                                id: 5,
                                titulo: "Expediente  Nº 06982-2003-TRASU-GUS-Precedente",
                                contenido: null,
                                boton: "Descargar",
                                link: "https://www2.flow.pe/uploads/Expediente_N_06982_2003_TRASU_GUS_Precedente_2b10cd0666.pdf",
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
