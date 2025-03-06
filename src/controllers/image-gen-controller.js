const ImageGenService = require("../services/image-gen-service");

const imageGenService = new ImageGenService();

const imageGenerationService = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  try {
    const response = await imageGenService.imageGeneration(prompt);
    res.set("Content-Type", "image/png");
    res.status(200).send(response.data);
  } catch (error) {
    console.error(
      "Error generating image:",
      error.response?.data || error.message
    );
    res.status(500).json({
      success: false,
      message: "Error generating image",
      error: error.response?.data || error.message,
    });
  }
};

module.exports = {
  imageGenerationService,
};
