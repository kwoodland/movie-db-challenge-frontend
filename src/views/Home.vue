<template>
    <div class="home">
        <DetailView v-if="selectedMovie" :movies="movies" :selectedMovie="selectedMovie"></DetailView>
        <ListView v-if="movies.length" :movies="movies" :onSelect="onMovieSelected" :selectedMovie="selectedMovie"></ListView>
        <b-alert v-if="isError" show variant="danger">Can not get movies - Please try again later.</b-alert>
    </div>
</template>

<script>
	import Api from './../Api';
	import DetailView from './../components/DetailView';
	import ListView from './../components/ListView';

	export default {
		name: 'home',
		props: {
			movieId: String
		},
		components: {
			DetailView,
			ListView
		},
		created () {
			(new Api()).get().then(response => {
				this.movies = response.data;
				if (this.movieId) {
					this.selectedMovie = this.movies.find(movie => movie.id === this.movieId);
				} else {
					this.selectedMovie = this.movies[0];
				}
			}).catch(error => {
				this.isError = true;
			});
		},
		data () {
			return {
				movies: [],
				selectedMovie: undefined,
                isError: false
			};
		},
		methods: {
			onMovieSelected: function (movie) {
				this.$router.push(movie.id);
				this.selectedMovie = movie;
			}
		},
		watch: {
			$route (to, from) {
				this.selectedMovie = this.movies.find(movie => movie.id === to.params.movieId);
			}
		}
	};

</script>
