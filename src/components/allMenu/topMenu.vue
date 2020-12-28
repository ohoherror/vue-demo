<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="display:flex"
    >
      <div v-for="item in list" :key="item.key">
        <el-menu-item
          @click="toMenuItem(item)"
          :index="item.key"
          v-if="item.children.length === 0"
          >{{ item.title }}</el-menu-item
        >
        <el-submenu :index="item.key" v-else>
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            :index="subItem.key"
            v-for="subItem in item.children"
            :key="subItem.key"
            >{{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "topMenu",
  data() {
    return {};
  },
  props: {
    list: Array,
    isChild: Boolean,
  },
  methods: {
    handleSelect() {},
    toMenuItem(item) {
        console.log(item)
    },
  },
};
</script>

<style></style>
