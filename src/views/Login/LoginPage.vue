<template>
  <div>
    <div class="flex">
      <div class="flex-col">
        <Banner />
      </div>
      <div class="my-auto mx-auto">
        <div class="p-[3rem] text-[1.5rem]">登录，即可创造您的内容</div>
        <div class="border-2 w-[35rem] h-[4rem] p-[1rem] rounded-[10px]">
          <input type="text" placeholder="账号" />
        </div>
        <br />
        <div class="border-2 w-[35rem] h-[4rem] p-[1rem] rounded-[10px]">
          <input type="password" placeholder="密码" />
        </div>
        <br />
        <div>
          <a-checkbox v-model:checked="checked" class="text-[10px]"
            >我已阅读并同意
            <a href="/" class="text-[blue]">服务协议</a>
            和
            <a href="/" class="text-[blue]">隐私政策</a></a-checkbox
          >
        </div>
        <br />
        <div>
          <a-button
            type="primary"
            @click="fn"
            class="w-[35rem] h-[4rem] bg-blue-700"
            >登录</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "../home/Banner.vue";
</script>
