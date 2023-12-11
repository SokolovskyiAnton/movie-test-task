<template>
  <div class="mt-12 px-2">
    <div class="flex justify-between text-white">
      <div>
        <h4 class="text-2xl font-bold">
          {{ movie.Title }}
        </h4>
        <div class="flex mt-2">
        <span class="text-gray-500">
          {{ movie.Year }} - {{ movie.Runtime }}
        </span>
        </div>
      </div>
      <div class>
        <div class="flex items-center">
          <el-icon color="gold"><Star /></el-icon>
          <span class="ml-2">
          {{ movie.imdbRating }}
        </span>
        </div>
        <div class="mt-2">
        <span class="text-gray-500">
          {{ movie.BoxOffice }}
        </span>
        </div>
      </div>
    </div>
    <div class="h-96 mt-8">
      <img class="h-full" :src="movie.Poster">
    </div>
    <div class="mt-2">
      <el-tag
          class="ml-2"
          type="info"
          v-for="item in movie.Genre.split(',')"
          :key="item"
      >
        {{ item }}
      </el-tag>
    </div>
    <div class="mt-8 text-white">
      {{ movie.Plot }}
    </div>
    <div class="mt-2 text-white text-sm">
      Director: {{ movie.Director }}
    </div>
    <div class="mt-2 text-white text-sm">
      Stars: {{ movie.Actors }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "~/dto/movie.dto";
import { Star } from "@element-plus/icons-vue";

defineProps<{
  movie: Movie
}>()
</script>

<style scoped>

</style>