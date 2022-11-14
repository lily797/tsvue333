<template>
  <div class="main">
    {{ counterStore.counter }} -- {{ counterStore.doubleCounter }}
    <button @click="changeCounter">修改</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/stores/counter'
const counterStore = useCounterStore()
function changeCounter() {
  counterStore.changeCounterAction(500)
}
</script>

<style lang="less" scoped>
.main {
}
</style>
