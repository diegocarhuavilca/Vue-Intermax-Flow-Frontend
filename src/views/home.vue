<template>
    <div class="container-fluid p-0 m-0" v-if="content_ready">
        <SliderPrincipal :content="contenido_slider" />
        <CardsInformacion :content="contenido_cards" />
        <Planes :content="contenido_planes" />
        <Cobertura :content="contenido_cobertura" />
        <Contact />
    </div>
    <div v-if="!error && !content_ready" class="container-fluid d-flex charging">
        <lottie-player
            src="https://res.cloudinary.com/intermax/raw/upload/v1629750495/Flow/lf30_editor_2ahluuzn_sauyna.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px;"
            loop
            autoplay
        ></lottie-player>
    </div>

    <div
        class="container-fluid d-flex flex-column align-items-center justify-content-center error"
        v-if="error"
    >
        <h1 style="color:white">{{error_data}}</h1>
        <a href="/">
            <button class="btn">Home</button>
        </a>
    </div>
</template>

<script>
import axios from "axios";
import SliderPrincipal from "../components/SliderPrincipal.vue";
import CardsInformacion from "../components/CardsInformacion.vue";
import Planes from "../components/Planes.vue";
import Cobertura from "../components/Cobertura.vue";
import Contact from "../components/Contact.vue";
export default {
    name: "App",
    components: {
        SliderPrincipal,
        CardsInformacion,
        Planes,
        Cobertura,
        Contact,
    },
    async beforeCreate() {
        try {
            const response = await axios.get(
                "https://www2.flow.pe/pagina-principal"
            );
            const legal = await axios.get("https://www2.flow.pe/legales");
            this.contenido_slider = response.data.BannerPrincipal.Banner;
            this.contenido_cards = response.data.CardsInformacion.Cards;
            this.contenido_planes = response.data.Planes.Plan;
            this.contenido_cobertura = response.data.Cobertura;
            this.contenido_footer = response.data.Footer;
            this.contenido_legal = legal.data;
            this.error = false;
            this.content_ready = true;
        } catch (e) {
            this.error_data = e;
            this.error = true;
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
            error: false,
            error_data: null,
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

<style lang="scss" scoped>
.agile__slides--regular {
    justify-content: center !important;
}

.charging {
    min-height: 100vh;
    justify-content: center !important;
    align-items: center;
}

.error {
    min-height: 100vh;
}

.btn {
    width: fit-content;
    margin-top: 0.7rem;
    background: linear-gradient(to right, #f74567, #fe653a);
    border-radius: rem;
    border: none;
    color: white;

    &:hover {
        color: white;
    }
}
</style>
