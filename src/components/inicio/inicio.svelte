<script>
    import { navigate } from "svelte-routing"

    const navegacionEstudiante = () => {
        navigate("/estudiantes")
    }

    const navegacionNotas = () => {
        navigate("/notas")
    }
</script>

<main>
    <div class="fluid">
        <h2>Ejemplo Notas JavaScript</h2>
        <div class="row">
            <div>
                <button on:click={navegacionEstudiante}>
                    <h3>Estudiantes</h3>
                </button>
            </div>
            <div>
                <button on:click={navegacionNotas}>
                    <h3>Notas</h3>
                </button>
                
            </div>
        </div>
    </div>
</main>

<style>
</style>