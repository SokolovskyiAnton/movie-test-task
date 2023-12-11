<template>
  <el-card
    class="w-full md:w-6/12 mx-2 md:mx-auto"
  >
    <template #header>
      <h5 class="text-center font-bold text-2xl">Search movies</h5>
    </template>
    <el-form @submit.prevent="handleSubmit">
      <el-input
        v-model="title"
        placeholder="Write movie name"
      />
      <el-button
        class="w-full mt-4"
        color="blue"
        native-type="submit"
        :loading="isLoading"
        :disabled="isLoading"
      >
        Search
      </el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMovieStore } from "~/stores/movieStore";
import { NotificationService } from "~/services/NotificationService";

const movieStore = useMovieStore()
const title = ref('')
const isLoading = ref(false)

async function handleSubmit() {
  try {
    await movieStore.getMoviesList(title.value)
  } catch (e: any) {
    NotificationService.showMessage(e.message)
  }
}
</script>

<style scoped>

</style>