<template>
    <div class="home">
        <DetailView v-if="moviesLoaded && !isLoading"></DetailView>
        <ListView v-if="moviesLoaded && !isLoading"></ListView>
        <b-alert v-if="isError" show variant="danger">Can not get movies - Please try again later.</b-alert>
    </div>
</template>

<script>
    import store from '../store';

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
			store.dispatch('loadMovies').then(response => {
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
			moviesLoaded: () => {
				return !!store.state.movies;
            },
            isLoading: () => {
				return store.state.isLoading;
            }
        },
		watch: {
			$route (to, from) {
				store.commit('selectMovie', store.state.movies.find(movie => movie.id === to.params.movieId));
			}
		}
	};

</script>
