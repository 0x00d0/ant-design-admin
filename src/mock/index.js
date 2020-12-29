const Mock = require('mockjs');

const userLogin = {
  "code": 200,
  "msg": "success",
  "obj": {
    "id": 100,
    "dictType": "1",
    "dictCode": "2",
    "dictText": "3",
    "dictValue": "4"
  }
}

const addDict = {
  "code": 200,
  "msg": "success",
  "obj": {
    "id": 100
  }
}

const checkDict = {
  "code": 200,
  "msg": "验证通过！",
  "obj": {
    "success": "success"
  }
}

const updateDict = {
  "code": 200,
  "msg": "success",
  "obj": {
    "id": 100,
  }
}

const deleteDict = {
  "code": 200,
  "msg": "success",
  "obj": null
}

const getListDict = {
  "code": 200,
  "msg": "success",
  "obj": {
    "pageSize": 10,
    "current":1,
    "total": 5,
    "rows": [
      {
        "id": 100,
        "dictType": "1",
        "dictCode": "2",
        "dictText": "3",
        "dictValue": "4"
      },
      {
        "id": 101,
        "dictType": "1",
        "dictCode": "2",
        "dictText": "3",
        "dictValue": "4"
      },
      {
        "id": 102,
        "dictType": "1",
        "dictCode": "2",
        "dictText": "3",
        "dictValue": "4"
      }
    ]
  }
}

Mock.mock("/login",'post', userLogin)
Mock.mock("/dict/addDict", 'post', addDict)
Mock.mock("/dict/delDict", 'post', deleteDict)
Mock.mock("/dict/updateDict", 'post', updateDict)
Mock.mock("/dict/getListDict", 'post', getListDict)
Mock.mock("/dict/checkTypeAndCode", 'post', checkDict)

