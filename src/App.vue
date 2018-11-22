<template>
  <div id="app">
    <button @click="dialogIsShow=true">1.dialog</button>
    <button @click="alertHandle">2.msg</button>
    <l-dialog :show="dialogIsShow" @handle="dialogHandle">
      123456
    </l-dialog>
  </div>
</template>

<script>
require("./lib/plugin");

export default {
  name: "app",
  data() {
    return {
      dialogIsShow: false
    };
  },
  methods: {
    dialogHandle(res) {
      this.dialogIsShow = false;
      console.log(res);
    },
    alertHandle() {
      this.$l_alert({
        msg: "123"
      });
    }
  }
};
</script>

<style lang="scss">
</style>
