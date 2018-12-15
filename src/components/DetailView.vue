<template>
    <div class="info">
        <div class="credits">
            <div class="actor">
                <i class="glyphicon glyphicon-user"></i>
                <span>{{selectedMovie.actor}}</span>
                <div class="popover-wrapper">
                    <div class="popover bottom">
                        <div class="arrow"></div>
                        <h3 class="popover-title">More Movies with {{selectedMovie.actor}}</h3>
                        <div class="popover-content">
                            <p v-for="movie in getMoviesWithActor" v-html="movie"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="director">
                <i class="glyphicon glyphicon-film"></i>
                <span>{{selectedMovie.director}}</span>
                <div class="popover-wrapper">
                    <div class="popover bottom">
                        <div class="arrow"></div>
                        <h3 class="popover-title">Movies directed by {{selectedMovie.director}}</h3>
                        <div class="popover-content">
                            <p v-for="movie in getMoviesWithDirector" v-html="movie"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="title">{{selectedMovie.title}}<small> ({{selectedMovie.year}})</small></h3>
        <h4 class="tagline">{{selectedMovie.tagline}}</h4>
        <img :src="getImgUrl">
        <p class="synopsis">
            {{selectedMovie.synopsis}}
        </p>
        <p class="source">
            Source: <a :href="getSourceUrl" target="_blank">themoviedb.org</a>
        </p>
    </div>
</template>

<script>
	export default {
		name: "DetailView",
        props: {
			selectedMovie: Object,
            movies: Array
        },
        computed: {
			getImgUrl() {
				return `${location.protocol}//${location.host}/images/${this.selectedMovie.poster}`;
            },
	        getSourceUrl() {
				return this.selectedMovie.source;
            },
	        getMoviesWithActor() {
		        return this.movies.filter(movie => movie.actor === this.selectedMovie.actor).map(movie => {
			        return `<span>${movie.title}</span>`;
		        });
            },
            getMoviesWithDirector() {
	        	return this.movies.filter(movie => movie.director === this.selectedMovie.director).map(movie => {
	        		return `<span>${movie.title}</span>`
                });
            }
        }
	};
</script>

<style scoped>
    .info {
        position: relative;
        width: 50%;
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

    .info p.source {
        margin-left: 0;
        font-size: 0.8em;
        clear: both;
    }


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