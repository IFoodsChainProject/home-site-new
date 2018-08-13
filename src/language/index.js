import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Chinese from './chinese.js'
import English from './english.js'
import Cookies from 'js-cookie'
import Korean from './korean.js'
import Vietnam from './vietnam.js'

Vue.use(VueI18n)
// function language() {
//    return Cookies.get('language') ? Cookies.get('language') : 'EN'
// }
export default new VueI18n({
  locale: Cookies.get('language') || 'EN',
  messages: {
    CH: Chinese,
    EN: English,
    KO: Korean,
    VI: Vietnam
  }
})
