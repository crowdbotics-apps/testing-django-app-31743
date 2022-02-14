import axios from "axios"
const dogAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogapi_get_breeds_image_random_read(payload) {
  return dogAPI.get(`/breeds/image/random`)
}
export const apiService = { dogapi_get_breeds_image_random_read }
