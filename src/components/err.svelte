<script lang="ts">
    import { page } from '$app/stores';

    export let error: ErrorResponse;
</script>

<section class="error--section">
    <h1>{error.code}</h1>
    <h2>{error.message}</h2>

    <a href="/">Página inicial</a>
</section>