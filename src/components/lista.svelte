<script lang="ts">
    export let lista: Array<{link: string, nome: string}>
</script>


    <section class="lista-artigos--wrapper">
  
        {#each lista as item }
        <a class="lista-artigos--btn" href={item.link}>{item.nome}</a>
        {/each}
        
        </section>
        