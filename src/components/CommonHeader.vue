<template>
  <header>
    <div class="left-content">
      <el-button type="palin" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img :src="userImg" class="userImg" alt="大頭貼" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>個人訊息</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      userImg: require('../assets/images/user.png'),
    }
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.right-content {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #999;
    font-weight: 400;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>
