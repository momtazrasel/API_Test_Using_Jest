require('dotenv').config();
const axios = require('axios');

const baseApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

module.exports = baseApi;
