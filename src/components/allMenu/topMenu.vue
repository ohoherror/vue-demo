<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="display:flex"
    >
      <template v-for="item in list">
        <menu-item
          :index="item.path"
          v-if="item.children === undefined"
          :key="item.key"
          :menu="item"
        ></menu-item>
        <menu-sub v-else :key="item.key" :menu="item"></menu-sub>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuItem from "../menuItem";
import menuSub from "../menuSub";
import { mapMutations } from "vuex";
export default {
  name: "topMenu",
  data() {
    return {};
  },
  props: {
    list: Array,
    isChild: Boolean
  },
  components: {
    menuItem,
    menuSub
  },
  methods: {
    ...mapMutations(["getMenu"]),
    handleSelect(index, indexPath) {
      // console.log(index)
      // console.log(indexPath)
      this.getMenu(indexPath);
      this.$router.push(index);
      // console.log(this.$store.menuPath);
    },
    toMenuItem(item) {
      console.log(item);
    }
  }
};
</script>

<style></style>
