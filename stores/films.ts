import { defineStore } from "pinia";
import { useFetchWithHeaders } from "@/composables/useFetchWithHeaders";
import { useUrl } from "vue-useurl";
import { Film } from "../types/Films.interface";

export const useFilmsStore = defineStore("films", {
  state: () => ({
    filmsByGenre:  [],
    currentFilmIndex: null,
  }),

  actions: {
    async getFilmById(id: number) {
      try {
        const { data: film }: {data: Film} = await useFetchWithHeaders(
          `/api/v2.2/films/${id}`
        )
        console.log(film, 'film');
        
        return film;
      } catch (error) {
        //
      }
    },
    // async getTopFilms() {
    //   const { data: topFilms } = await useFetchWithHeaders(
    //     "/api/v2.2/films/top"
    //   );
    // },
    async getFilmImagesById(id: number) {
      try {
        const { data: images } = await useFetchWithHeaders(
          `/api/v2.2/films/${id}/images`
        );
        return images;
      } catch (error) {
        //
      }
    },
    async getFilmsByGenreId(id: number) {
      const { url } = useUrl({
        path: `/api/v2.2/films/`,
        queryParams: {
          countries: 1,
          genres: id,
          order: "NUM_VOTE",
          type: "ALL",
          ratingTo: 9,
          ratingFrom: 6,
          yearFrom: 1000,
          yearTo: 3000,
          page: 1,
        },
      });

      try {
        const {
          data: films,
          // isFetching
        } = await useFetchWithHeaders(url.value);
        this.filmsByGenre = films.value.items;
        return films;
      } catch (error) {
        //
      }
    },
  },
});
