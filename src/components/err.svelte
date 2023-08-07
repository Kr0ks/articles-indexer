<script lang="ts">
    import { page } from '$app/stores';
    import type error from "../app.d.ts"
    export let error: App.Error;
</script>

<section class="error--section">
    <h1>{error.code}</h1>
    <h2>{error.message}</h2>

    <a href="/">Página inicial</a>
</section>