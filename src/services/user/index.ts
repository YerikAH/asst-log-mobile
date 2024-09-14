import {API} from '@/config';
import axios from 'axios';

interface getUserParams {
  token: string;
  id: string;
}
export const getUser = async ({token, id}: getUserParams) => {
  try {
    const res = await axios.get(`${API}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
