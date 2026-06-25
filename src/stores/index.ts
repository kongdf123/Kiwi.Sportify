import { createPinia } from "pinia"
import persistedstate from "pinia-plugin-persistedstate";

declare module "pinia" {
  export interface PiniaCustomProperties {
    persist: boolean
    createdAt: number
  }
}

const pinia = createPinia()

pinia.use(persistedstate);

// pinia.use(() => {
//   return {
//     persist: true,
//     createdAt: Date.now()
//   }
// })

export default pinia