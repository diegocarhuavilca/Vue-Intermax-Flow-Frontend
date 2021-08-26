<template>
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
            class="st0"
            d="M-5.24,114.75c393.1-208.54,855.91,98.49,1250.49-98.81v-25.4L-5.24-7.43V114.75z"
        />

        <path
            class="st9"
            d="M-5.24,114.41l-0.14,14.68h1250.04V15.88C850.21,212.59,387.66-94.03-5.24,114.41z"
        />
    </svg>

    <div class="container-fluid d-flex justify-content-center fondo-planes">
        <div class="container-fluid p-0 m-0" style="width:70%">
            <carousel :settings="settings" :breakpoints="breakpoints" id="planes">
                <slide v-for="slide in content" :key="slide">
                    <div class="container" style="width: fit-content">
                        <div class="container-fluid card contenido-slide">
                            <h4>{{ slide.velocidad }}</h4>
                            <h3>{{ slide.precio }}</h3>
                            <h6>SOLES</h6>
                            <p style="text-align: center">{{ slide.descripcion }}</p>
                            <button class="btn hvr-buzz-out card-button">LO QUIERO</button>
                        </div>
                    </div>
                </slide>
                <template #addons>
                    <Navigation />
                </template>
            </carousel>
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
            class="st6"
            d="M-5.24,114.75c393.1-208.54,855.91,98.49,1250.49-98.81v-25.4L-5.24-7.43V114.75z"
        />

        <path
            class="st7"
            d="M-5.24,114.41l-0.14,14.68h1250.04V15.88C850.21,212.59,387.66-94.03-5.24,114.41z"
        />
    </svg>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            snapAlign: "start",
        },

        breakpoints: {
            0:{itemsToShow: 1,
                wrapAround: true,
            },
            900: {
                itemsToShow: 2,
                snapAlign: "start",
                wrapAround: true,
            },
            // 1024 and up
            1400: {
                itemsToShow: 3,
                snapAlign: "start",
            },
        },
    }),
    props: {
        content: Object,
    },

    mounted() {
        var botones = document.querySelectorAll(".card-button");
        const div_contacto = document.getElementById("contacto");
        botones.forEach(function (boton) {
            boton.addEventListener("click", checkIndex);
        });

        function checkIndex() {
            div_contacto.scrollIntoView({
                block: "center",
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.slider {
    width: min-content;
}
.fondo-planes {
    background-image: url("https://res.cloudinary.com/intermax/image/upload/v1622653039/Flow/Planes/MicrosoftTeams-image_40_goqorz.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.contenido-slide {
    background-color: #0b1016;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 0.5rem solid #1c2434;
    border-radius: 2rem;
    padding: 2.5rem;
    color: white;
    align-items: center;
    h4 {
        font-size: 2vw;
        margin-bottom: 1rem;
        font-weight: 700;
        background: linear-gradient(to right, #f74567, #fe653a);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    h3 {
        font-size: 5vw;
    }

    h6 {
        font-size: 1rem;
        margin-top: -1rem;
    }

    p {
        margin-top: 1.5rem;
        color: grey;
        font-weight: 700;
    }

    button {
        width: fit-content;
        margin-top: 0.7rem;
        padding: 0.7rem 1.2rem;
        background: linear-gradient(to right, #f74567, #fe653a);
        border-radius: rem;
        border: none;
        color: white;
    }
}

.st0 {
    fill: #1d293a;
}
.st6 {
    fill: transparent;
}

.st7 {
    fill: #1d293a;
}
.st9 {
    fill: transparent;
}

@media only screen and (max-width: 990px) {
    .contenido-slide {
        h4 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 4rem;
        }

        h6 {
            font-size: 1rem;
        }
        p {
            margin-top: 0rem;
        }
    }
}
</style>
