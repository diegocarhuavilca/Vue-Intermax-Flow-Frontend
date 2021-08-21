<template>
  <div class="container-fluid p-0 m-0" v-if="content_ready">
    <Navbar />
    <SliderPrincipal :content="contenido_slider" />
    <CardsInformacion :content="contenido_cards" />
    <Planes :content="contenido_planes" />
    <Cobertura :content="contenido_cobertura" />
    <Carousel :content="contenido_planes" />
    <Contact />
    <Footer />
  </div>
  <div v-else class="container-fluid d-flex" style="min-height:100vh">
    <lottie-player src="https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
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
        "http://localhost:1337/pagina-principal"
      );
      this.contenido_slider = response.data.BannerPrincipal.banner;
      this.contenido_cards = response.data.CardsInformacion.card;
      this.contenido_planes = response.data.Planes.plan;
      this.contenido_cobertura = response.data.Cobertura;
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
</style>
