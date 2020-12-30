<template>
  <el-submenu :index="menu.path">
    <template slot="title">{{ menu.title }}</template>
    <template v-for="child in menu.children">
      <menu-item
        :key="child.key"
        v-if="child.children === undefined"
        :menu="child"
      ></menu-item>
      <menu-sub v-else :menu="child" :key="child.key"></menu-sub>
    </template>
  </el-submenu>
</template>

<script>
import menuItem from "../menuItem";
export default {
  name: "menuSub",
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  components: {
    menuItem
  }
};
</script>

<style></style>
