import axios from "axios"

// API para email (URL antiga)
const EMAIL_API_URL = "https://vortex-hmg.unifor.br/pedalamaisapi/"
const emailApi = axios.create({
  baseURL: EMAIL_API_URL,
})

const CONTENT_API_URL = import.meta.env.VITE_API_URL || ""
const contentApi = axios.create({
  baseURL: CONTENT_API_URL,
})

contentApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


contentApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refreshToken')
        if (refreshToken) {
          const response = await contentApi.post('/auth/refresh', { refreshToken })
          const { accessToken, refreshToken: newRefreshToken } = response.data

          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', newRefreshToken)

          originalRequest.headers.Authorization = `Bearer ${accessToken}`
          return contentApi(originalRequest)
        }
      } catch (refreshError) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export async function sendContactUsEmail(data) {
  return await emailApi.post("/enviar-email", data)
}
export async function createContent(data) {
  return await contentApi.post("/content", data)
}

export async function getAllContent() {
  return await contentApi.get("/content")
}

export async function getContentByType(tipo) {
  return await contentApi.get(`/content?tipo=${tipo}`)
}

export async function getContentById(id) {
  return await contentApi.get(`/content/${id}`)
}

export async function updateContent(id, data) {
  return await contentApi.put(`/content/${id}`, data)
}

export async function deleteContent(id) {
  return await contentApi.delete(`/content/${id}`)
}

export async function signup(data) {
  return await contentApi.post("/auth/signup", data)
}

export async function login(data) {
  return await contentApi.post("/auth/login", data)
}

export async function refreshTokenPost(refreshToken) {
  return await contentApi.post("/auth/refresh", { refreshToken })
}

export async function refreshTokenGet(token) {
  return await contentApi.get(`/auth/refresh?token=${token}`)
}


export async function createGeoJSON(data) {
  return await contentApi.post("/geojson", data)
}

export async function uploadGeoJSONFile(file) {
  const formData = new FormData()
  formData.append('file', file)
  return await contentApi.post("/geojson/upload", formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export async function getAllGeoJSON() {
  return await contentApi.get("/geojson")
}

export async function getGeoJSONById(id) {
  return await contentApi.get(`/geojson/${id}`)
}

export async function getCurrentAppliedGeoJSON() {
  return await contentApi.get("/geojson/applied/current")
}

export async function downloadGeoJSON(id) {
  return await contentApi.get(`/geojson/${id}/download`, {
    responseType: 'blob'
  })
}

export async function applyGeoJSONVersion(id) {
  return await contentApi.patch(`/geojson/${id}/apply`)
}

export async function deleteGeoJSON(id) {
  return await contentApi.delete(`/geojson/${id}`)
}
