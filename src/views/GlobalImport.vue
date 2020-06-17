<template>
  <div>
    <test-component msg="I am TestComponent"></test-component>
  </div>
</template>

<script>
  // import from local
  // import Avec from '../../packages'
  // import from node_modules
  // for local development and test:
  // 1. run 'yarn link' in root
  // 2. run 'yarn link antd-vue-easy-components' where you want to use this package
  import Avec from 'antd-vue-easy-components'
  import Vue from 'vue'

  Vue.use(Avec)

  export default {
    name: 'GlobalImport',
    components: {},
  }
</script>
