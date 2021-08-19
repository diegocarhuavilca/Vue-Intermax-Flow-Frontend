<template>
  <Navbar />
  <SliderPrincipal :content="contenido_slider"/>
  <CardsInformacion :content="contenido_cards"/>
  <Planes :content="contenido_planes"/>
  <Cobertura :content="contenido_cobertura"/>
  <Carousel :content="contenido_planes"/>
  <Contact />
  <Footer />
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
      const response = await axios.get("http://localhost:1337/home");
      this.contenido_slider = response.data.Banners.ContenidoBanner;
      this.contenido_cards = response.data.CardsInformacion.CardInformacion;
      this.contenido_planes = response.data.Planes;
      this.contenido_cobertura = response.data.Cobertura;
    } catch (error) {
      this.error = error;
      alert(this.error);
    }
  },
  data(){
    return{
      contenido_slider : [],
      contenido_cards : [],
      contenido_planes : [],
      contenido_cobertura :[],
    }
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
.agile__slides--regular{
  justify-content: center !important;
}
</style>
