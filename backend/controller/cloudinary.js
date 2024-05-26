const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadcloud = async (path) => {
  try {
    if (!path) return;
    else {
      const response = await cloudinary.uploader.upload(path, {
        resource_type: "image",
      });
      return response.url;
    }
  } catch (err) {
    fs.unlinkSync(path);
    return null;
  }
};

module.exports = { uploadcloud };
