import LLoading from './loading'

let LoadingConstructor;

if (typeof window !== 'undefined' && window.Vue) {
  LoadingConstructor = Vue.extend(LLoading);
}

export default {
  install(Vue) {
    Vue.directive("loading", {
      bind: function (el) {
        var coms = new LoadingConstructor().$mount().$el;
        el.appendChild(coms);
      },
      inserted: function (el, obj) {
        var elLoading = el.querySelector('.l-loading');
        if (obj.value) {
          elLoading.style.display = 'block';
        } else {
          elLoading.style.display = 'none';
        }
      },
      update: function (el, obj) {
        var elLoading = el.querySelector('.l-loading');
        if (obj.value) {
          elLoading.style.display = 'block';
        } else {
          elLoading.style.display = 'none';
        }
      }
    })
  }
}
