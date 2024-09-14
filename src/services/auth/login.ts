import {API} from '@/config';
import axios from 'axios';

interface Params {
  email: string;
  password: string;
}

export const login = async ({email, password}: Params) => {
  try {
    const res = await axios.post(`${API}/users/login`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
