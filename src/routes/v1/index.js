const express = require("express");
const {
  imageGenerationService,
} = require("../../controllers/image-gen-controller");
const router = express.Router();

router.post("/generate-profile", imageGenerationService);

module.exports = router;
