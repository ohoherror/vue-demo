<template>
  <el-container>
    <el-header>
      <top-menu></top-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-main>
        <el-container>
          <el-header>
            <head-menu></head-menu>
          </el-header>
          <el-main></el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import topMenu from "../topMenu";
import leftMenu from "../leftMenu";
import headMenu from "../headMenu";
export default {
  data() {
    return {};
  },
  component: {
    topMenu,
    leftMenu,
    headMenu,
  },
};
</script>

<style></style>
