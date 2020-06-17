<template>
	<a-select v-bind="$attrs" v-model="_value">
		<a-select-option :key="option.value" :value="option.value" v-for="option in $attrs.options">
			{{ option.label }}
		</a-select-option>
	</a-select>
</template>

<script>
  import CustomComponentMixin from '../mixins/CustomComponentMixin'

  export default {
    name: 'DySelect',
    mixins: [CustomComponentMixin],
  }
</script>
