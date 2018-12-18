<template>
    <div>
        <h3 class="title">{{movie.title}}
            <small> ({{movie.year}})</small>
        </h3>
        <h4 class="tagline">{{movie.tagline}}</h4>
        <img :src="getImgUrl">
        <p class="synopsis">
            {{movie.synopsis}}
        </p>
    </div>
</template>

<script>
	export default {
		name: "DetailsBody",
        computed: {
			movie: function () {
                return this.$store.state.selectedMovie;
			},
	        getImgUrl: function () {
		        return `${location.protocol}//${location.host}/images/${this.$store.state.selectedMovie.poster}`;
	        }
        }
	};
</script>

<style scoped>
    .info {
        position: relative;
        float: left;
        line-height: 1.5;
        margin: 0 0 2em 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .info img {
        float: left;
        width: 10em;
        margin: 0 1em 1em 0;
    }

    .info .synopsis {
        margin-left: 11em;
    }

    @media (max-width: 575.98px) {
        .info .synopsis {
            margin-left: 0 !important;
        }
    }
</style>