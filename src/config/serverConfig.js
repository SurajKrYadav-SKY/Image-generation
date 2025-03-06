const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  HF_API_TOKEN: process.env.HF_API_TOKEN,
  API_URL: process.env.API_URL,
};
