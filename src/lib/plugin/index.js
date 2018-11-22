import LMessage from './message.vue'

let MessageConstructor;
let instance;

if (typeof window !== 'undefined' && window.Vue) {
  MessageConstructor = Vue.extend(LMessage);
}

const Message = function (options) {
  options = options || {};
  instance = new MessageConstructor({
    data: options
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
}

Message["confirm"] = function (options) {
  options.type = "confirm";
  Message(options);
}

export default Message
