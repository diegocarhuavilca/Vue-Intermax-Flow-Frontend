<template>
    <form v-on:submit.prevent="submitForm" v-if="!enviado">
        <div class="mb-3">
            <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Nombre"
                v-model="nombre"
                required
            />
        </div>
        <div class="mb-3">
            <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="E-mail"
                v-model="email"
                required
            />
        </div>
        <div class="mb-3">
            <input
                type="number"
                class="form-control"
                id="phone"
                placeholder="Telefono"
                v-model="telefono"
                required
            />
        </div>
        <div class="mb-3">
            <select
                class="form-select"
                aria-label="Default select example"
                id="distrito"
                v-model="distrito"
                required
            >
                <option value disabled selected>Selecciona tu distrito</option>
                <option value="ANCON">ANCON</option>
                <option value="ATE">ATE</option>
                <option value="BARRANCO">BARRANCO</option>
                <option value="BRENA">BRENA</option>
                <option value="CALLAO">CALLAO</option>
                <option value="CARABAYLLO">CARABAYLLO</option>
                <option value="CHACLACAYO">CHACLACAYO</option>
                <option value="CHORRILLOS">CHORRILLOS</option>
                <option value="CIENEGUILLA">CIENEGUILLA</option>
                <option value="COMAS">COMAS</option>
                <option value="AGUSTINO">EL AGUSTINO</option>
                <option value="INDEPENDENCIA">INDEPENDENCIA</option>
                <option value="JESUS MARIA">JESUS MARIA</option>
                <option value="LA MOLINA">LA MOLINA</option>
                <option value="LA VICTORIA">LA VICTORIA</option>
                <option value="LIMA">LIMA</option>
                <option value="LINCE">LINCE</option>
                <option value="LOS OLIVOS">LOS OLIVOS</option>
                <option value="LURIGANCHO">LURIGANCHO</option>
                <option value="LURIN">LURIN</option>
                <option value="MAGDALENA DEL MAR">MAGDALENA DEL MAR</option>
                <option value="MIRAFLORES">MIRAFLORES</option>
                <option value="PACHACAMAC">PACHACAMAC</option>
                <option value="PUCUSANA">PUCUSANA</option>
                <option value="PUEBLO LIBRE">PUEBLO LIBRE</option>
                <option value="PUENTE PIEDRA">PUENTE PIEDRA</option>
                <option value="PUNTA HERMOSA">PUNTA HERMOSA</option>
                <option value="PUNTA NEGRA">PUNTA NEGRA</option>
                <option value="RIMAC">RIMAC</option>
                <option value="SAN BARTOLO">SAN BARTOLO</option>
                <option value="SAN BORJA">SAN BORJA</option>
                <option value="SAN ISIDRO">SAN ISIDRO</option>
                <option value="SAN JUAN DE LURIGANCHO">SAN JUAN DE LURIGANCHO</option>
                <option value="SAN JUAN DE MIRAFLORES">SAN JUAN DE MIRAFLORES</option>
                <option value="SAN LUIS">SAN LUIS</option>
                <option value="SAN MARTIN DE PORRES">SAN MARTIN DE PORRES</option>
                <option value="SAN MIGUEL">SAN MIGUEL</option>
                <option value="SANTA ANITA">SANTA ANITA</option>
                <option value="SANTA MARIA DEL MAR">SANTA MARIA DEL MAR</option>
                <option value="SANTA ROSA">SANTA ROSA</option>
                <option value="SANTIAGO DE SURCO">SANTIAGO DE SURCO</option>
                <option value="SURQUILLO">SURQUILLO</option>
                <option value="VILLA EL SALVADOR">VILLA EL SALVADOR</option>
                <option value="VILLA MARIA DEL TRIUNFO">VILLA MARIA DEL TRIUNFO</option>
            </select>
        </div>
        <div class="mb-3">
            <select
                class="form-select"
                aria-label="Default select example"
                id="opcion-plan"
                v-model="plan"
                required
            >
                <option value disabled selected>Selecciona tu Plan</option>
                <option value="50">Fibra 50 Mb</option>
                <option value="100">Fibra 100 Mb</option>
                <option value="150">Fibra 150 Mb</option>
            </select>
        </div>

        <input type="submit" value="Enviar" class="btn hvr-grow" />
    </form>
    <div class="container p-0 m-0" style="color:white" v-if="enviado">
        <h1>Gracias</h1>
        <h2>Te contactaremos pronto</h2>
    </div>
</template>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
label {
    color: white;
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
</style>

<script>
import axios from "axios";
export default {
    data() {
        return {
            nombre: "",
            email: "",
            telefono: "",
            distrito: "",
            plan: "",
            enviado: false,
        };
    },
    methods: {
        submitForm() {
            var data = {
                nombre: this.nombre,
                email: this.email,
                telefono: this.telefono.toString(),
                distrito: this.distrito,
                plan: this.plan,
            };

            axios
                .post("https://www2.flow.pe/contactos", data)
                .then(() => {
                    this.enviado = true;
                    (this.nombre = ""),
                        (this.email = ""),
                        (this.telefono = ""),
                        (this.distrito = ""),
                        (this.plan = " ");
                })
                .catch((error) => {
                    alert(error);
                });
        },
    },
};
</script>
