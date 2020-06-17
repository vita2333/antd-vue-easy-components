import TestComponent from './test-component'
import DynamicForm from './dynamic-form'
import { VueConstructor } from 'vue'
import pkg from '../package.json'

const version = pkg.version
const components = [TestComponent, DynamicForm]
const install: any = (Vue: VueConstructor<any>) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  TestComponent,
  DynamicForm,
}
