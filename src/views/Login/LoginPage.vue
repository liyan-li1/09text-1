<template>
  <div>
    <div class="flex">
      <div class="flex-col">
        <Banner />
      </div>
      <form @submit.prevent="handleLogin">
        <div class="my-auto mx-auto">
          <div class="p-[3rem] text-[1.5rem]">登录，即可创造您的内容</div>
          <div class="border-2 w-[35rem] h-[4rem] p-[1rem] rounded-[10px]">
            <input v-model="username" required type="text" placeholder="账号" />
          </div>
          <br />
          <div class="border-2 w-[35rem] h-[4rem] p-[1rem] rounded-[10px]">
            <input v-model="password" type="password" placeholder="密码" />
          </div>
          <br />
          <div>
            <a-checkbox class="text-[10px]"
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
              @click="handleLogin"
              class="w-[35rem] h-[4rem] bg-blue-700"
              >登录</a-button
            >
            <div class="text-base-content/50">还未注册？立即注册</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Banner from "../home/Banner.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
  // 这里应该有验证逻辑，比如调用API验证用户名和密码
  if (username.value === "liyanli" && password.value === "123") {
    // 登录成功，跳转到目标页面
    router.push("/layout");
  } else {
    // 登录失败，提示用户
    alert("用户名或密码错误");
  }
};
</script>
 
