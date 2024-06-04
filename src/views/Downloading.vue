<script setup>
import { ref, watchEffect } from 'vue'
import { Client } from '@stomp/stompjs';
import Aside from "../components/aside.vue";
import router from '@/router';
import { ElMessage } from 'element-plus';


var phone = localStorage.getItem("phone")
if (!phone) {
  ElMessage({
    message: "请进行登录！",
    type: "warning"
  })
  router.push({ path: 'login' })
}

const items = ref(null)

watchEffect(async () => {
  const stompClient = new Client({
    brokerURL: 'ws://localhost:3222/ws',
    onConnect: () => {
      stompClient.subscribe('/topic/downloading', (message) => {
        items.value = JSON.parse(message.body);
      });
    }
  }

  );


  stompClient.activate();
})

function filesize(size) {
  let kb = 1024;
  let mb = 1024 * 1024;
  let gb = 1024 * 1024 * 1024;
  if (size / gb > 1) {
    return (size / gb).toFixed(2) + "Gb";
  } else if (size / mb > 1) {
    return (size / mb).toFixed(2) + "Mb"
  } else {
    return (size / kb).toFixed(2) + "Kb"
  }


}




</script>

<template>

  <el-container>
    <Aside />
    <el-container>
      <el-header>下载速度</el-header>
      <el-main>
        <div>
          <div class="item" v-for="x in items">
            <div class="field_id">
              <div>{{ x.id }}</div>
            </div>
            <div class="content">
              <div style="">
                <div class="filename">{{ x.filename }}</div>
              </div>
              <div>
                <el-progress style="width: 100%;" :text-inside="true" :stroke-width="18"
                  :percentage="new Number(x.progress.toFixed(2))" />
              </div>
              <div style="">
                <div class="date">{{ x.createTime }}</div>
                <div>{{ filesize(x.downloadBytePerSec) }}/s </div>
                <div class="size">
                  <div v-if="x.downloadedSize != x.fileSize">{{ filesize(x.downloadedSize) }}/</div> {{
            filesize(x.fileSize)
          }}
                </div>
              </div>
            </div>

          </div>

        </div>
      </el-main>
    </el-container>
  </el-container>


</template>

<style scoped>
.item {
  display: flex;
  border: 1px dotted gray;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5 rem;
}

.size {
  display: flex;
  width: 10rem;
  margin: 0 1rem;
}

.field_id {
  color: orangered;
  width: 5rem;

}

.field_id>div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
}

.content>div {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
