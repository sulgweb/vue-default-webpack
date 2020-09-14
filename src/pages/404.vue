<!--
 * @description: 404页面
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-09 16:43:56
 * @Copyright: 1.0.0
-->
<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="toIndex">Back Home</a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  setup() {
    return {};
  },
  methods:{
      toIndex(){
          this.$router.push({path:"/index"})
      }
  }
};
</script>