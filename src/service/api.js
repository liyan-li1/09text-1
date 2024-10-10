import request from "./request";
export const getAccToken = (data) =>
  request
    .post("/oauth/token", data)
    
