<template>
  <el-container>
    <el-aside width="250px">
      <img src="@/assets/logo.png" style="width:50px;height:50px" alt="">
      <left-menu></left-menu>
    </el-aside>

    <el-container>
      <el-header>
        <top-menu :list="list"></top-menu>
      </el-header>
      <el-main>
        <el-container>
          <el-header>
            <head-menu></head-menu>
          </el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import topMenu from "@/components/allMenu/topMenu";
import leftMenu from "../allMenu/leftMenu";
import headMenu from "../allMenu/headMenu";
import menu from "../allMenu/menu";
export default {
  data() {
    return {
      list: menu
    };
  },
  components: {
    topMenu,
    leftMenu,
    headMenu
  }
};
</script>

<style></style>
