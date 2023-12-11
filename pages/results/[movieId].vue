<template>
  <MovieDetailsComponent
    v-if="movie"
    :movie="movie"
  />
  <div
    v-else-if="isLoading"
    class="text-white font-bold text-center mt-8"
  >
    Loading...
  </div>
  <div
    v-else
    class="text-white font-bold text-center mt-8"
  >
    Movie not found
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, computed, onBeforeUnmount, ref } from "vue";
import { useMovieStore } from "~/stores/movieStore";
import type { Movie } from "~/dto/movie.dto";
import MovieDetailsComponent from "~/components/MovieDetailsComponent.vue";

const route = useRoute()
const movieStore = useMovieStore()
const isLoading = ref(true)

const movie = computed(() => movieStore.getMovie as Movie)

onMounted(async () => {
  const movieId = route.params?.movieId
  if (!movieId) return

  try {
    await movieStore.getMovieByID(movieId as string)
  } finally {
    isLoading.value = false
  }
})
onBeforeUnmount(() => {
  movieStore.clearMovie()
})
</script>

<style scoped>

</style>