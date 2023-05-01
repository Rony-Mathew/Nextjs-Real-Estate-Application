import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'cafa04ae97msh741addcdcf2a90ap1dae95jsnfb73d4ecc7e5',
    },
  });
    
  return data;
}