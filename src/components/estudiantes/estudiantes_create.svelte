<script>
    import axios from "axios"
    import { navigate } from "svelte-routing"
    import { BASEURLWEB } from "../../assets/ApiRutas"
    //import { SvelteToast ,toast } from "@zerodevx/svelte-toast"

    let formEstudiante = {
        cedula: "",
        nombres: "",
        apellidos: "",
        nacimiento: ""
    }

    const crearEstudiante = async () => {
        console.log(formEstudiante)
        try {
            const response = await axios.post(BASEURLWEB + "/estudiantes",formEstudiante)
            if (response.status == 201) {
                navigate("/estudiantes")
            }
        } catch (er) {
            console.error(er.response)
            window.alert(er.response.data.message)
            //toast.push(er.response.data.message,{theme: {'--toastColor': "red"}})
        }
    }

    const soloNumeros = () => {
      return "return (event.charCode >= 48 && event.charCode <= 57)"
    }
</script>

<main>
  <div class="fluid">
    <nav class="padding-titulo">
      <h3>Nuevo Estudiante</h3>
    </nav>
    <div>
      <div class="field label border">
        <input type="text" id="cedula" bind:value={formEstudiante.cedula} 
          onkeypress={soloNumeros()} pattern="[0-9]+" maxlength=10 />
        <label for="cedula">Cedula</label>
      </div>
      <div class="field label border">
        <input type="text" id="nombres" bind:value={formEstudiante.nombres} />
        <label for="nombres">Nombres</label>
      </div>
      <div class="field label border">
        <input type="text" id="apellidos" bind:value={formEstudiante.apellidos} />
        <label for="apellidos">Apellidos</label>
      </div>
      <div class="field label prefix border">
        <i>today</i>
        <input type="date" id="nacimiento" bind:value={formEstudiante.nacimiento} >
        <label class="active" for="nacimiento">Fecha de Nacimiento</label>
      </div>
      <button on:click={crearEstudiante} >Añadir Estudiante</button>
    </div>
  </div>
</main>

<style>
    .padding-titulo {
        padding-top: 1%;
        padding-bottom: 2%;
    }
</style>
