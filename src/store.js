import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		movies: null,
		selectedMovie: null,
		isLoading: false
	},
	mutations: {
		setLoading: (state, isLoading) => {
			state.isLoading = isLoading;
		},
		setMovies: (state, movies) => {
			state.movies = movies;
		},
		selectMovie: (state, movie) => {
			state.selectedMovie = movie;
			router.push(movie.id);
		}
	},
	actions: {
		loadMovies: (state) => {
			state.commit('setLoading', true);
			api.getMovies().then(response => {
				state.commit('setMovies', response.data);
				state.commit('selectMovie', response.data[0]);
				state.commit('setLoading', false);
			}).catch(error => {
				//TODO: Error handling
			});
		}
	}
});
