const SERVER_PORT = process.env.FRONT_PORT || 3000;
const SERVER_HOST = process.env.FRONT_HOST || 'localhost';

console.log('server port: ',SERVER_PORT)
console.log('front port: ',process.env.FRONT_PORT)

exports.buildFrontUrlFor = (uri) => `http://${SERVER_HOST}:${SERVER_PORT}/${uri}`;
