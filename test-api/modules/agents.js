/*
 * @Descripttion: []
 * @Author: Iseven Monkey <iswoter@gmail.com>
 * @Date: 2021-11-19 12:42:23
 * @LastEditors: Iseven Monkey <iswoter@gmail.com>
 * @LastEditTime: 2021-11-23 13:38:01
 * @FilePath: /test-api/modules/agents.js
 */
const { resourceLimits } = require("worker_threads");
const axios = require("../lib/axios");
const utils = require("../lib/utils");
const globals = {};
describe(`Agents test`, () => {
  it(`Test new agent regist`, (done) => {
    axios
      .post(`agent/newAgentRegist`, {
        phone_number: utils.randomNumber(12),
      })
      .then((res) => {
        console.log("res:", res);
        done();
      });
  });
});

describe(`Agents test`, () => {
  it(`Test get provinces`, (done) => {
    axios.get(`agent/getProvinces`).then((res) => {
      console.log("res:", res);
      if (res.length) {
        globals.province = res[utils.getArrayRadomNumer(res)];
      }
      done();
    });
  });
});

describe(`Agents test`, () => {
  it(`Test  get pegencies by 'province_id'`, (done) => {
    console.log("globals", globals);

    if (globals.province) {
      axios
        .get(`agent/getRegencies`, {
          params: { province_id: globals.province.id },
        })
        .then((res) => {
          console.log("res:", res);
          done();
        });
    } else {
      console.log("Province not found");
    }
  });
});
