<!--
 * @Author: your name
 * @Date: 2021-08-19 11:13:00
 * @LastEditTime: 2021-08-19 14:05:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\Home\screen.vue
-->
<template>
    <div class="screen">
      <dv-border-box-10>
        <dv-conical-column-chart
          :config="config"
          style="width: 400px; height: 200px"
        />
      </dv-border-box-10>
    </div>

</template>
<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 71,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 35,
          },
          {
            name: "漯河",
            value: 15,
          },
        ],
      },
    };
  },
};
</script>

<style>
.screen {
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #282c34;
  height: 100vh;
}
</style>