<template>
  <div>
    <div class="first-section" ref="firstSection">
      <Logo to="/" />
      <div class="film">
        <img
          :src="
            currentFilm.image
              ? require(`~/assets/img/${
                  currentFilm.image || filmData.coverUrl
                }`)
              : filmData.coverUrl || filmData.posterUrl
          "
        />
        <div
          class="film__name"
          v-text="currentFilm.nameOriginal || currentFilm.nameRu"
        />
        <nuxt-link class="film__link" :href="currentFilm.webUrl">
          <span class="text" v-text="'Watch'" />
          <div class="circle"></div>
        </nuxt-link>
        <nuxt-link class="film__add">
          <span class="text" v-text="'Add to My list'" />
          <div class="circle"></div>
        </nuxt-link>
        <nuxt-link class="film__see-genre-films" @click="checkAnotherFilm()">
          <span class="text" v-text="'NEXT FILM'" />
        </nuxt-link>
      </div>

      <div
        v-if="currentFilm.description || firstSixImages.length > 0"
        class="link-to-next-page"
        @click="scrollIntoSection(2)"
        v-text="'Movie Description'"
      />
    </div>

    <div
      v-if="currentFilm.description || firstSixImages.length > 0"
      class="third-section"
      ref="secondSection"
    >
      <div class="gallery">
        <div class="gallery__description">
          <div v-text="currentFilm.description || 'Нет описания'" />
        </div>
        <div class="gallery__slogan">
          <div v-text="currentFilm.slogan" />
        </div>

        <div v-if="firstSixImages.length === 6" class="gallery__images">
          <div class="gallery__image">
            <img :src="firstSixImages[0].previewUrl" alt="" />
          </div>
          <div class="gallery__image">
            <img :src="firstSixImages[1].previewUrl" alt="" />
          </div>

          <div class="gallery__image">
            <img :src="firstSixImages[2].imageUrl" alt="" />
          </div>

          <div class="gallery__image">
            <img :src="firstSixImages[3].previewUrl" alt="" />
          </div>

          <div class="gallery__image">
            <img :src="firstSixImages[4].imageUrl" alt="" />
          </div>

          <div class="gallery__image">
            <img :src="firstSixImages[5].previewUrl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
import { useFilmsStore } from "~/stores/films";
import { useGenresStore } from "~/stores/genres";
import debounce from "lodash.debounce";
const genresStore = useGenresStore();
const filmsStore = useFilmsStore();
const router = useRouter();

const filmData = await filmsStore.getFilmById(route.params.id);
const filmImages = await filmsStore.getFilmImagesById(route.params.id);

const currentFilm = computed(() => {
  const customFilmData = genresStore.genres.find(
    (genre) => genre.filmId === Number(route.params.id)
  );
  return { ...filmData.value, ...customFilmData };
});

if (!filmsStore.filmsByGenre.length) {
  await filmsStore.getFilmsByGenreId(currentFilm.value.genreId || 6);
  genresStore.currentGenreId = currentFilm.value.genreId;
}

const firstSixImages = computed(() => {
  return filmImages.value.items.slice(0, 6);
});

const firstSection = ref(null);
const secondSection = ref(null);
const sections = [firstSection, secondSection];

const scrollIntoSection = (sectionNumber) => {
  sections[sectionNumber - 1].value.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
};

const checkAnotherFilm = () => {
  if (filmsStore.currentFilmIndex >= 19) filmsStore.currentFilmIndex = -1;
  filmsStore.currentFilmIndex += 1;
  const nextFilm = filmsStore.filmsByGenre[filmsStore.currentFilmIndex];
  router.push(`/film/${nextFilm.kinopoiskId}/`);
};

// const handleDebouncedScroll = debounce(scrollIntoSection, 400);
// window.addEventListener("scroll", handleDebouncedScroll);

// onUnmounted(() => window.removeEventListener("scroll", handleDebouncedScroll));
</script>

