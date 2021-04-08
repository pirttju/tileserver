module.exports = {
  apps: [{
    name: "tileserver",
    script: "npx tileserver-gl-light",
    args: "-s",
    env: {
      "NODE_ENV": "production"
    }
  }]
};
