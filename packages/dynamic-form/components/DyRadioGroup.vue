<template>
	<a-radio-group v-bind="$attrs" v-model="_value">
		<a-radio :key="option.value" :value="option.value" v-for="option in $attrs.options">
			{{ option.label }}
		</a-radio>
	</a-radio-group>
</template>

<script>
  import CustomComponentMixin from '../mixins/CustomComponentMixin'

  export default {
    name: 'DyRadioGroup.vue',
    mixins: [CustomComponentMixin],
  }
</script>

