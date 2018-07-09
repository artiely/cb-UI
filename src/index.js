import components from './package'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
import 'normalize.css'
const install = (Vue) => {
  if (install.installed) return

  Vue.use(AlloyFingerPlugin, {
    AlloyFinger
  })

  for (let key in components) {
    Vue.component(key, components[key])
  }

  Vue.prototype.$ActionSheet = components.ActionSheet
  Vue.prototype.$Modal = components.Modal
  Vue.prototype.$Toast = components.Toast
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
var obj = {}
Object.assign(obj, {
  install,
  ...components
})
export default obj
