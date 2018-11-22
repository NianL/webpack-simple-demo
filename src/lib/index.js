import Dialog from './component/index.js'
import Message from './plugin/index.js'
import Loading from './directive/index.js'

const components = [
  Dialog
]

const install = function (Vue, opts = {}) {
  //组件
  components.map(component => {
    Vue.component(component.name, component);
  });

  //插件
  Vue.prototype.$l_message = Message;
  Vue.prototype.$l_confirm = Message["confirm"];

  //指令
  Vue.use(Loading);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default components
