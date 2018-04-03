import api from '@/services/api'
export default {
  index () {
    return api().get('stories')
  },
  show (storyId) {
    return api().get(`songs/${storyId}`)
  },
  post (story) {
    return api().post('stories', story)
  }
}
