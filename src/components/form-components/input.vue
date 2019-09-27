<template>
  <Input v-model="formValue"
         @input="$emit('input', formValue)"
        :type="options.type"
        :size="options.size"
        :placeholder="options.placeholder"
        :clearable="options.clearable"
        :disabled="options.disabled"
        :readonly="options.readonly"
        :maxlength="options.maxlength"
        :icon="options.icon"
        :prefix="options.prefix"
        :suffix="options.suffix"
        :search="options.search"
        :enter-button="options.enterButton"
        :rows="options.rows"
        :autosize="options.autosize"
        :number="options.number"
        :autofocus="options.autofocus"
        :autocomplete="options.autocomplete"
        :element-id="options.elementId"
        :spellcheck="options.spellcheck"
        :wrap="options.wrap"
        :style="{ width: `${options.width}px` }"></Input>
</template>

<script>
export default {
  name: 'vInput',
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
    }
  }
}
</script>

<style scoped>

</style>
