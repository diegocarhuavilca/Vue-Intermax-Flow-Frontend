<template>
    <nav
        class="navbar header navbar-expand-lg navbar-dark p-5 sticky-top"
        aria-label="Eighth navbar example"
    >
        <div class="container">
            <a class="navbar-brand" href="/">
                <img
                    src="https://res.cloudinary.com/intermax/image/upload/v1621264964/Flow/Brande/Logo_w2mccx.svg"
                    alt
                    width="100"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample07"
                aria-controls="navbarsExample07"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item hvr-float-shadow">
                        <a
                            class="nav-link"
                            href="https://www.facebook.com/flow.fibra"
                            target="_blank"
                        >
                            <i class="fab fa-facebook-square fa-2x" style="color:white"></i>
                        </a>
                    </li>
                    <li class="nav-item hvr-float-shadow">
                        <a
                            class="nav-link"
                            href="https://www.instagram.com/fibra.flow/"
                            target="_blank"
                        >
                            <i class="fab fa-instagram fa-2x" style="color:white"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup() {},
    mounted() {
        const div_plan = document.getElementById("planes");
        const div_contacto = document.getElementById("contacto");
        const div_cobertura = document.getElementById("cobertura");

        document.getElementById("plan_nav").addEventListener("click", () => {
            div_plan.scrollIntoView({
                block: "center",
            });
        });

        document
            .getElementById("contacto_nav")
            .addEventListener("click", () => {
                div_contacto.scrollIntoView({
                    block: "center",
                });
            });

        document
            .getElementById("cobertura_nav")
            .addEventListener("click", () => {
                div_cobertura.scrollIntoView({
                    block: "center",
                });
            });
    },
    methods: {},
});
</script>

<style lang="scss" scoped>
.header {
    background-image: linear-gradient(
        to right,
        rgba(11, 16, 22, 0.8),
        rgba(29, 41, 58, 0.8)
    );
}

.item {
    font-size: 1.2rem;
    display: inline-block;
    width: fit-content;

    a {
        transition: 0.3s ease-in-out;
    }
    &:hover {
        a {
            color: #f74567 !important;
        }
    }
}
</style>
