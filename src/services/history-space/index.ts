import {API} from '@/config';
import axios from 'axios';

export const getHistorySpaces = async (token: string) => {
  try {
    const res = await axios.get(`${API}/history-attendance`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
