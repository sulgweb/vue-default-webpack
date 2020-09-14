<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <a-config-provider :locale="locale">
    <div id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <router-view/>
    </div>
  </a-config-provider>
  
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default {
  name: 'App',
  setup(){
    return {
      locale: zhCN,
    }
  },
  components: {
  },
  created(){},
  mounted(){}
}
</script>
