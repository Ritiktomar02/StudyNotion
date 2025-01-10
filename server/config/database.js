const mongoose = require("mongoose");
require("dotenv").config();

const  MONGODB_URL  = "mongodb+srv://ritiktomar0209:fKnK8Vjmd3GoE47h@cluster0.xwgrg.mongodb.net/Studynotion";

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL,{
			serverSelectionTimeoutMS: 10000,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
