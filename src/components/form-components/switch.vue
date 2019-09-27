<template>
  <i-switch v-model="formValue"
            @input="$emit('input', formValue)"
            :size="options.size"
            :disabled="options.disabled"
            :true-value="options.trueValue"
            :false-value="options.falseValue"
            @on-change="change"></i-switch>
</template>

<script>
export default {
  name: 'vSwitch',
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
  mounted () {
    this.initData()
    this.$bus.on('initFormItem', () => {
      this.initData()
    })
  },
  methods: {
    initData () {
      this.formValue = this.value
    },
    change (status) {
      if (this.options.onChange) {
        this.options.onChange(status)
      }
    }
  }
}
</script>

<style scoped>

</style>
