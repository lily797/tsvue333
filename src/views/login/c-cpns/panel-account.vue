<template>
  <div class="panel-account">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const labelPosition = ref('right')
const formLabelAlign = reactive({
  name: '',
  region: ''
})
</script>

<style lang="less" scoped>
.panel-account {
}
</style>
