<script>
    import axios from "axios"
    import { navigate } from "svelte-routing"
    import { BASEURLWEB } from "../../assets/ApiRutas"
    //import { SvelteToast ,toast } from "@zerodevx/svelte-toast"
    import { estudianteEdit } from "../../assets/store"

    const formatoFecha = (fecha) => {
        let fechaCortada = fecha.slice(0,10)
        return fechaCortada
    }

    let formEstudiante = {
        cedula: $estudianteEdit.est_cedula,
        nombres: $estudianteEdit.est_nombres,
        apellidos: $estudianteEdit.est_apellidos,
        nacimiento: formatoFecha($estudianteEdit.est_nacimiento)
    }

    const editarEstudiante = async () => {
        console.log(formEstudiante)
        try {
            const response = await axios.put(BASEURLWEB + "/estudiantes",formEstudiante)
            if (response.status == 200) {
                navigate("/estudiantes")
            }
        } catch (er) {
            console.error(er.response)
            window.alert(er.response.data.message)
            //toast.push(er.response.data.message,{theme: {'--toastColor': "red"}})
        }
        
        
    }
</script>

<main>
  <div class="fluid">
    <nav class="padding-titulo">
      <h3>Editar Estudiante</h3>
    </nav>
    <div>
      <div class="field label border">
        <input type="text" id="cedula" bind:value={formEstudiante.cedula} disabled />
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
      <button on:click={editarEstudiante} >Editar Estudiante</button>
    </div>
  </div>
</main>

<style>
    .padding-titulo {
        padding-top: 1%;
        padding-bottom: 2%;
    }
</style>
