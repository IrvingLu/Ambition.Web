<!--
 * @Author: Seven
 * @Date: 2021-08-19 09:55:18
 * @LastEditTime: 2021-08-20 11:27:16
 * @LastEditors: Please set LastEditors
 * @Description: 首页展示
 * @FilePath: \web\src\views\Home\home.vue
-->
<template>
  <div>

    <div style="width:420px">
      <section class="hello">
        <div>
          <div class="tit">HELLO</div>
          <div class="dat">今天是{{ today }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
 import moment from "moment";
export default {
  data() {
    return {
      today: moment().format("YYYY年MM月DD日"),
    };
  },
  methods: {
    gotoScreen() {
      let routeData = this.$router.resolve({ path: "/screen" });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>

.hello {
  position: relative;
  background: #001529;
  padding: 24px;
  color: #ffffff;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -90%;
    width: 160px;
    height: 160px;
    background: #1890ff;
    transform: rotate(45deg);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    right: -40%;
    bottom: -80%;
    width: 320px;
    height: 320px;
    background: #faad14;
    transform: rotate(-135deg);
    z-index: 0;
  }

  div {
    position: relative;
    z-index: 2;
  }

  .tit {
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 12px;

    span {
      font-size: 16px;
      font-weight: normal;
    }
  }

  .dat {
    color: fade-out(#ffffff, 0.4);
    margin-bottom: 16px;
  }
}
</style>