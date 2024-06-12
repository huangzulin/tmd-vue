<script setup>
import axios from 'axios';
import { ref, reactive, watchEffect } from 'vue'
import { ElMessage } from 'element-plus'
import { Client } from '@stomp/stompjs';
import QrcodeVue from 'qrcode.vue'
import router from '@/router';

const qrcode = ref("")



watchEffect(async () => {

    var client1 = new Client({
        brokerURL: 'ws://' + (`${document.location.hostname}:3222`) + '/ws',
        onConnect: () => {
            client1.subscribe('/topic/qrcode', (message) => {
                console.log(message)
                qrcode.value = message.body;
            });
        }
    })

    var client2 = new Client({
        brokerURL: 'ws://' + (`${document.location.hostname}:3222`) + '/ws',
        onConnect: () => {
            client2.subscribe('/topic/auth', (message) => {
                if (message.body == "ok") {
                    router.push({ path: "downloading" })
                }
            });
        }
    })

    client1.activate();
    client2.activate();
})



function login() {
    axios.post("/login", { phone: form.phone, code: form.code }).then(res => {

        console.log(res)
        if ("ok" == res.data) {
            localStorage.setItem("phone", form.phone)

            ElMessage({
                message: '登录成功！',
                type: 'success',
            })
            //router.push({ path: 'downloading' })
        } else {
            ElMessage({
                message: res.data.message,
                type: 'error',
            })
        }

    })
}



</script>

<template>
    <div>
        <qrcode-vue :value="qrcode"></qrcode-vue>
    </div>
</template>

<style scoped></style>
