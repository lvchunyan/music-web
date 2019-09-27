<template>
  <div>
    <Form ref="searchForm" :model="searchForm" inline>
      <FormItem v-for="(item, index) in displayFormItems" :key="item.formType + item.name + index" :prop="item.name" :label="item.label">
        <component :is="formComponents[item.formType]" v-model="searchForm[item.name]" :options="item.options"></component>
      </FormItem>
      <FormItem>
        <Button style="margin: 33px 10px 0 0;" type="primary" @click="search">搜索</Button>
        <Button style="margin-top: 33px;" @click="reset">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import input from '_c/form-components/input'
import select from '_c/form-components/select'

export default {
  name: 'search-bar',
  components: {
    'v-input': input,
    'v-select': select
  },
  props: {
    formItems: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      searchForm: {},
      displayFormItems: [],
      formComponents: {
        'v-input': input,
        'v-select': select
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.searchForm = {}
      this.displayFormItems = []
      this.formItems.forEach(item => {
        this.searchForm[item.name] = item.value
        if (item.formType && item.formType !== 'hidden') {
          this.displayFormItems.push(item)
        }
      })
    },
    search () {
      this.$emit('search', this.searchForm)
    },
    reset () {
      this.$refs.searchForm.resetFields()
      this.$bus.emit('initFormItem')
      this.$emit('reset', this.searchForm)
    }
  }
}
</script>

<style scoped>

</style>
