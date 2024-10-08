import to from "await-to-js";
import request from "./request";

export const getPasswordPage = async () => {
  const [error, res] = await to(
    request.get("https://gitee.com/api/v5/oauth_doc#/")
  );
  if (error) return console.log("请求出错！");
  console.log(res);
  return res.data.data.blocks;
};
