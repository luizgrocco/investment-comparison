import axios from "axios";

axios.defaults.baseURL = String(process.env.REACT_APP_API_URL);
axios.defaults.timeout = 60000;
axios.defaults.headers.common = {
  "x-subscriptionkey": String(process.env.REACT_APP_API_KEY),
  // "x-moeda": currency, TODO: add a default currency
};
