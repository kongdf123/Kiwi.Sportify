import { createPinia } from "pinia"

const pinia = createPinia()

pinia.use(() => {
  return {
    createdAt: Date.now()
  }
})

export default pinia