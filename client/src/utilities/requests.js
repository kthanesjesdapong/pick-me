const axios = require('axios');
const apiUrl = 'http://localhost:8080';
export const searchBusiness = (data) => {
  return axios.post(`${apiUrl}/graphql/business/search`, data);
};
