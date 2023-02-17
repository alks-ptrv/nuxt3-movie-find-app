import { defineStore } from "pinia";

export const useGenresStore = defineStore("genres", {
  state: () => ({
    genres: [
      {
        genreId: 1,
        image: "joker.jpg",
        genreName: "Thriller",
        additionalImgStyle: "object-position: 25%;",
        filmId: 1048334,
      },
      {
        genreId: 2,
        image: "onceUponATimeIn...Hollywood.jpg",
        genreName: "Drama",
        additionalImgStyle: "object-position: 68%;",
        filmId: 1047883,
      },
      {
        genreId: 3,
        image: "pulpFiction.jpg",
        genreName: "Crime",
        additionalImgStyle: "object-position: 35%;",
        filmId: 342,
      },
      {
        genreId: 4,
        image: "titantic.jpg",
        genreName: "Melodrama",
        additionalStyle: "object-position: 47%;",
        filmId: 2213,
      },
      {
        genreId: 5,
        image: "sherlock.jpg",
        genreName: "Detective",
        additionalImgStyle: "object-position: 47%;",
        additionalContainerStyle: "",
        filmId: 502838,
      },
      {
        genreId: 6,
        image: "interstellar.jpg",
        genreName: "Fantasy",
        additionalImgStyle: "object-position: 50%;",
        filmId: 258687,
      },
      {
        genreId: 7,
        image: "theRevenant.png",
        genreName: "Adventure",
        additionalImgStyle: "object-position: 82%;",
        filmId: 522941,
      },
      {
        genreId: 8,
        image: "greenBook.jpg",
        genreName: "Biography",
        additionalImgStyle: "object-position: 32%;",
        filmId: 1108577,
      },
    ],
    currentGenreId: -1,
  }),
});
