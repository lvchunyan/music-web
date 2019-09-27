<template>
    <CheckboxGroup v-model="formValue"
                   @input="$emit('input', formValue)"
                   :size="options.size">
      <Checkbox v-for="item in options.checkboxItems" :key="item.label + item.value" :label="item.value" :disabled="item.disabled">{{ item.label }}</Checkbox>
    </CheckboxGroup>
</template>

<script>
export default {
  name: 'vCheckbox',
  props: {
    value: {
      required: true
    },
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      formValue: null
    }
  },
  created () {
    this.initData()
    this.$bus.on('initFormItem', () => {
      this.initData()
    })
  },
  methods: {
    initData () {
      this.formValue = this.value
    }
  }
}
</script>

<style scoped>

</style>
