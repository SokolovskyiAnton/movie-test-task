import { defineStore } from 'pinia'
import type {IResponse, Movie} from "~/dto/movie.dto";
interface State {
  movies: Array<Movie>,
  movie: Movie | null
}
export const useMovieStore = defineStore('movieStore', {
  state: (): State => {
    return {
      movies: [],
      movie: null
    }
  },
  actions: {
    /**
     * Looking for movies matching the title.
     *
     * @param title - name of results
     */
    async getMoviesList(title: string) {
      try {
        const { $api } = useNuxtApp()

        const data = await $api.request('/', {
          params: {
            s: title
          }
        }) as IResponse<Array<Movie>>

        if (data.Response === 'False') {
          await Promise.reject({
            message: data.Error
          })
        }
        if (data.Response === 'True') {
          this.movies = data.Search
          navigateTo('/results')
        }
      } catch (e) {
        throw e
      }
    },
    /**
     * Requesting more detailed information about the results.
     *
     * @param id - film's id in IMDb
     */
    async getMovieByID(id: string) {
      try {
        const { $api } = useNuxtApp()

        const data = await $api.request('/', {
          params: {
            i: id
          }
        }) as Movie

        if (data.Response === 'True') {
          this.movie = data
        }
      } catch (e) {
        throw e
      }
    },

    clearMovie() {
      this.movie = null
    }
  },
  getters: {
    getMovies: ({ movies }) => movies,
    getMovie: ({ movie }) => movie
  }
})