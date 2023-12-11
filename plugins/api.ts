import {ApiService} from "~/services/ApiService";

export default defineNuxtPlugin((nuxt) => {
    const api = new ApiService({ baseURL: nuxt.$config.public.API_BASE }, nuxt.$config.public.API_BASE_TOKEN)

    return {
        provide: {
            api
        }
    }
})