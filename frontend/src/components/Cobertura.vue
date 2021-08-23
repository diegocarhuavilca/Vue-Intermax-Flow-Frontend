<template>
  <div
    class="container-fluid"
    style="background-color: #1d293a;"
    id="cobertura"
  >
    <div class="container-fluid px-5 py-5 wow slideInLeft">
      <div
        class="row flex-lg-row align-items-center justify-content-center g-5 py-4"
      >
        <div class="col-6 col-sm-8 col-lg-6 imagen">
          <img
            :src="content.imagen.name"
            class="d-block img-fluid"
            loading="lazy"
          />
        </div>
        <div class="col-lg-4 d-flex flex-column align-items-center texto">
          <h1
            class="display-6 fw-bold lh-1 mb-3"
            style="color:white; text-align:center;"
          >
            {{ content.titulo }}
          </h1>
          <p
            class="lead"
            style="
                color: #fe653a; text-align:center;"
          >
            {{ content.subtitulo }}
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="https://api.whatsapp.com/send/?phone=51981100225&text=Cobertura&app_absent=0"
              target="__blank"
              ><button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 hvr-buzz-out"
              >
                Suscribete
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cobertura",
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: fit-content;
  margin-top: 0.7rem;
  padding: 0.7rem 1.2rem;
  background: linear-gradient(to right, #f74567, #fe653a);
  border-radius: rem;
  border: none;
  color: white;
}

@media screen and (max-width: 992px) {
  .imagen {
    width: 500px !important;
  }

  .texto {
    padding: 0 5%;
    h1 {
      font-size: 2rem;
    }

    p {
      padding: 1rem;
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .texto {
    padding: 0 5%;
    h1 {
      font-size: 2rem;
    }

    p {
      padding: 1rem;
      font-size: 1rem;
    }
  }
}
</style>
