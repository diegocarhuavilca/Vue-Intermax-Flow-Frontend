<template>
  <div
    class="px-4 py-5 d-flex justify-content-center text-center contenido-informacion"
    style="background-color: #1d293a;"
  >
    <div class="col-sm-3 mx-4 wow slideInLeft" data-wow-offset="10" v-for="card in content" :key="card.id">
      <div class="card">
        <div class="card-body">
          <img :src="'http://45.182.37.13:1337'+card.imagen.url" alt="" class="img-fluid" style="width:70%" />
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
  props:{
    content : Object,
  },
};
</script>
