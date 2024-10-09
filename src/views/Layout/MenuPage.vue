<template>
  <a-menu v-mode="horizontal" :items="items" />
</template>
<script setup>
import { h, ref } from "vue";
import {
  FormOutlined,
  RobotOutlined,
  StockOutlined,
  InfoCircleFilled,
  TrademarkCircleOutlined,
  CodeOutlined,
  InboxOutlined,
  FolderOpenOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
  TableOutlined,
  MehFilled,
 NumberOutlined 
} from "@ant-design/icons-vue";
const items = ref([
  {
    key: "RobotOutlined",
    icon: () => h(RobotOutlined),
    label: "工作台",
  },
  {
    key: "FolderOpenOutlined",
    icon: () => h(FolderOpenOutlined),
    label: "项目",
  },
  {
    key: "InfoCircleFilled ",
    icon: () => h(InfoCircleFilled),
    label: "AI",
  },
  {
    key: "FormOutlined",
    icon: () => h(FormOutlined),
    label: "事项",
  },
  {
    key: "CodeOutlined",
    icon: () => h(CodeOutlined),
    label: "代码",
  },
  {
    key: "InboxOutlined",
    icon: () => h(InboxOutlined),
    label: "制品",
  },
  {
    key: "StockOutlined",
    icon: () => h(StockOutlined),
    label: "洞察",
  },
  {
    key: "ReadOutlined",
    icon: () => h(ReadOutlined),
    label: "知识",
  },
  {
    key: "TrademarkCircleOutlined",
    icon: () => h(TrademarkCircleOutlined),
    label: "自动化",
  },
  {
    key: "UserOutlined",
    icon: () => h(UserOutlined),
   
  },
  {
    key: "TableOutlined",
    icon: () => h(TableOutlined),
   
  },
   {
    key: "BellOutlined",
    icon: () => h(BellOutlined),
   
  },
   {
    key: " NumberOutlined",
    icon: () => h( NumberOutlined),
   
  },
  {
    key: "QuestionCircleOutlined",
    icon: () => h(QuestionCircleOutlined),
   
  },
   {
    key: "MehFilled",
    icon: () => h(MehFilled),
   
  },
]);
</script>
