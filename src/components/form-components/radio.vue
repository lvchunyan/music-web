<template>
  <RadioGroup v-model="formValue"
              @input="$emit('input', formValue)"
              :type="options.type"
              :size="options.size"
              :vertical="options.vertical">
    <Radio v-for="item in options.radioItems" :key="item.label + item.value" :label="item.value" :disabled="item.disabled">{{ item.label }}</Radio>
  </RadioGroup>
</template>

<script>
export default {
  name: 'vRadio',
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
  mounted () {
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
