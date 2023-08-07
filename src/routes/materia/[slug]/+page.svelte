<script lang="ts">
  import { Materias } from "$lib/materias";
  import { parse } from "svelte/compiler";
  import Lista from "../../../components/lista.svelte";
  import { Separator } from "$lib/separator";
  import Hero from "../../../components/hero.svelte";
  import { toUpperCaseFirst } from "$lib/toUpperCaseFirst";
  import Head from "../../../components/head.svelte";
    export let data:import("./$types").PageData ;

    const materia = data.slug

    const artigos = Materias[materia]

    const parsed = Object.entries(artigos).map((v) => {
      return {link: `/artigo/${materia}${Separator}${v[0]}`, nome: v[0]}
    })

    console.log(parsed)
</script>

<Head title="Kroks | Artigos | {toUpperCaseFirst(materia)}" description="Navegue por artigos sobre {materia}"/>
<Hero title={toUpperCaseFirst(materia)}/>
<Lista lista={parsed}/>

