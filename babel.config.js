module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        'libraryName': 'antd-vue-easy-components',
        'customName': (name) => {
          return `antd-vue-easy-components/lib/${ name }.common.js`
        },
        'style': (name) => {
          return false
          // return `${ name }.css`
        },
      },
    ],
  ],
}
