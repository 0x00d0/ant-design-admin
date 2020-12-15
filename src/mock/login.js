const Mock = require('mockjs');

import userLogin from './user.login.json'


Mock.mock("/api/login",'post', userLogin)
