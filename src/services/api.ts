import axios from 'axios';
import { globalConfig } from '../config/globalConfig';

const api = axios.create({
  baseURL: globalConfig.baseURL,
});

export {api}