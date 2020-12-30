<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="false"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu v-for="item in list" :key="item.key" :index="item.key">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <template>
          <div v-for="subitem in item.children" :key="subitem.key">
            <menu-item
              :index="subitem.path"
              v-if="subitem.children === undefined"
              :key="subitem.key"
              :menu="subitem"
            ></menu-item>
            <menu-sub v-else :key="subitem.key" :menu="subitem"></menu-sub>
          </div>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menuItem from "../menuItem";
import menuSub from "../menuSub";

export default {
  name: "topMenu",
  data() {
    return { list: [] };
  },
  // props: {
  //   list: Array,
  //   isChild: Boolean
  // },
  components: {
    menuItem,
    menuSub
  },
  mounted() {
    this.list = this.$store.state.asideMenu;
  },
  watch: {
    $route: {
      handler(val) {
        console.log(val);
        this.list = this.$store.state.asideMenu;
      }
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index);
      console.log(indexPath);
      // this.getMenu(indexPath);
      // this.$router.push(index);
      // // console.log(this.$store.menuPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toMenuItem(item) {
      console.log(item);
    }
  }
};
</script>

<style></style>
