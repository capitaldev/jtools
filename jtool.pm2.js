module.exports = {
  apps: [
    {
      name: "get_address",
      script: "./getAdress",
      watch: false,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 80,
        "NODE_ENV": "production",
      }
    }
  ]
}