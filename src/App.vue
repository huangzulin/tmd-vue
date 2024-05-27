<script setup>
import Downloading from './views/Downloading.vue';

</script>



<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="80px" style="display: flex; flex-direction: column; justify-content:space-between;">

        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1"><RouterLink to="/downloading">下载中</RouterLink></el-menu-item>
          <el-menu-item index="2"><RouterLink to="/downloaded">已完成</RouterLink></el-menu-item>
          <el-menu-item index="2">设置</el-menu-item>
        </el-menu>

        <div>版权信息</div>
      
      </el-aside>
      <el-container>
        <el-header>下载速度</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
