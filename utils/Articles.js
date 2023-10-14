import axios from 'axios';

export const getArticles = async () => {
  const jwtToken = localStorage.getItem('token');

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:9000/api/v1/article/',
    headers: {
      'Authorization': jwtToken,
      'x-api-key': 'binar-36',
    },
  };

  try {
    const response = await axios(config);
    return response.data.data; // Mengembalikan data respons
  } catch (error) {
    throw error; // Melempar kesalahan
  }
};
