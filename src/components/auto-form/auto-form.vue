<template>
  <Form ref="form" :model="formModel" :rules="ruleModel">
    <FormItem v-for="(item, index) in displayFormItems" :key="item.formType + item.name + index" :prop="item.name" :label="item.label">
      <component :is="formComponents[item.formType]" v-model="formModel[item.name]" :options="item.options"></component>
    </FormItem>
    <FormItem v-show="!hideSubmit">
      <Button type="primary" @click="save">保存</Button>
    </FormItem>
  </Form>
</template>

<script>
import input from '_c/form-components/input'
import select from '_c/form-components/select'
import radio from '_c/form-components/radio'
import checkbox from '_c/form-components/checkbox'
import vswitch from '_c/form-components/switch'

export default {
  name: 'auto-form',
  components: {
    'v-input': input,
    'v-select': select,
    'v-radio': radio,
    'v-checkbox': checkbox,
    'v-switch': vswitch
  },
  props: {
    formType: { // 表单类型 add或者edit 默认add
      type: String,
      default: 'add'
    },
    formItems: {
      required: true,
      type: Array
    },
    addMethod: {
      type: Function
    },
    editMethod: {
      type: Function
    },
    hideSubmit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      formModel: {},
      ruleModel: {},
      displayFormItems: [],
      formComponents: {
        'v-input': input,
        'v-select': select,
        'v-radio': radio,
        'v-checkbox': checkbox,
        'v-switch': vswitch
      }
    }
  },
  watch: {
    formItems: {
      handler (val, oldVal) {
        this.initData()
      },
      deep: true
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.formModel = {}
      this.displayFormItems = []
      this.formItems.forEach(item => {
        this.formModel[item.name] = item.value
        if (item.formType && item.formType !== 'hidden') {
          this.displayFormItems.push(item)
        }
        if (item.rules && item.rules.length > 0) {
          this.ruleModel[item.name] = item.rules
        }
      })
    },
    save () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.formModel)
          this.$emit('saved', this.formModel)
          if (this.formType === 'add') {
            this.add()
          } else if (this.formType === 'edit') {
            this.edit()
          }
        }
      })
    },
    add () {
      this.addMethod(this.formModel).then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.$Message.success('新增成功！')
          this.$emit('add-success')
        }
      })
    },
    edit () {
      this.editMethod(this.formModel).then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.$Message.success('修改成功！')
          this.$emit('edit-success')
        }
      })
    },
    resetFields () {
      this.$refs.form.resetFields()
      this.$bus.emit('initFormItem')
      console.log('formModel', this.formModel)
    }
  }
}
</script>

<style scoped>

</style>
