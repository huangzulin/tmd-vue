<script setup>
import axios from 'axios';
import { ref, reactive, watchEffect } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router';

const form = reactive({
    phone: '',
    code: '',
})

const disabled = ref(false)



watchEffect(async () => {

    axios.get("/phone").then(res => {
        console.log(res.data)
        if (res.data) {
            form.phone = res.data;
            disabled.value = true;
            sendCode();
        }

    })

})


function sendCode() {
    axios.post("/sendCode", { phone: form.phone }).then(res => {
        ElMessage({
            message: '请查收验证码！',
            type: 'success',
        })
    })
}


function login() {
    axios.post("/login", { phone: form.phone, code: form.code }).then(res => {

        ElMessage({
            message: '登录成功！',
            type: 'success',
        })

        localStorage.setItem("phone", form.phone)

        router.push({ path: 'downloading' })

    })
}



</script>

<template>
    <el-form label-position="top" label-width="auto" :model="form" style="max-width: 600px">
        <el-form-item label="手机号码">
            <el-input v-model="form.phone" :disabled="disabled" />
        </el-form-item>
        <el-form-item label="验证码">
            <el-input v-model="form.code" style="width: 8rem; margin-right: 2rem" />
            <el-button type="primary" @click="sendCode" v-if="!disabled">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>

    </el-form>
</template>

<style scoped></style>
