import Component from './Index.vue'
import Vue, { PluginObject } from 'vue'

(Component as unknown as PluginObject<typeof Vue>).install = (vue) => {
  vue.component(Component.name, Component)
}

export default Component as unknown as PluginObject<typeof Vue>
