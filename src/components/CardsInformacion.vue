<template>
  <div
    class="px-4 py-5 d-flex justify-content-center text-center contenido-informacion"
    style="background-color: #1d293a;"
  >
    <div class="col-sm-3 mx-4 wow slideInLeft" data-wow-offset="10" v-for="card in cards" :key="card.id">
      <div class="card">
        <div class="card-body">
          <img :src="card.imagen" alt="" class="img-fluid" style="width:70%" />
          <h5 class="card-title">{{ card.titulo }}</h5>
          <p class="card-text">{{ card.contenido }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 0;
  background-color: transparent;
  color: white;
  .card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: flex-end;
  }
  h5 {
    font-weight: 700;
  }
  p {
    text-align: justify;
  }
}

@media screen and (max-width: 1072px) {
  .contenido-informacion{

    img{
      width:50% !important;
    }
    .card-title{
      font-size: 1rem;
    }

    .card-text{
      font-size: 0.8rem;
    }
  }
}
@media screen and (max-width: 892px) {
  .contenido-informacion{
    .slideInLeft{
      width:60vw;
    }
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-title{
      font-size: 1rem;
    }
    .card-text{
      font-size: 0.8rem;
    }
  }
}
</style>

<script>
export default {
  name: "Informacion Cards",
  data: function() {
    return {
      cards: [
        {
          id: 1,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1627671783/Flow/Informacion/MicrosoftTeams-image_17_zsklqt.png",
          titulo: "Soporte y Atención al Cliente",
          contenido:
            "Estamos siempre disponibles, cada vez que necesites algo, contáctanos y te ayudaremos. Llama o escribe al Whatsapp 017401740, estamos para atender tus inquietudes.",
        },
        {
          id: 2,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1623421544/Flow/Informacion/MicrosoftTeams-image_16_osr7sp-_1__1_lakz2p.webp",
          titulo: "Maxima Velocidad",
          contenido:
            "Disfruta de la máxima velocidad en fibra óptica y siempre con el mejor precio posible. Olvídate de quedarte sin internet, navega, comparte, juega online, mira tus videos sin interrupciones.",
        },
        {
          id: 3,
          imagen:
            "https://res.cloudinary.com/intermax/image/upload/v1623421545/Flow/Informacion/MicrosoftTeams-image_17_u7cmo9-_1__u6vcdq.webp",
          titulo: "Instalación Inmediata",
          contenido:
            "Te enviamos e instalamos el Router en el horario que mejor te convenga. Nuestros técnicos instaladores cumplen con todos los Protocolos de Instalación Covid-19. Quédate tranquilo.",
        },
      ],
    };
  },
};
</script>
