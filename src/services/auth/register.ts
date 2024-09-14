import {API} from '@/config';
import axios from 'axios';

interface Params {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export const register = async ({email, password, lastname, name}: Params) => {
  try {
    const res = await axios.post(`${API}/users`, {
      name,
      lastname,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
