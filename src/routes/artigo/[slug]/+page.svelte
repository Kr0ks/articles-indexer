<script lang="ts">
    import { Materias } from "$lib/materias";
    import { parse } from "svelte/compiler";
    import Lista from "../../../components/lista.svelte";
    import { Separator } from "$lib/separator";
  import Hero from "../../../components/hero.svelte";
      export let data:import("./$types").PageData ;
    
      const links = Materias[data.materia][data.titulo]

  </script>
  
  <Hero title={data.titulo[0].toUpperCase() + data.titulo.substring(1)}/>
  <Lista lista={links}/>
  
  