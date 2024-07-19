import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";

export const useSlideMovieStore = defineStore("ovieStore", {
  state: () => ({
    movies: {},
    apiUrls: {
      movies: "https://apii.online/apii/danh-sach/phim-moi-cap-nhat?page=1",
      singleMovies: "https://apii.online/apii/danh-sach?type=single&page=1",
      seriesMovies: "https://apii.online/apii/danh-sach?type=series&page=1",
      animes: "https://apii.online/apii/danh-sach?type=hoathinh&page=1",
      tvShows: "https://apii.online/apii/danh-sach?type=tvshows&page=1",
    },
  }),
  actions: {
    async getMovies(key) {
      try {
        const { data } = await axios.get(this.apiUrls[key]);
        this.movies[key] = data.items.slice(0, 5);
      } catch {
        toast.error("Slide is currently unavailable!");
      }
    },
  },
});