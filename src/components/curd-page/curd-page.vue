<template>
  <div>
    <search-bar v-if="searchItems.length > 0" :form-items="searchItems" @search="search" @reset="search"></search-bar>
    <Button type="success" v-show="addMethod" style="margin-bottom: 10px;" @click="showAdd">新增</Button>
    <page-table ref="pageTable"
                :get-method="getMethod"
                :columns="columns"
                :params="params"
                :operation="operation"
                :del-method="delMethod"
                @edit="showEdit"></page-table>
    <modal-form ref="modalForm"
                v-show="formItems.length > 0"
                :add-method="addMethod"
                :edit-method="editMethod"
                :formItems="formItems"
                @add-success="addSuccessHandle"
                @edit-success="editSuccessHandle"></modal-form>
  </div>
</template>

<script>
import pageTable from '_c/page-table'
import searchBar from '_c/search-bar'
import modalForm from '_c/modal-form'

export default {
  name: 'curd-page',
  components: {
    pageTable,
    searchBar,
    modalForm
  },
  props: {
    tableOption: {
      type: Object
    },
    columns: { // 定义列
      required: true,
      type: Array
    },
    operation: {
      type: Object
    },
    getMethod: {
      required: true,
      type: Function
    },
    searchItems: {
      type: Array,
      default: () => {
        return []
      }
    },
    addMethod: {
      type: Function
    },
    editMethod: {
      type: Function
    },
    delMethod: {
      type: Function
    },
    formItems: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      params: {}
    }
  },
  methods: {
    search (model) {
      let keys = Object.keys(model)
      keys.forEach(key => {
        this.params[key] = model[key]
      })
      this.$refs.pageTable.refreshNew()
    },
    reset (model) {
      let keys = Object.keys(model)
      keys.forEach(key => {
        this.params[key] = model[key]
      })
    },
    showAdd () {
      this.$refs.modalForm.showAdd()
    },
    showEdit (model) {
      this.formItems.forEach(item => {
        item.value = model[item.name]
      })
      this.$refs.modalForm.showEdit()
    },
    addSuccessHandle () {
      this.$refs.pageTable.refreshNew()
    },
    editSuccessHandle () {
      this.$refs.pageTable.refreshCurrent()
    }
  }
}
</script>

<style scoped>

</style>
