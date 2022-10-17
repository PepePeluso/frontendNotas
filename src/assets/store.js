import { writable } from "svelte/store"

const estudianteEdit = writable({
    est_cedula: "",
    est_nombres: "",
    est_apellidos: "",
    est_nacimiento: ""
})

export {estudianteEdit}