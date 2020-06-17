import Vue from 'vue'

export class Component {
  static name: string

  static install (vue: typeof Vue): void
}
