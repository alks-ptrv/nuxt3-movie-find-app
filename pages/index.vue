<template>
  <div class="home-page">
    <Logo />
    <div class="home-page__top-films">
      <div
        v-for="item in genres.genres"
        :key="item.genreId"
        :style="item.additionalContainerClass"
        @click="openGenre(item.genreId, item.filmId)"
        :class="{
          'film-preview': !item.isSelected,
          'film-preview--active': item.isSelected,
        }"
      >
        <img
          :src="require(`~/assets/img/${item.image}`)"
          :style="item.additionalImgStyle"
        />
        <div v-text="item.genreName" />
      </div>
    </div>

    <!-- <NuxtLink to="/about"> About page </NuxtLink> -->
  </div>
</template>
<script setup>
import { useGenresStore } from "~/stores/genres";
const genres = useGenresStore();
const router = useRouter();

const openGenre = (genreId, filmId) => {
  if (!filmId) return;
  router.push(`/film/${filmId}/`);
};
</script>

<style lang="scss">
@import "@/assets/css/base/_colors.scss";

.home-page {
  &__top-films {
    margin-left: 16%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 1.25%;
    margin-top: 3vh;
    height: 65vh;
    width: 81.5%;
    transition: width 0.8s;
    .film-preview {
      height: 50vh;
      width: 10.8%;
      z-index: 2;
      position: relative;
      text-align: center;
      transition: width 0.8s 0.15s;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
        transition: opacity 0.8s;
        animation: 1s ease-out 0s 1 heightIncrease;
      }
      div {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.2em;
        animation: 2s ease-out 0s 1 appearance;
      }
      &:nth-child(2n) {
        align-self: center;
      }
      &:nth-child(3n) {
        align-self: end;
      }
      &:hover {
        width: 15%;
        cursor: pointer;
        img {
          opacity: 1;
        }
      }
    }
    .film-preview--active {
      height: 60vh;
      width: 100%;
      transition: all 0.8s;
      opacity: 1;
      z-index: 10;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.8s;
      }
    }
  }
}

@keyframes appearance {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes heightIncrease {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
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
</style>
