<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c65" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首頁',
          icon: 's-home',
        },
        {
          path: '/video',
          name: 'video',
          label: '影片管理',
          icon: 'video-play',
        },
        {
          path: '/user',
          name: 'user',
          label: '用戶管理',
          icon: 'user',
        },
        {
          label: '其他',
          name: 'other',
          icon: 'video-play',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '頁面一',
              icon: 'setting',
            },
          ],
        },
      ],
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    },
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
}
</script>

<style lang="scss">
.el-menu {
  height: 100%;
  border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
