<template>
  <div class="flex items-center">
    <div class="w-[578px] h-[100vh]">
      <Banner />
    </div>
    <div class="w-[100%] h-[100%] flex items-center justify-center">
      <!-- <form @submit.prevent="handleLogin"> -->
      <div class="">
        <div class="w-[400px] text-[35px] py-20 text-center">
          登录，即可创造您的内容
        </div>

        <div class="border-2 w-[35rem] h-[4rem] p-[1rem] rounded-[10px]">
          <input
            v-model="LoginData.username"
            required
            type="text"
            placeholder="账号"
          />
        </div>
        <br />
        <div class="border-2 w-[35rem] h-[4rem] p-[1rem] rounded-[10px]">
          <input
            v-model="LoginData.password"
            type="password"
            placeholder="密码"
          />
        </div>
        <div class="py-5">
          <a-checkbox class="text-[10px]"
            >我已阅读并同意
            <a href="/" class="text-[#0606e9]">服务协议</a>
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
          <div class="text-gray-500 text-center py-4">
            还未注册？
            <a href="/" class="text-[#0606e9]">立即注册</a>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script setup>
import Banner from "../home/Banner.vue";
import { getAccToken } from "../../service/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import to from "await-to-js";

const router = useRouter();

const LoginData = {
  grant_type: "password",
  username: "1574968179@qq.com ",
  password: "lyl2004LYL",
  client_id: "57eeab534e03e014047d5a51ba792f082d8e725b5475cd7c3e592ea7ecfe754e",
  client_secret:
    "7c5d22fae44241d7a4d588ad9de1cd5bcc3fe7877cd45d08a67a1e97eebbdc3d",
  scope:
    "user_info projects pull_requests issues notes keys hook groups gists enterprises",
};

const handleLogin = async () => {
  try {
    // 密码获取成功后跳转到另一个页面
    router.push("/layout");
  } catch (error) {
    console.error("获取密码失败:", error);
  }
  const [err, res] = await to(getAccToken(LoginData));
  console.log(err, res);
};
</script>
