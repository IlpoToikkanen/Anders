import axios from 'axios'

// Address to be used as a base for all requests
const baseUrl = 'http://localhost:3001'

// Asks for all data in /scores, returns the response data
const getAll = () => {
  const request = axios.get(`${baseUrl}/scores`)
  return request.then(response => response.data)
}

// Asks to post a new score, returns response data
const create = newObject => {
  const request = axios.post(`${baseUrl}/scores`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create }