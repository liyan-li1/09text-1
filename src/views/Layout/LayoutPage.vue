<template>
  <div class="flex">
    <div class="flex flex-col">
      <MenuPage />
    </div>

    <div>
      <div class="w-[100vw] h-[4rem] leading-[4rem] border-2 font-bold">
        代码仓库
      </div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="最近访问"
          ><img src="../../assets//images/4.png" alt=""
        /></a-tab-pane>
        <a-tab-pane key="2" tab="新的仓库" force-render
          ><img src="../../assets//images/3.svg"
        /></a-tab-pane>
        <a-tab-pane key="3" tab="开源仓库"
          ><img src="../../assets//images/2.svg"
        /></a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import MenuPage from "../Layout/MenuPage.vue";
const activeKey = ref("1");
</script>
