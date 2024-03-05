import axios, { AxiosRequestConfig } from "axios";
import { Post, User } from "../Types/consts.d"; 

import { config } from "./config";

const serviceMethods = {
  // Método GET
  async get(endpoint: string) {
    const res = await axios.get(config.baseUrl + endpoint);
    return res.data;
  },

  // Método PUT
  async put(endpoint: string, data: Post | User, axiosConfig?: AxiosRequestConfig) {
    const res = await axios.put(config.baseUrl + endpoint, data, axiosConfig);
    return res.data;
  },

  // Método DELETE
  async delete(endpoint: string, id: string) {
    const res = await axios.delete(config.baseUrl + endpoint + id);
    return res.data;
  },

  // Método POST
  async post(endpoint: string, data: Post | User, axiosConfig?: AxiosRequestConfig) {
    const res = await axios.post(config.baseUrl + endpoint, data, axiosConfig);
    return res.data;
  },
};

export default serviceMethods;

