<!--
 * @Author: Seven
 * @Date: 2021-08-18 16:43:02
 * @LastEditTime: 2021-08-20 11:41:47
 * @LastEditors: Please set LastEditors
 * @Description: 页面布局
 * @FilePath: \web\src\views\Layout\Layout.vue
-->
<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <div style="display: flex">
          <el-image class="img" :src="logo"></el-image>
          <h1>DIS</h1>
        </div>
        <div style="display: flex">
          <el-tooltip class="item" effect="dark" content="收起菜单" placement="bottom">
            <el-icon :size="26" color="white" class="heardericon" @click="collapse">
              <fold />
            </el-icon>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="数据大屏" placement="bottom">
            <el-icon :size="26" color="white" class="heardericon" @click="gotoScreen">
              <histogram />
            </el-icon>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="消息通知" placement="bottom">
            <el-icon :size="26" color="white" class="heardericon">
              <message />
            </el-icon>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="系统设置" placement="bottom">
            <el-icon :size="26" color="white" class="heardericon" @click="openSetting">
              <setting />
            </el-icon>
          </el-tooltip>
          <el-avatar :size="30" :src="avatar" class="avatar"></el-avatar>
        </div>
      </el-header>
      <el-container class="content">
        <Menu ref="menuRef" />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <SettingDialog ref="SettingDialog" />
  </div>
</template>

<script>
  import menu1 from "@/assets/menu/menu1.png";
  import logo from "@/assets/logo.png";
  import avatar from "@/assets/avatar.jpg";
  import {
    Fold,
    Setting,
    Message,
    Histogram
  } from "@element-plus/icons";
  import Menu from "./com/menu.vue";
  import SettingDialog from "./com/setting.vue";
  export default {
    components: {
      Histogram,
      Setting,
      Message,
      Fold,
      Menu,
      SettingDialog,
    },
    data() {
      return {
        menu1, //菜单头部图片
        logo, //logo
        avatar, //头像
      };
    },
    methods: {
      collapse() {
       this.$refs.menuRef.collapse();
      },
      ///系统设置
      openSetting() {
        this.$refs.SettingDialog.open();
      },
      ///数据大屏
      gotoScreen() {
        let routeData = this.$router.resolve({
          path: "/screen",
        });
        window.open(routeData.href, "_blank");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    .header {
      background: #001529;
      display: flex;
      justify-content: space-between;
      line-height: 60px;

      h1 {
        color: #0ea37e;
        margin: 0;
        font-style: oblique;
      }

      .img {
        height: 30px;
        margin: 15px;
      }

      .heardericon {
        margin: 17px 10px;
        cursor: pointer;
      }

      .avatar {
        margin: 15px;
        cursor: pointer;
      }
    }



    .content {
      height: calc(100vh - 60px);
    }
  }
</style>