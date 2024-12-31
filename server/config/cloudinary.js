const cloudinary = require("cloudinary").v2; // Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			cloud_name: "dhfiqqw2q", // Hardcoded Cloudinary cloud name
			api_key: "976351233969731", // Hardcoded API key
			api_secret: "0YU4sRfYndBNlccIm6ERYh8juMc", // Hardcoded API secret
		});
		console.log("Cloudinary configured successfully!");
	} catch (error) {
		console.error("Error configuring Cloudinary:", error);
	}
};
