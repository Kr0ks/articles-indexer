<script>
    export let title = ""
    export let description = ""
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="theme-color" content="#fff"/>
    <meta name="description" content={description}/>
    <meta property="og:title" content={title}/>

</svelte:head>