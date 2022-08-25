import axios from 'axios';
import { IShortURl } from './types';

const BASE_URL = 'http://localhost:3000/api';
const shortApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const api = {
  getShortUrl: async (originUrl: string) => {
    const { data } = await shortApi.post<IShortURl>('/short', { originUrl });
    return data;
  },
  getOriginUrl: async (shortUrl: string) => {
    const urlId = new URL(shortUrl).pathname.split('/').pop();
    const { data } = await shortApi.get<{ originUrl: string }>('/validate', {
      params: { urlId },
    });
    return data.originUrl;
  },
};
