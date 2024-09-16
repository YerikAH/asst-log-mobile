import {API} from '@/config';
import axios from 'axios';

export const getSpaces = async (token: string) => {
  try {
    const res = await axios.get(`${API}/attendance`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
