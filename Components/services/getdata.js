import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/iol'

const getData = (text) => {
  const request = axios.get(baseUrl,`?${text}`)
  return request.then(response => response.data);
}

export default {
  getData;
}