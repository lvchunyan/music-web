<template>
  <Select v-model="formValue"
          @input="$emit('input', formValue)"
          :multiple="options.multiple"
          :disabled="options.disabled"
          :clearable="options.clearable"
          :filterable="options.filterable"
          :size="options.size"
          :placeholder="options.placeholder"
          :not-found-text="options.notFoundText"
          :placement="options.placement"
          :transfer="options.transfer"
          :element-id="options.elementId"
          :style="{ width: `${options.width}px` }">
    <Option v-for="item in options.selectItems" :key="getLabel(item) + getValue(item)" :value="getValue(item)">{{ getLabel(item) }}</Option>
  </Select>
</template>

<script>
export default {
  name: 'vSelect',
  props: {
    value: {
      required: true
    },
    options: { // todo 远程搜索
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
  watch: {
    value (val, oldVal) {
      this.initData()
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
    getLabel (item) {
      if (this.options.selectLabelKey) {
        return item[this.options.selectLabelKey]
      }
      return item.label
    },
    getValue (item) {
      if (this.options.selectValueKey) {
        return item[this.options.selectValueKey]
      }
      return item.value
    }
  }
}
</script>

<style scoped>

</style>
