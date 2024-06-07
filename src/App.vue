<script setup>

import { ref } from 'vue'

var isCollapse = ref(true)

function handleOpen() {

}

</script>



<template>
  <el-container style="height: 100%;">
      <el-main style="display: flex; flex-flow: column; height: 100%">
        <RouterView />
      </el-main>
    </el-container>
</template>

<style scoped>
@media (min-width: 1024px) {}

.menu-ul {
  width: 80px;
}
</style>
