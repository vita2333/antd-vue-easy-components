<template>
	<div>
		<slot name="header"/>
		<a-form-model :model="_value" ref="form" v-bind="$attrs">
			<a-form-model-item :extra="field.desc"
			                   :key="key"
			                   :label="field.label"
			                   :prop="key"
			                   :required="field.required"
			                   v-for="(field, key) in fields"
			                   v-show="!field.hidden">
				<component :is="_inputTypeMap[field.type]" v-bind="field.attrs" v-model="_value[key]"/>
			</a-form-model-item>
			<slot name="footer">
				<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button @click="submit" type="primary">
						Create
					</a-button>
					<a-button @click="resetFields" style="margin-left: 10px;">
						Reset
					</a-button>
				</a-form-model-item>
			</slot>
		</a-form-model>
	</div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { FieldTypes } from '../types/enum'
  import { Fields } from '../types/common'
  import { FormModel } from 'ant-design-vue'

  @Component({
    components: {},
  })
  export default class DynamicForm extends Vue {
    @Prop({
      type: Object,
      required: true,
    })
    public readonly fields!: Fields

    @Prop({
      type: Object,

      default () {
        return {}
      },
    })
    public readonly value!: any

    get _value () {
      return this.value
    }

    set _value (value: any) {
      this.$emit('input', value)
    }

    get _inputTypeMap () {
      return {
        // base component from UI
        [FieldTypes.text]: 'AInput',
        [FieldTypes.number]: 'AInputNumber',
        [FieldTypes.textarea]: 'ATextarea',
        [FieldTypes.password]: 'AInputPassword',
        [FieldTypes.switch]: 'ASwitch',
        [FieldTypes.date]: 'ADatePicker',
        [FieldTypes.datetime]: 'ADatePicker',
        [FieldTypes.checkers]: 'ACheckboxGroup',
        // custom component
        // [FieldTypes.radio]: './components/DyRadioGroup.vue',
        // [FieldTypes.picker]: () => import(/* webpackChunkName: 'dyform-basic' */ './components/DySelect.vue'),
      }

    }

    get _form () {
      return this.$refs.form as FormModel
    }

    public submit () {
      this._form.validate((valid) => {
        if (valid) {
          this.$emit('submit')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    public resetFields () {
      this._form.resetFields()
    }

    public getForm () {
      return this._form
    }
  }
</script>

<style lang="less" scoped></style>