<style lang="scss" scoped>
.first-section,
.second-section,
.third-section {
  height: 100vh;
}

.link-to-next-page {
  position: absolute;
  bottom: 3%;
  left: 50%;
  color: white;
  animation: blink 2s infinite;
  transform: translateX(-50%);
  &:after {
    content: "";
    position: absolute;
    top: 110%;
    right: 50%;
    transform: translateX(50%);
    border-left: 7.5px solid transparent;
    border-top: 5px solid white;
    border-right: 7px solid transparent;
  }
  &:hover {
    cursor: pointer;
  }
}

.film {
  margin-left: 16%;
  margin-top: 7.5vh;
  padding-right: 4%;
  height: 60vh;
  position: relative;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: 1s ease-out 0s 1 widthIncrease;
  }
  &__name {
    color: white;
    position: absolute;
    top: 25%;
    left: 12%;
    font-size: 3em;
    text-shadow: 1px 1px 2px black;
    max-width: 50%;
  }
  &__slogan {
    color: #f2a384;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.2em;
    font-style: italic;
    transform: translate(-50%, -50%);
    text-shadow: 1px 1px 1px black;
  }
  &__link {
    min-width: 176px;
    display: flex;
    position: absolute;
    align-items: center;
    top: 85%;
    left: 20%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.4s;
    text-shadow: 1px 1px 1px black;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
    .text {
      color: white;
      font-size: 1.8em;
      text-decoration: underline;
    }
    .circle {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1.5px solid white;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 42px;
        transform: translateY(-50%);
        border-left: 7.5px solid white;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
    }
  }
  &__add {
    min-width: 176px;
    display: flex;
    position: absolute;
    align-items: center;
    top: 85%;
    left: 80%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.4s;
    text-shadow: 1px 1px 1px black;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
    .text {
      color: white;
      font-size: 1em;
      text-decoration: underline;
    }
    .circle {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1.5px solid white;
      &::before {
        content: "+";
        position: absolute;
        height: 57px;
        width: 57px;
        font-size: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
    }
  }
  &__see-genre-films {
    min-width: 176px;
    display: flex;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 83%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.4s;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
    .text {
      color: white;
      opacity: 0.85;
      font-size: 1em;
      text-shadow: 1px 1px 1px black;
      // text-decoration: underline;
    }
  }
}

.descrition {
  margin: 0 16%;
  color: white;
  font-size: 1em;
  padding: 25vh 2%;
  opacity: 0.9;
  &__slogan {
    text-align: center;
    margin-bottom: 2vh;
  }
}

.gallery {
  &__text {
    position: absolute;
    left: 50%;
    margin-top: 50vh;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2.5em;
    z-index: 5;
  }
  &__description,
  &__slogan {
    position: absolute;
    color: white;
    font-size: 1em;
    z-index: 5;
    text-shadow: 1px 1px 2px black;
    font-style: italic;
    text-indent: 20px;
    line-height: 1.4;
  }
  &__description {
    width: 30vw;
    left: 18%;
    margin-top: 24vh;
  }
  &__slogan {
    width: 30vw;
    left: 56%;
    margin-top: 54vh;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__image {
    position: absolute;
    z-index: 1;
    &:nth-child(1) {
      height: 150px;
      left: 0%;
      margin-top: 10vh;
    }
    &:nth-child(2) {
      height: 200px;
      left: 12%;
      margin-top: 70vh;
      z-index: 2;
    }
    &:nth-child(3) {
      height: 300px;
      left: 20%;
      margin-top: 45vh;
    }
    &:nth-child(4) {
      height: 200px;
      left: 50%;
      margin-top: 70vh;
    }
    &:nth-child(5) {
      height: 300px;
      right: 16%;
      margin-top: 20vh;
    }
    &:nth-child(6) {
      height: 150px;
      right: 0%;
      margin-top: 60vh;
    }
  }
}

@keyframes widthIncrease {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
