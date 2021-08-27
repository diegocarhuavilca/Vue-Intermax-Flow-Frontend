<template>
  <footer class="text-center text-lg-start text-white" style="background-color: #1b2638">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row my-4 contenido-footer">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div
            class="shadow-1-strong d-flex align-items-center justify-content-center mx-auto"
            style="width: 150px; height: 150px"
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
              <a
                class="text-white px-2 hvr-float-shadow"
                href="https://www.facebook.com/flow.fibra"
              >
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                class="text-white px-2 hvr-float-shadow"
                href="https://www.instagram.com/fibra.flow/"
              >
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4" style="color: #f74567">Contacto</h5>

          <ul class="list-unstyled">
            <li>
              <p>
                <i class="fas fa-map-marker-alt pe-2"></i>Ernesto Diez Canseco 236, ofic. 403, Miraflores
              </p>
            </li>
            <li>
              <p><i class="fas fa-phone pe-2"></i>+51 1740 1740</p>
            </li>
            <li>
              <p>
                <i class="fas fa-envelope pe-2 mb-0"></i>contacto@flow.pe
              </p>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4" style="color: #f74567">Legal y Regulatorio</h5>

          <ul class="list-unstyled p-0">
            <li
              class="mb-2 hvr-forward"
              style="display: inline-block; width: 100%; cursor:pointer"
            >
              <a
                href="/informacion-abonados"
                class="text-white"
                style="text-decoration: none"
                target="_blank"
                >Informacion de Abonados y Usuarios</a
              >
            </li>
            <li
              class="mb-2 hvr-forward"
              style="display: inline-block; width: 100%; cursor:pointer"
            >
              <a
                href="https://backend-strapi-flow.herokuapp.com/uploads/Portabilidad_numerica_1_2_f127384698.pdf"
                class="text-white"
                style="text-decoration: none"
                target="_blank"
                >Portabilidad Numerica</a
              >
            </li>
            <li
              class="mb-2 hvr-forward"
              style="display: inline-block; width: 100%; cursor:pointer"
            >
              <a
                href="https://backend-strapi-flow.herokuapp.com/uploads/USO_DE_LA_RED_EN_CASO_DE_EMERGENCIA_cad127baa9.pdf"
                class="text-white"
                style="text-decoration: none"
                target="_blank"
                >Uso de la Red en Casos de Emergencia</a
              >
            </li>
            <li
              class="mb-2 hvr-forward"
              style="display: inline-block; width: 100%; cursor:pointer"
            >
              <a
                href="/neutralidad-de-red"
                class="text-white"
                style="text-decoration: none"
                target="_blank"
                >Neutralidad de la Red</a
              >
            </li>
            <li
              class="mb-2 hvr-forward"
              style="display: inline-block; width: 100%; cursor:pointer"
            >
              <a
                href="https://backend-strapi-flow.herokuapp.com/uploads/POLITICA_DE_PROTECCION_DE_DATOS_Y_PRIVACIDAD_DE_INTERMAX_1_b452fbf863.pdf"
                class="text-white"
                style="text-decoration: none"
                target="_blank"
                >Ley de Proteccion de Datos</a
              >
            </li>
            <li
              class="mb-2 hvr-forward"
              style="display: inline-block; width: 100%; cursor:pointer"
            >
              <a
                href="https://backend-strapi-flow.herokuapp.com/uploads/TERMINOS_Y_CONDICIONES_DE_LA_WEB_2af21a2673.pdf"
                class="text-white"
                style="text-decoration: none"
                target="_blank"
                >Terminos y Condiciones</a
              >
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
  props: {
    content: Object,
    legales: Object,
  },
};
</script>
<style lang="scss" scoped>
.contenido-footer {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 990px) {
  .contenido-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
