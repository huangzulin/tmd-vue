<script setup>

</script>



<template>
  <el-container style="height: 100%;">
      <el-main style="display: flex; flex-flow: column; height: 100%;">
        <RouterView />
      </el-main>
    </el-container>
</template>

<style scoped>

@media (min-width: 1024px) {

.main {
  display: flex;
}
}

@media (max-width: 1023px) {
.main {
  display: flex;
  flex-direction: column;
}
}
</style>
