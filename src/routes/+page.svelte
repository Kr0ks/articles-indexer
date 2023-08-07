<script lang="ts">
  import { Materias } from "$lib/materias";
  import { toUpperCaseFirst } from "$lib/toUpperCaseFirst";
  import Hero from "../components/hero.svelte";
  import Lista from "../components/lista.svelte";

  const materias = Object.entries(Materias).map((v) => {
    return {link: `/materia/${v[0]}`, nome: toUpperCaseFirst(v[0])}
  })

  
</script>
<Hero title={"kroks.space"}/>
<Lista lista={materias}/>