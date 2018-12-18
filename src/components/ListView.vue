<template>
    <ul class="thumbnails">
        <li class="thumbnail" v-bind:class="{ highlighted: isHighlighted(movie)}" v-for="movie in movies" @click="onSelect(movie)">
            <img :src="getImgUrl(movie)">
        </li>
    </ul>
</template>

<script>
	export default {
		name: "ListView",
		methods: {
			onSelect: function (movie) {
				this.$store.commit('selectMovie', movie);
			},
			getImgUrl: function (movie) {
				return `${location.protocol}//${location.host}/images/${movie.poster}`;
			},
			isHighlighted: function (movie) {
				return this.$store.state.selectedMovie ? this.$store.state.selectedMovie.id === movie.id : false;
			}
		},
		computed: {
			movies: function () {
				return this.$store.state.movies;
			}
		}
	};
</script>

<style scoped>
    .thumbnails {
        float: left;
        list-style: none;
        padding: 0 0 0 1em;
        margin: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .thumbnail {
        position: relative;
        float: left;
        width: 18%;
        margin: 0 1% 1em 1%;
        cursor: pointer;
        box-shadow: 0 0 3px 1px rgba(0, 146, 221, 0);
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.2s;
        transition: all 0.2s;
    }

    .highlighted, .thumbnail:hover {
        border-color: #0092dd;
        box-shadow: 0 0 3px 1px #0092dd;
    }

    .thumbnail img {
        height: auto;
    }
</style>