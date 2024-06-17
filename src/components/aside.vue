<script setup>

import { ref } from 'vue'


const isCollapse = ref(true)

function handleOpen() {
    isCollapse.value = !isCollapse.value
}

</script>
<template>
    <div class="aside" style="border: 1px solid var(--el-border-color);">
        <div default-active="1" class="menu-ul" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
            <RouterLink class="link" to="/downloading">下载中</RouterLink>
            <RouterLink class="link" to="/downloaded">已完成</RouterLink>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 1024px) {

    .main {
        display: flex;
        flex-direction: row;
    }

    .menu-ul {
        width: 80px;
    }

    .aside {
        width: 82px;
    }

    .link{
        display: block;
        text-align: center;
        padding: 10px 0;
    }
}

@media (max-width: 1023px) {
    .main {
        display: flex;
        flex-direction: column;
    }

    .aside {
        width: 100%;
    }

    .link{
        text-align: center;
        padding: 0.3rem 0;
    }

    .menu-ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
</style>
