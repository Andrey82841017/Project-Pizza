const jwt = require('jsonwebtoken');
const jwtConfig = require('../configs/jwtConfig');

module.exports = (payload) => ({
  accessToken: jwt.sign(
    payload,
    process.env.SECRET_ACCESS_TOKEN,
    jwtConfig.accessToken
  ),
  refreshToken: jwt.sign(
    payload,
    process.env.SECRET_REFRESH_TOKEN,
    jwtConfig.refreshToken
  ),
});
