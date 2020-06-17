<template>
  <div>
    <test-component msg="I am TestComponent"></test-component>
  </div>
</template>
<script>
  import { TestComponent } from 'antd-vue-easy-components'
  import Vue from 'vue'

  Vue.use(TestComponent)

  export default {
    name: 'LazyImport',
    components: {},
  }
</script>
