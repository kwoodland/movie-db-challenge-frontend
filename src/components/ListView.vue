<template>
    <ul class="thumbnails">
        <li class="thumbnail" v-bind:class="{ highlighted: isHighlighted(movie)}" v-for="movie in movies" @click="onSelect(movie)"><img :src="getImgUrl(movie)"></li>
    </ul>
</template>

<script>
    import store from '../store';

	export default {
		name: "ListView",
        methods: {
			onSelect: (movie) => {
				store.commit('selectMovie', movie);
            },
	        getImgUrl(movie) {
		        return `${location.protocol}//${location.host}/images/${movie.poster}`;
	        },
            isHighlighted(movie) {
				return store.state.selectedMovie ? store.state.selectedMovie.id === movie.id : false;
            }
        },
        computed: {
			movies: () => {
				return store.state.movies;
            }
        }
	};
</script>

<style scoped>
    .thumbnails {
        /*width: 50%;*/
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
        /*height: 163px;*/
        height: auto !important;
    }
</style>