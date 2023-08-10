<script lang="ts">
    import { Materias } from "$lib/materias";
    import { parse } from "svelte/compiler";
    import Lista from "../../../components/lista.svelte";
    import { Separator } from "$lib/separator";
    import Hero from "../../../components/hero.svelte";
    import Head from "../../../components/head.svelte";
    import { toUpperCaseFirst } from "$lib/toUpperCaseFirst";
      export let data:import("./$types").PageData ;
    

  </script>
  
  <Head title={`Kroks | Artigo | ${toUpperCaseFirst(data.titulo)}`} description={`Navegue por artigos sobre ${data.titulo}`}/>
  <Hero title={toUpperCaseFirst(data.titulo)}/>
  <Lista lista={data.links}/>
  
  