import axios from "axios";

import { config } from "./config";

const methods = {
  // Get method
  async get(endpoint: string) {
    const res = await axios.get(config.baseUrl + endpoint);
    return res.data;
  },
};

export default methods;
