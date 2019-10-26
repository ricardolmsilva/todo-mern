module.exports = {
	apps: [
		{
			name: 'todo-server',
			script: './server/src/server.js',
			watch: false,
			env: {
				MONGO_URI: 'mongodb://',
				JWT_SECRET: ''
			}
		},
		{
			name: 'todo-client',
			script: './client/server.js',
			watch: false
		}
	]
}
