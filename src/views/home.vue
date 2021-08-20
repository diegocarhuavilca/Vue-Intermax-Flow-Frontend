<template>
  <Navbar />
  <SliderPrincipal />
  <CardsInformacion />
  <Planes />
  <Cobertura />
  <Contact />
  <Footer />
</template>

<script>
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
  methods: {
    scrollToBottom() {
      const container = this.$refs.planes;
      container.scrollTop = container.scrollHeight;
    },
  },
};
</script>

<style></style>
