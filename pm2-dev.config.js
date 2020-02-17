module.exports = {
  apps: [
    {
      name: "todo-server",
      script: "./server/src/server.js",
      watch: true,
      env: {
        MONGO_URI:
          "mongodb://ricardo:ricardo@cluster0-shard-00-00-u2zrg.mongodb.net:27017,cluster0-shard-00-01-u2zrg.mongodb.net:27017,cluster0-shard-00-02-u2zrg.mongodb.net:27017/todos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
        JWT_SECRET: "secret",
        PORT: 8001
      }
    },
    {
      name: "todo-client",
      cwd: "./client",
      script: "npm",
      args: "start",
      watch: false,
      env: {
        PORT: 8002
      }
    }
  ]
};
