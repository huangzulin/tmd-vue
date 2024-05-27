<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue'


const items = ref(null)

watchEffect(async () => {
  axios.get("/downloaded").then(res => {
    items.value = res.data;
  })
})

function filesize(size) {
  let kb = 1024;
  let mb = 1024 * 1024;
  let gb = 1024 * 1024 * 1024;
  if (size / gb > 1) {
    return (size / gb).toFixed(2) + "G";
  } else if (size / mb > 1) {
    return (size / mb).toFixed(2) + "M"
  } else {
    return (size / kb).toFixed(2) + "K"
  }


}




</script>

<template>
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
          <el-progress style="width: 100%;" :text-inside="true" :stroke-width="18" :percentage="x.progress"
            status="success" />
        </div>
        <div style="">
          <div class="date">{{ x.createTime }}</div>
          <div class="size">
            <div v-if="x.downloadedSize != x.fileSize">{{ filesize(x.downloadedSize) }}/</div> {{ filesize(x.fileSize)
            }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.item {
  display: flex;
  border: 1px dotted gray;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5 rem;
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
