const { API_URL, HF_API_TOKEN } = require("../config/serverConfig");
const axios = require("axios");

class ImageGenService {
  async imageGeneration(prompt) {
    const headers = {
      Authorization: `Bearer ${HF_API_TOKEN}`,
    };
    try {
      const response = await axios.post(
        API_URL,
        { inputs: prompt },
        { headers, responseType: "arraybuffer" } // Get binary image data
      );
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer.", error);
      throw { error };
    }
  }
}

module.exports = ImageGenService;
