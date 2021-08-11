<template>
  <footer
    class="text-center text-lg-start text-white"
    style="background-color: #1b2638;"
  >
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row my-4 contenido-footer">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div
            class="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
            style="width: 150px; height: 150px;"
          >
            <a href="/"
              ><img
                src="https://res.cloudinary.com/intermax/image/upload/v1621264964/Flow/Brande/Logo_w2mccx.svg"
                height="70"
                alt=""
                loading="lazy"
            /></a>
          </div>

          <p class="text-center">Siguenos en</p>

          <ul class="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a class="text-white px-2" href="#!">
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
            </li>
            <li>
              <a class="text-white px-2" href="#!">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Contacto</h5>

          <ul class="list-unstyled">
            <li>
              <p>
                <i class="fas fa-map-marker-alt pe-2"></i
                >{{ contacto.direccion }}
              </p>
            </li>
            <li>
              <p><i class="fas fa-phone pe-2"></i>{{ contacto.telefono }}</p>
            </li>
            <li>
              <p>
                <i class="fas fa-envelope pe-2 mb-0"></i>{{ contacto.email }}
              </p>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Legal y Regulatorio</h5>

          <ul class="list-unstyled p-0">
            <li v-for="legal in legales" :key="legal.id" class="mb-2">
              <a href="#!" class="text-white" style="text-decoration:none">{{
                legal.titulo
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3">
      © 2021 Intermax S.A.C - Todos los derechos reservados
    </div>
    <!-- Copyright -->
  </footer>

  <!-- End of .container -->
</template>

<script>
export default {
  data: function() {
    return {
      contacto: {
        id: 1,
        direccion: "Ernesto Diez Canseco 236, ofic. 403,Miraflores",
        telefono: "+51 1740 1740",
        email: "contacto@flow.pe",
      },
      legales: [
        {
          id: 1,
          titulo: "Información de Abonados y Usuarios",
          link: "",
        },
        {
          id: 2,
          titulo: "Portabilidad Numérica",
          link: "",
        },
        {
          id: 3,
          titulo: "Indicadores de Calidad",
          link: "",
        },
        {
          id: 4,
          titulo: "Uso de la Red en caso de Emergencia",
          link: "",
        },
        {
          id: 5,
          titulo: "Neutralidad de la Red",
          link: "",
        },
        {
          id: 6,
          titulo: "Ley de Protección de Datos",
          link: "",
        },
        {
          id: 7,
          titulo: "Terminos y Condiciones",
          link: "",
        },
        {
          id: 8,
          titulo: "Tarifas",
          link: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.contenido-footer {
  display: flex;
  justify-content: space-between;
}
</style>
