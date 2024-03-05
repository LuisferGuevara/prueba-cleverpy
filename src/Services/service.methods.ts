import { Post, User } from "./../Types/consts.d";
import axios, { AxiosRequestConfig } from "axios";

import { config } from "./config";

const serviceMethods = {
  // Get
  async get(endpoint: string) {
    const res = await axios.get(config.baseUrl + endpoint);
    return res.data;
  },

  // Put
  async put(endpoint: string, data: Post | User, axiosConfig?: AxiosRequestConfig) {
    const res = await axios.put(config.baseUrl + endpoint, data, axiosConfig);
    return res.data;
  },
  // Delete
  async delete(endpoint: string, id: string) {
    const res = await axios.delete(config.baseUrl + endpoint + id);
    return res.data;
  },
  // Create 
  async post(endpoint: string, data: Post | User, axiosConfig?: AxiosRequestConfig){
    const res = await axios.post(config.baseUrl + endpoint, data,axiosConfig)
    return res.data
  }

};

export default serviceMethods;
