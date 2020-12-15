import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);


// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = localLang || localRead('local') || 'zh-CN'

Vue.config.lang = lang

Vue.locale = ()=>{
}

const il8n = new VueI18n({
  locale: localStorage.getItem('lang') || lang
});

export default il8n

