const axios = require("axios");

const api = axios.create({
  baseURL: process.env.BASE_URL || "https://your-api-url.com/api", // change this
  headers: {
    "Content-Type": "application/json"
  },
});

module.exports = api;
