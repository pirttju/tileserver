module.exports = {
  apps: [{
    name: "tileserver",
    script: "npx tileserver-gl-light -s",
    env: {
      "NODE_ENV": "production"
    }
  }]
};