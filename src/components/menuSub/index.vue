<template>
  <el-submenu :index="menu.key">
    <template v-for="child in menu.children">
      <menu-item
        :key="child.key"
        v-if="child.children === undefined"
        :menu="child"
        :index="child.key"
      ></menu-item>
      <menu-sub v-else :key="child.key"></menu-sub>
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
      default: () => {},
    },
  },
  components: {
    menuItem,
  },
};
</script>

<style></style>
