const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=&key=${process.env.REACT_APP_API_KEY}`

export function getAllVideos() {
  return fetch(`${BASE_URL}`).then((res) => res.json())
}

export function getOneVideo(id) {
  return fetch(`BASE_URL/oneVideo/${id}`).then((res) => res.json())
}

export function getRelatedVideos() {
  return fetch(`BASE_URL`)
}
