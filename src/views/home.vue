<template>
    <div class="container-fluid p-0 m-0" v-if="content_ready">
        <Navbar />
        <SliderPrincipal :content="contenido_slider" />
        <CardsInformacion :content="contenido_cards" />
        <Planes :content="contenido_planes" />
        <Cobertura :content="contenido_cobertura" />
        <Contact />
        <Footer :content="contenido_footer" :legales="contenido_legal" />
    </div>
    <div v-else class="container-fluid d-flex charging">
        <lottie-player
            src="https://res.cloudinary.com/intermax/raw/upload/v1629750495/Flow/lf30_editor_2ahluuzn_sauyna.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px;"
            loop
            autoplay
        ></lottie-player>
    </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import SliderPrincipal from "../components/SliderPrincipal.vue";
import CardsInformacion from "../components/CardsInformacion.vue";
import Planes from "../components/Planes.vue";
import Cobertura from "../components/Cobertura.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "App",
    components: {
        Navbar,
        SliderPrincipal,
        CardsInformacion,
        Planes,
        Cobertura,
        Contact,
        Footer,
    },
    async beforeCreate() {
        try {
            const response = await axios.get(
                "https://www2.flow.pe/pagina-principal"
            );
            const legal = await axios.get(
                "https://www2.flow.pe/legales"
            );
            this.contenido_slider = response.data.BannerPrincipal.Banner;
            this.contenido_cards = response.data.CardsInformacion.Cards;
            this.contenido_planes = response.data.Planes.Plan;
            this.contenido_cobertura = response.data.Cobertura;
            this.contenido_footer = response.data.Footer;
            this.contenido_legal = legal.data;
            this.content_ready = true;
        } catch (error) {
            this.error = error;
            alert(this.error);
        }
    },
    data() {
        return {
            contenido_slider: [],
            contenido_cards: [],
            contenido_planes: [],
            contenido_cobertura: [],
            contenido_footer: [],
            content_ready: false,
        };
    },
    methods: {
        scrollToBottom() {
            const container = this.$refs.planes;
            container.scrollTop = container.scrollHeight;
        },
    },
};
</script>

<style>
.agile__slides--regular {
    justify-content: center !important;
}

.charging {
    min-height: 100vh;
    justify-content: center !important;
    align-items: center;
}
</style>
