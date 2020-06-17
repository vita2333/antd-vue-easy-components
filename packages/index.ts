import TestComponent from './test-component'
import { PluginFunction } from 'vue'
import pkg from '../package.json'

const components = [TestComponent]
const install: PluginFunction<Vue> = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  version: pkg.version,
}
