/*
 * @Descripttion: []
 * @Author: Iseven Monkey <iswoter@gmail.com>
 * @Date: 2021-11-24 11:00:36
 * @LastEditors: Iseven Monkey <iswoter@gmail.com>
 * @LastEditTime: 2021-11-24 11:39:57
 * @FilePath: /webappv1/config/envparser.js
 */
const DotEnv = require("dotenv");
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const parsedEnv = DotEnv.config().parsed;
console.log("parsedEnv:", parsedEnv);

module.exports = function () {
  // Let's stringify our variables
  for (key in parsedEnv) {
    if (typeof parsedEnv[key] === "string") {
      parsedEnv[key] = JSON.stringify(parsedEnv[key]);
    }
  }
  return parsedEnv;
};
