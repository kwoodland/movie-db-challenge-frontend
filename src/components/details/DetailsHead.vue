<template>
    <div class="credits">
        <div class="actor">
            <i class="glyphicon glyphicon-user"></i>
            <span>{{movie.actor}}</span>
            <div class="popover-wrapper">
                <div class="popover bottom">
                    <div class="arrow"></div>
                    <h3 class="popover-title">More Movies with {{movie.actor}}</h3>
                    <div class="popover-content">
                        <p v-for="movie in getMoviesWithActor" v-html="movie"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="director">
            <i class="glyphicon glyphicon-film"></i>
            <span>{{movie.director}}</span>
            <div class="popover-wrapper">
                <div class="popover bottom">
                    <div class="arrow"></div>
                    <h3 class="popover-title">Movies directed by {{movie.director}}</h3>
                    <div class="popover-content">
                        <p v-for="movie in getMoviesWithDirector" v-html="movie"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "DetailsHead",
        computed: {
	        movie: function () {
		        return this.$store.state.selectedMovie;
	        },
	        getMoviesWithActor: function () {
		        return this.$store.state.movies.filter(movie => movie.actor === this.$store.state.selectedMovie.actor).map(movie => {
			        return `<span>${this.movie.title}</span>`;
		        });
	        },
	        getMoviesWithDirector: function () {
		        return this.$store.state.movies.filter(movie => movie.director === this.$store.state.selectedMovie.director).map(movie => {
			        return `<span>${this.movie.title}</span>`
		        });
	        }
        }
	};
</script>

<style scoped>
    .credits {
        position: relative;
        margin: 0 0 0.5em 0;
    }

    .credits:before, .credits:after {
        content: ' ';
        display: table;
    }

    .credits:after {
        clear: both;
    }

    .actor, .director {
        position: relative;
        width: 50%;
        float: left;
        display: block;
        padding: 0.8em 0.5em 0.5em 0.5em;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1;
    }

    .actor span, .director span {
        font-size: 1.2em;
        color: #0092dd;
        padding: 0 0 0 .5em;
        line-height: 1;
    }

    .actor .glyphicon, .director .glyphicon {
        color: #0092dd;
    }

    .actor .popover-wrapper,
    .director .popover-wrapper {
        top: 2.3em;
        left: -3em;
        display: none;
        position: absolute;
    }

    .actor:hover .popover-wrapper,
    .director:hover .popover-wrapper {
        display: block
    }

    .actor .popover,
    .director .popover {
        position: relative;
        display: block;
    }
</style>