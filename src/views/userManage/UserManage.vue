<template>
  <div class="manage">
    <el-dialog title="新增用户" :visible.sync="addIsShow">
      <common-form :formLable="addFormLabel" :form.sync="addForm"></common-form>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="showAddUserForm"> 新增</el-button>
      <common-form inline :formLable="formLable" :form="searchForm">
        <el-button type="primary">搜尋</el-button>
      </common-form>
    </div>
    <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getData" @edit="editUser" @del="delUser"></common-table>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'
export default {
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      searchForm: {
        keyword: '',
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
        },
      ],
      tableData: [],
      tableLabel: [],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/common';
</style>
