<template>
  <el-menu-item :index="menu.path">
    {{ menu.title }}
  </el-menu-item>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
};
</script>

<style></style>
