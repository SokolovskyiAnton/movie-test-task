<template>
  <div class="pt-12">
    <el-carousel
        height="500px"
        :autoplay="false"
        :loop="false"
        indicator-position="outside"
    >
      <el-carousel-item
          class="cursor-pointer"
          v-for="item in movies"
          :key="item.imdbID"
          @click="handleClick(item.imdbID)"
      >
        <div class="text-white"
        >
          <h3 class="text-2xl text-center" text="2xl">
            <span>
              {{ item.Title }}
            </span>
            -
            <span>
              {{ item.Year }}
            </span>
          </h3>
          <div class="flex justify-center">
            <img :src="item.Poster" height="100%">
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMovieStore } from "~/stores/movieStore";
import type { Movie } from "~/dto/movie.dto";

const movieStore = useMovieStore()

const movies = computed(() => movieStore.getMovies as Array<Movie>)

function handleClick(movieId: string) {
  navigateTo(`/results/${movieId}`)
}
</script>

<style scoped>

</style>