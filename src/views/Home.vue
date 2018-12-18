<template>
    <div class="home">
        <div class="col-md-6 col-sm-12 col-xs-12">
            <DetailView v-if="moviesLoaded && !isLoading"></DetailView>

        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <ListView v-if="moviesLoaded && !isLoading"></ListView>
        </div>
        <div class="col-md-12 col-md-12- col-xs-12">
            <LoadingIndicator v-if="isLoading"/>
        </div>
        <b-alert v-if="isError" show variant="danger">Can not get movies - Please try again later.</b-alert>
    </div>
</template>

<script>
	import DetailView from './../components/DetailView';
	import ListView from './../components/ListView';
	import LoadingIndicator from '../components/utilities/LoadingIndicator';

	export default {
		name: 'home',
		props: {
			movieId: String
		},
		components: {
			LoadingIndicator,
			DetailView,
			ListView
		},
		created () {
			this.$store.dispatch('loadMovies').then(response => {
				//TODO
			}).catch(error => {

			});
		},
		data () {
			return {
				movies: [],
				selectedMovie: undefined,
				isError: false
			};
		},
		computed: {
			moviesLoaded: function () {
				return !!this.$store.state.movies;
			},
			isLoading: function () {
				return this.$store.state.isLoading;
			}
		},
		watch: {
			$route (to, from) {
				this.$store.commit('selectMovie', this.$store.state.movies.find(movie => movie.id === to.params.movieId));
			}
		}
	};

</script>
