<script setup>

import { ref } from 'vue'

var isCollapse = ref(true)

function handleOpen() {

}

</script>



<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {}

.menu-ul {
  width: 80px;
}
</style>
