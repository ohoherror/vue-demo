<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="item in allTabs" :key="item.key" :name="item.key">
      <router />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data(){
    return{
      allTabs:[],
      activeName:null
    }
  },
  methods:{
    handleClick(){}
  }
};
</script>

<style></style>
