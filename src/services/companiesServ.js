import api from '@/services/api'
export default {
  index () {
    return api().get('companies')
  },
  post (company) {
    return api().post('companies', company)
  }
}
