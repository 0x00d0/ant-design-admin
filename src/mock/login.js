const Mock = require('mockjs');

import USER_LOGIN from './user.login.json'


Mock.mock("/login",'post', USER_LOGIN)
