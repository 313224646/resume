import request from '@/plugins/request'

export function fetchFund(query) {
  return request({
    url: 'https://api.doctorxiong.club/v1/fund',
    method: 'get',
    params: query
  })
}