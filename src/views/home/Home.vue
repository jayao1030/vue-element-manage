<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="大頭照" />
          <div class="userInfo">
            <p class="name">Joey</p>
            <p class="access">管理員</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登入時間: <span>2021-6-16</span></p>
          <p>上次登入地點: <span>彰化</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 20px"> </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="price">${{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover"> <div style="height: 260px"></div></el-card>
        <el-card shadow="hover"> <div style="height: 260px"></div></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      countData: [
        {
          name: '今日支付訂單',
          value: 324,
          icon: 'document-checked',
          color: '#2ec7ce',
        },
        {
          name: '今日收藏訂單',
          value: 199,
          icon: 'star-on',
          color: '#F5AD0A',
        },
        {
          name: '今日未支付訂單',
          value: 66,
          icon: 's-goods',
          color: '#F5015E',
        },
        {
          name: '本月支付訂單',
          value: 324,
          icon: 'document-checked',
          color: '#2ec7ce',
        },
        {
          name: '本月收藏訂單',
          value: 199,
          icon: 'star-on',
          color: '#F5AD0A',
        },
        {
          name: '本月未支付訂單',
          value: 66,
          icon: 's-goods',
          color: '#F5015E',
        },
      ],
    }
  },
  mounted() {
    this.$http.get('/home/getData').then((res) => console.log(res.data))
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/home';
</style>
