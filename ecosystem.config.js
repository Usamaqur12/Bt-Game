module.exports = {
  apps: [{
    name: 'primebet',
    script: 'server.js',
    cwd: __dirname,
    autorestart: true,
    env: {
      NODE_ENV: 'production',
      HOSTNAME: '0.0.0.0',
    },
  }]
};
