<script>
  import { Router, Route, navigate } from "svelte-routing"
  import EstudiantesCreate from "./components/estudiantes/estudiantes_create.svelte";
  import EstudiantesEdit from "./components/estudiantes/estudiantes_edit.svelte";
  import EstudiantesVista from "./components/estudiantes/estudiantes_vista.svelte";
  import Inicio from "./components/inicio/inicio.svelte";
  import NotasCreate from "./components/notas/notas_create.svelte";
  import NotasVista from "./components/notas/notas_vista.svelte";

</script>

<main>
  <Router>
    <Route exact path="/notas"><NotasVista /></Route>
    <Route exact path="/notas/new"><NotasCreate /></Route>
    <Route exact path="/estudiantes"><EstudiantesVista /></Route>
    <Route exact path="/estudiantes/new"><EstudiantesCreate /></Route>
    <Route exact path="/estudiantes/edit"><EstudiantesEdit /></Route>
    <Route exact path="/"><Inicio /></Route>
  </Router>
</main>

<style>
</style>
