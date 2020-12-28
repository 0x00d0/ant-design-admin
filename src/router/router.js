

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      icon: 'setting',
      title: '登录页',
      required: false
    },
    component: () => import("@/view/login/login.vue")
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import("@/view/main/main.vue")
  }
]
