<template>
  <Modal v-model="showModal">
    <h3 slot="header">{{ type === 'add' ? '新增' : '修改' }}</h3>
    <auto-form ref="autoForm"
               :formItems="formItems"
               :formType="type"
               :hide-submit="true"
               :add-method="addMethod"
               :edit-method="editMethod"
               @saved="saved"
               @add-success="addSuccessHandle"
               @edit-success="editSuccessHandle"></auto-form>
    <div slot="footer">
      <Button @click="showModal = false">取消</Button>
      <Button type="primary" @click="save">保存</Button>
    </div>
  </Modal>
</template>

<script>
import autoForm from '_c/auto-form'

export default {
  name: 'modal-form',
  components: {
    autoForm
  },
  props: {
    formItems: {
      required: true,
      type: Array
    },
    addMethod: {
      type: Function
    },
    editMethod: {
      type: Function
    }
  },
  data () {
    return {
      showModal: false,
      type: 'add'
    }
  },
  watch: {
    showModal (show) {
      if (!show) {
        this.$refs.autoForm.resetFields()
      }
    }
  },
  methods: {
    showAdd () {
      this.type = 'add'
      this.formItems.forEach(item => {
        item.value = ''
      })
      this.$refs.autoForm.initData()
      this.showModal = true
    },
    showEdit () {
      this.type = 'edit'
      this.$refs.autoForm.initData()
      this.showModal = true
    },
    save () {
      this.$refs.autoForm.save()
    },
    saved (formModel) {
      this.$emit('saved', formModel)
    },
    addSuccessHandle () {
      this.showModal = false
      this.$emit('add-success')
    },
    editSuccessHandle () {
      this.showModal = false
      this.$emit('edit-success')
    }
  }
}
</script>

<style scoped>

</style>
