<template>
  <div class="eacher-container">
    <p class="progress-title">工作人员统计</p>
    <div style="width: 50%">
      <a-progress
        :stroke-color="{
          from: '#108ee9',
          to: '#87d068'
        }"
        status="active"
        :percent="escortPersonInfo.rate * 100"
        :strokeWidth="3"
        :show-info="false"
      />
    </div>
    <div class="build-bg">
      <div class="number-info">
        <div class="left-item">
          <img :src="getImgUrl('home-page/secretroom.png')" />
        </div>
        <div class="right-item">
          <p class="title">保密室值守人员</p>
          <p class="number">{{ escortPersonInfo.bmsPersonCount }}</p>
        </div>
      </div>
      <div class="number-info">
        <div class="left-item">
          <img :src="getImgUrl('home-page/examescort.png')" />
        </div>
        <div class="right-item">
          <p class="title">试卷运送负责人</p>
          <p class="number">{{ escortPersonInfo.escortPersonCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'peopleNumber',
  props: ['escortPersonInfo'],
  data() {
    return {
      indexStyle: 1
    }
  },
  created() {},
  mounted() {},
  methods: {
    getImgUrl(icon) {
      return require('@/assets/' + icon)
    }
  }
}
</script>
<style lang="less" scoped>
.eacher-container {
  padding: 0 50px;
  .progress-title {
    height: 10px;
    float: left;
  }
  .build-bg {
    background-size: 100% 100%;
    height: 200px;
    background-image: url('../../../assets/home-page/person-bg.png');
    .number-info {
      height: 80px;
      width: 100%;
      display: flex;
      direction: row;
      .left-item {
        img {
          margin-top: 10px;
        }
      }
      .right-item {
        width: 100%;
        .title,
        .number {
          height: 10px;
        }
        .title {
          color: #00bfff;
          font-size: 14px;
        }
        .number {
          font-family: HYGangYiTi;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
