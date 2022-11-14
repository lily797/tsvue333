<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs
        type="card"
        stretch="true"
        v-model="activeName"
        class="demo-tabs"
      >
        <!-- 账号登录 -->
        <el-tab-pane name="account">
          <template #label>
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </template>
          <pannelAccount />
        </el-tab-pane>
        <!-- 手机登录 -->
        <el-tab-pane name="phone">
          <template #label>
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </template>
          <pannelPhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginBtn"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pannelAccount from './panel-account.vue'
import pannelPhone from './login-phone.vue'

const isRemPwd = ref<boolean>(false)
const activeName = ref('account')

const handleLoginBtn = () => {
  if (activeName.value === 'account') {
    console.log('用户名')
  } else {
    console.log('手机号')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    --el-button-size: 50px;
  }
}
</style>
