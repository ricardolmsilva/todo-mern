const mongoose = require('mongoose')
require('dotenv').config()

const MongoURI = process.env.MONGO_URI

module.exports = (function connectDB() {
	try {
		mongoose.connect(MongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		console.log('MongoDB connected')
	} catch (error) {
		console.error(error)
		console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
		setTimeout(connectDB, 5000)
	}
})()
