<script>
    import axios from "axios"
    import { onMount } from "svelte"
    import { BASEURLWEB } from "../../assets/ApiRutas"

    let estudiantesData = []
    
    const getEstudiantes = async () => {
        const response = await axios.get(BASEURLWEB + "/estudiantes")
        estudiantesData = response.data
        console.log(response.data)
    }

    onMount(() => {
        getEstudiantes()
    })

    let formNotas = {
        cedula: "",
        nota_deber: 0,
        nota_prueba: 0,
        nota_proyecto: 0
    }

    const crearNotas = () => {
        console.log(formNotas)
    }
</script>

<main>
    <div class="fluid">
        <nav class="padding-titulo">
            <h3>Nuevas Notas</h3>
        </nav>
        <div>
            <div class="field label suffix border round">
                <select id="cedula" bind:value={formNotas.cedula} >
                    {#if estudiantesData.length == 0}
                        <option value="">Cargando</option>
                    {:else}
                        {#each estudiantesData as estudiantes}
                            <option value={estudiantes.est_cedula}>
                                {estudiantes.est_apellidos + " " + estudiantes.est_nombres}
                            </option>
                        {/each}
                    {/if}
                </select>
                <label class="active" for="cedula" >Estudiante</label>
                <i>arrow_drop_down</i>
            </div>
            <div class="field label border">
                <input type="number" id="pruebas" bind:value={formNotas.nota_prueba} />
                <label for="pruebas">Pruebas</label>
            </div>
            <button on:click={crearNotas} >Añadir Notas</button>
        </div>
    </div>
</main>

<style>

</style>