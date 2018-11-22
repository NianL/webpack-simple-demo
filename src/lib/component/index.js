import LDialog from './dialog';

LDialog.install = function(Vue) {
  Vue.component(LDialog.name, LDialog);
};

export default LDialog;