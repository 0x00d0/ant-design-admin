const Mock = require('mockjs');

// import userLogin from './user.login.json'
const userLogin = {
  "code": 200,
  "msg": "登陆成功",
  "obj": {
    "expiresIn": 3600,
    "refreshToken": "123",
    "token": "123"
  }
}


Mock.mock("/api/login",'post', userLogin)
