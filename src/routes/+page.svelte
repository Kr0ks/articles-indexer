<script lang="ts">
  import { Materias } from "$lib/materias";
  import { toUpperCaseFirst } from "$lib/toUpperCaseFirst";
  import Head from "../components/head.svelte";
  import Hero from "../components/hero.svelte";
  import Lista from "../components/lista.svelte";

  const materias = Object.entries(Materias).map((v) => {
    return {link: `/materia/${v[0]}`, nome: toUpperCaseFirst(v[0])}
  })

  
</script>
<Head title="Kroks | Artigos" description="Navegue sobre vários artigos escolares de forma gratuita e confiável."/>
<Hero title={"kroks.cloud"}/>
<Lista lista={materias}/>