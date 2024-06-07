<script setup>

import {  ref } from 'vue'


const isCollapse = ref(true)

function handleOpen() {
    isCollapse.value = !isCollapse.value
}

</script>
<template>
    <div style="border: 1px solid var(--el-border-color);">
        <el-container>
            <el-aside width="82px" style="display: flex; flex-direction: column; border: 1px solid var(--el-border-color);">
                
                <el-menu default-active="1" class="menu-ul" :collapse="isCollapse" @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="1">
                        <RouterLink to="/downloading">下载中</RouterLink>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <RouterLink to="/downloaded">已完成</RouterLink>
                    </el-menu-item>
                </el-menu>
            </el-aside>
        </el-container>
    </div>
</template>

<style scoped>
@media (min-width: 1024px) {}

.menu-ul {
    width: 80px;
}
</style>
