<!--
 * @Author: your name
 * @Date: 2021-08-19 17:03:32
 * @LastEditTime: 2021-08-20 13:25:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\views\Layout\com\menu.vue
-->
<template>
  <div style="display:flex; flex-direction: column;">
    <div :class="[{ menuImg: true }, { menuImgMin: isCollapse }]">
      <transition name="el-fade-in-linear">
        <el-image v-if="!isCollapse" style="height: 100%; position: absolute" :src="menu1" :fit="fill"></el-image>
      </transition>
      <div class="menutop">
        <div class="menutopall">
          <el-avatar :size="isCollapse ? 30 : 60" :src="avatar" class="avatar"></el-avatar>
        </div>
      </div>
    </div>
    <el-menu :collapse="isCollapse" :router="true" default-active="/home" class="el-menu-vertical-demo"
      @open="handleOpen" @close="handleClose" background-color="#001529" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-submenu index="/system">
        <template #title>
          <i class="el-icon-setting"></i>
          <span>系统设置</span></template>
        <el-menu-item index="/system/user">用户管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import menu1 from "@/assets/menu/menu1.png";
  import avatar from "@/assets/avatar.jpg";
  export default {
    data() {
      return {
        isCollapse: true, //菜单是否展开
        menu1,
        avatar,
      };
    },
    methods: {
      collapse() {
        this.isCollapse = !this.isCollapse;

      },
    },
  };
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: 0 !important;
    height: 100%;
  }

  .menuImg {
    height: 240px;
    width: 100%;
    position: relative;

    background-color: #001529;

    .menutop {
      position: absolute;
      height: 100%;
      width: 100%;

      color: white;

      .menutopall {
        display: flex;
        justify-content: center;
        transform: translateY(-50%);
        top: 50%;
        position: relative;

        .title {
          display: grid;
          margin-left: 20px;
        }
      }
    }
  }

  .menuImgMin {
    height: 60px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 280px;
    min-height: 400px;
  }
</style>