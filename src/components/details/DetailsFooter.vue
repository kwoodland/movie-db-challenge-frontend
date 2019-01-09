<template>
    <p class="source">
        Source: <a :href="sourceUrl" target="_blank">themoviedb.org</a>
    </p>
</template>

<script>
	export default {
		name: "DetailsFooter",
		computed: {
			sourceUrl: function () {
				return this.$store.state.selectedMovie.source;
			}
        }
	};
</script>

<style scoped>
    .info p.source {
        margin-left: 0;
        font-size: 0.8em;
        clear: both;
    }
</style>