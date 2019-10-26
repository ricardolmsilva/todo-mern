module.exports = {
	apps: [
		{
			name: 'todo-server',
			script: './server/src/server.js',
			watch: true,
			env: {
				MONGO_URI: 'mongodb://mongo:27017/todos',
				JWT_SECRET: 'secret'
			}
		},
		{
			name: 'todo-client',
			cwd: './client',
			script: 'npm',
			args: 'start',
			watch: false
		}
	]
}
