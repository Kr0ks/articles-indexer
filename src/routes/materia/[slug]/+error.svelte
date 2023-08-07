<script lang="ts">
    import { page } from '$app/stores';
    import Err from '../../../components/err.svelte';

    const error = $page.error as ErrorResponse
</script>

<Err {error}/>