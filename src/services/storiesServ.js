import api from '@/services/api'
export default {
  index () {
    return api().get('stories')
  },
  post (story) {
    return api().post('stories', story)
  }
}
