import axios from 'axios';


export const getArticles = async () => {
    const jwtToken = localStorage.getItem('token');
    const apikey = 'binar-36'
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:9000/api/v1/article/',
        headers: {
            'Authorization': jwtToken,
            'x-api-key': apikey
        }
    };

    try {
        const response = await axios(config);
        return response.data.data; // Mengembalikan data respons
    } catch (error) {
        throw error; // Melempar kesalahan
    }
};

export const getArticleByID = async (id) => {
    try {
      const jwtToken = localStorage.getItem('token');
      const apikey = 'binar-36'
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:9000/api/v1/article/id/${id}`,
        headers: {
          'Authorization': jwtToken,
          'x-api-key': apikey,
          'Cookie': 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWRfdXNlcnMiOjEsInVzZXJuY' +
            'W1lIjoiYWRpMSIsImlhdCI6MTY5NzI3OTg2MywiZXhwIjoxNjk3MjgzNDYzfQ.XmCWh9lTrcIZiolF' +
            'asj6m4RRL-qdfML02u8iVyi_2kc'
        }
      };
  
      const response = await axios.request(config);
      return response.data; // Mengembalikan data artikel
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error; // Dilemparkan untuk menangani kesalahan di tempat lain
    }
  };
  
  
  
  
  
  