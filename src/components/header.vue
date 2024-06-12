<script setup>

import axios from 'axios';
import router from '@/router';
import { ref, watchEffect } from 'vue'

const me = ref({})

watchEffect(() => {
    axios.get("/me").then(res => {
        me.value = res.data
        console.log(res.data)
        if (!res.data) {
            router.push({ path: "login" })
        }
    })
})

function logout() {
    axios.post("/logout").then(res => {
        localStorage.removeItem("phone");
        router.push({ path: "login" })
    })
}


</script>


<template>
    <div
        style="display: flex; flex-direction: column; justify-content: flex-end; padding: 0.2rem 0; width: 100%; border: 1px solid var(--el-border-color);">
        <div class="name">{{ me.firstName + ' ' + me.lastName }}</div>
        <div style="display: flex; justify-content: end;">
            <div class="phone">TEL:{{ me.phoneNumber }}</div>
            <div class="logout" @click="logout">退出</div>
        </div>
    </div>
</template>

<style scoped>
.name {
    font-size: 1.2rem;
    color: #45415f;
    text-align: right;
    padding-right: 0.5rem;
}

.phone {
    font-size: 1rem;
    color: #303131;
    text-align: right;
}

.logout {
    font-size: 1rem;
    color: #e24545;
    cursor: pointer;
    text-align: right;
    margin: 0 0.5rem;
}
</style>