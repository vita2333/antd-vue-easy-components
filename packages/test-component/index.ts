import Component from './Index.vue'
import { PluginObject, VueConstructor } from 'vue'

(Component as unknown as PluginObject<VueConstructor>).install = (vue) => {
  vue.component(Component.name, Component)
}

export default Component
