<script setup>

import axios from 'axios';
import router from '@/router';
import { ref } from 'vue'


const isCollapse = ref(true)

function handleOpen() {
    isCollapse.value = !isCollapse.value
}


function logout() {
    axios.post("/logout").then(res => {
        localStorage.removeItem("phone");
        router.push({ path: "login" })
    })
}


</script>



<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="80px" style="display: flex; flex-direction: column; justify-content:space-between;">

                <el-menu default-active="1" class="menu-ul" :collapse="isCollapse" @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="1">
                        <RouterLink to="/downloading">下载中</RouterLink>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <RouterLink to="/downloaded">已完成</RouterLink>
                    </el-menu-item>
                    <el-menu-item index="3" @click="logout">退出登录</el-menu-item>
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
