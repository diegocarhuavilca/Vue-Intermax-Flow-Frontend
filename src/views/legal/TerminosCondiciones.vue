<template>
  <Navbar />

  <div
    class="container w-50"
    style="color:white; margin-top:5rem;margin-bottom:10rem;"
  >
    <h1>{{ contenido.titulo }}</h1>

    <div
      style="margin-top:2.5rem;"
      v-for="(content, index) in contenido.subtitulos"
      :key="contenido.subtitulos[index].id"
    >
      <h2 style="margin-top:2rem">{{ contenido.subtitulos[index].titulo }}</h2>

      <p style="text-align:justify;margin-top:1rem">
        {{ contenido.subtitulos[index].contenido }}
      </p>

      <ul>
        <li
          v-for="(item, index2) in contenido.subtitulos[index].items"
          :key="index2"
          style="text-align:justify;margin-top:1rem;"
        >
          {{ item.contenido }}
        </li>
      </ul>
    </div>
  </div>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1240 120"
    style="enable-background: new 0 0 1240 120"
    xml:space="preserve"
  >
    <path
      class="st3"
      d="M-5.24,114.75c393.1-208.54,855.91,98.49,1250.49-98.81v-25.4L-5.24-7.43V114.75z"
    ></path>

    <path
      class="st4"
      d="M-5.24,114.41l-0.14,14.68h1250.04V15.88C850.21,212.59,387.66-94.03-5.24,114.41z"
    ></path>
  </svg>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar2.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },

  data: function() {
    return {
      contenido: {
        id: 1,
        titulo: "Terminos y Condiciones",
        subtitulos: [
          {
            id: 1,
            titulo:
              "CONVENIO PARA EL USO Y PRIVACIDAD DE LA PÁGINA WEB DE INTERMAX S.A.C",
            contenido:
              "INTERMAX S.A.C (en adelante “INTERMAX”), pone a disposición del público en general el uso de esta página web con el objeto de facilitar el conocimiento de las actividades que realiza y servicios que presta.El uso de la página web de INTERMAX está sujeto a los términos y condiciones establecidos en este documento. Asimismo, la utilización de la Página Web atribuye  a quien lo efectúa la condición de Usuario del servicio (en adelante, el “Usuario”) e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este documento. El Usuario acepta los siguientes términos y condiciones:",
            boton: null,
            link: null,
            items: [
              {
                id: 1,
                contenido:
                  "El usuario del sitio Web (www.intermax.pe) se compromete a leer detenidamente los presentes términos y condiciones generales, antes de utilizar los servicios Web que ofrece INTERMAX. Ello implica que Usuario acepta expresamente los términos y condiciones generales. En caso de no aceptarlos, se le solicita que no haga uso, ni acceda, ni manipule la información de los servicios ofrecidos por el sitio Web, ya que está haciendo un uso inadecuado de éste.",
              },
              {
                id: 2,
                contenido:
                  "El Usuario acepta y reconoce ser responsable por el uso de la Página Web, liberando de cualquier responsabilidad a INTERMAX y a cualquiera de sus respectivos directores, funcionarios, empleados u otros representantes que, en ningún caso, responderán por daños directos o indirectos, ni por daño emergente ni por lucro cesante, por los perjuicios que puedan derivarse del uso de la Página Web o del acceso a otros sitios de terceros a través de las conexiones y “links” que pudiesen existir.",
              },
              {
                id: 3,
                contenido:
                  "El Usuario se obliga a hacer uso de este Sitio únicamente para fines lícitos y/o en forma diligente y correcta. En ese sentido, en forma enunciativa y no limitativa, el Usuario no deberá utilizar el Sitio para la realización de actividades contrarias a la ley, a las presentes Condiciones, a la moral, a las buenas costumbres o al orden público establecido y/o con fines o efectos ilícitos, prohibidos o lesivos de derechos e intereses de terceros, ni para procesar, enviar o trasmitir a través del Sitio material, información o contenidos que puedan ser considerados de algún modo ilegal, amenazante,  abusivo, invasivo, difamatorio, obsceno, sexualmente explícito, racista, vulgar, profano o que resulte reprobable de alguna manera o afecte derechos civiles o alguna norma legal.",
              },
              {
                id: 4,
                contenido:
                  "El Usuario, en general, deberá cumplir con todas y cada una de las demás obligaciones establecidas en las presentes Condiciones, así como las demás que puedan inferirse de un uso correcto, de buena fe y/o racional del Sitio. El incumplimiento de las mismas dará lugar a las responsabilidades civiles y penales correspondientes.",
              },
              {
                id: 5,
                contenido:
                  "El Usuario reconoce y acepta que, en cualquier momento, INTERMAX puede interrumpir, desactivar y/o cancelar cualquiera de los contenidos y/o servicios que se integran en este Sitio, sin que ello genere responsabilidad de ninguna clase.",
              },
              {
                id: 6,
                contenido:
                  "INTERMAX no asume responsabilidad alguna por el contenido de este Sitio y/o por el uso que terceros puedan hacer de él, ni por las modificaciones o alteraciones que se puedan derivar del acceso, conexión o la descarga de cualquier material o programas de este Sitio. ",
              },
              {
                id: 7,
                contenido:
                  "INTERMAX no será responsable bajo ninguna circunstancia por los daños, pérdidas o perjuicios de ninguna clase que se produzcan a terceros como resultado de conectarse a este Sitio o del uso o reproducción posterior del contenido de este Sitio o del uso del contenido publicado en este Sitio. La información provista espontáneamente por quienes accedan a este Sitio puede ser usada libremente por INTERMAX, de conformidad con el ordenamiento vigente y lo establecido en las presentes Condiciones. ",
              },
              {
                id: 8,
                contenido:
                  "Todos los contenidos, marcas, textos e imágenes gráficas de este Sitio están sujetos a los derechos de INTERMAX protegidos por las leyes de la propiedad intelectual e industrial y derechos de autor. En ningún caso el acceso a este Sitio implica ningún tipo de renuncia, transmisión o cesión total ni parcial de dichos derechos, ni confiere ningún derecho de utilización, alteración, explotación, reproducción, distribución o comunicación pública sobre dichos contenidos sin la previa y expresa autorización específicamente otorgada a tal efecto por parte de INTERMAX o del tercero titular de los derechos afectados. Por lo tanto, el Usuario está prohibido de transmitir, distribuir, reproducir, publicitar bajo cualquier modalidad o en general utilizar los contenidos, marcas, textos e imágenes gráficas.",
              },
              {
                id: 9,
                contenido:
                  "INTERMAX no asume responsabilidad alguna derivada de los contenidos de los enlaces de terceros que se puedan encontrar en el Sitio, ni garantiza la ausencia de virus u otros elementos en los mismos que puedan producir alteraciones o daños en el sistema informático del Usuario (hardware y/o software) o sus archivos o ficheros.",
              },
              {
                id: 10,
                contenido:
                  "INTERMAX, se compromete a mantener la privacidad y la protección de información de sus prospectos de clientes y de sus clientes de conformidad con la Ley N° 29733, Ley de Protección de Datos Personales, modificada por Decreto Legislativo N° 1353 y su Reglamento DS. N° 003-2013-JUS y normas complementarias. EL usuario autoriza, mediante la aceptación automatizada y no automatizada, el tratamiento de los datos personales a fin de ejecutar la relación comercial derivada del Contrato. Los datos personales suministrados a INTERMAX serán almacenados en nuestra base de datos de “Clientes” por tiempo indefinido y serán tratados de acuerdo con lo establecido en la ley y el contrato, principalmente para fines administrativos, promocionales, publicitarios, comerciales, de contacto y otras finalidades comerciales directa o indirectamente relacionadas con la actividad comercial de INTERMAX. En algunos casos, sus datos serán transferidos a empresas del grupo o terceros no vinculados siempre dentro de los fines para los cuales usted autorizó el tratamiento. Como encargado del tratamiento, garantizamos total confidencialidad y seguridad de su información. ",
              },
              {
                  id:11,
                  contenido:"INTERMAX no garantiza la inexistencia de interrupciones o errores en el acceso al Sitio, ni será responsable de los retrasos o fallos que se produjeran en el acceso, funcionamiento y operatividad del Sitio, sus servicios y/o contenidos, así como tampoco de las interrupciones, suspensiones o el mal funcionamiento del mismo, cuando tuvieren su origen en fallas producidas por causas ajenas a su voluntad o fuera de su control o por cualquier otra situación de caso fortuito o fuerza mayor. No obstante, INTERMAX sí declara su voluntad de efectuar los esfuerzos que, dentro de lo razonables, permitan alcanzar su disponibilidad por el mayor tiempo posible."
              },
              {
                  id:12,
                  contenido:"Los sitios Web y referencias están disponibles para que el usuario bajo su responsabilidad los utilice adecuadamente sin aprovecharse de alguna falla que ocurra y saque provecho de la misma. Si encuentra alguna falla en nuestro sitio Web reportarla a info@intermaxtelecom.com"
              }
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h1,
.subtitulos {
  background: linear-gradient(to right, #f74567, #fe653a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.btn {
  width: fit-content;
  margin-top: 0.7rem;
  padding: 0.7rem 1.2rem;
  background: linear-gradient(to right, #f74567, #fe653a);
  border-radius: rem;
  border: none;
  color: white;
  &:hover {
    color: white;
  }
}
.st3 {
  fill: transparent;
}

.st4 {
  fill: #1b2638;
}
</style>
