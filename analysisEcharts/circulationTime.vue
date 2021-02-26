<template>
  <div class="eacher-container">
    <p class="progress-title">试卷流转进行时间</p>
    <div style="width: 50%">
      <a-progress
        :stroke-color="{
          from: '#108ee9',
          to: '#87d068'
        }"
        status="active"
        :percent="timeRate"
        :strokeWidth="3"
        :show-info="false"
      />
    </div>
    <div class="build-bg">
      <div class="time-info">
        <div class="left-item">
          <div class="time">{{ day }}</div>
          <div class="text">天</div>
        </div>
        <div class="right-item">
          <div class="time">{{ hour }}</div>
          <div class="text">小时</div>
        </div>
      </div>
      <div class="time-info">
        <div class="left-item">
          <div class="time">{{ minute }}</div>
          <div class="text">分钟</div>
        </div>
        <div class="right-item">
          <div class="time">{{ second }}</div>
          <div class="text">秒钟</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'circulationTime',
  props: ['hour', 'minute', 'second', 'day', 'timeRate'],
  data() {
    return {
      indexStyle: 1,
      echart: null
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
@font-face {
  font-family: myFirstFont;
  src: url('../../../assets/customFont/UnidreamLED.woff');
}
.eacher-container {
  padding: 0 50px;
  .echars-background {
    height: 150px;
    background-size: 100% 100%;
  }
  .progress-title {
    height: 10px;
    float: left;
  }
  .build-bg {
    background-size: 100% 100%;
    height: 200px;
    background-image: url('../../../assets/home-page/timedetail-bg.png');
    .time-info {
      height: 80px;
      width: 100%;
      display: flex;
      direction: row;
      margin: 20px;
      .left-item,
      .right-item {
        display: flex;
        direction: column;
        width: 100%;
        .time {
          min-width: 40px;
          color: #00ffd4;
          font-size: 35px;
          font-family: myFirstFont;
          background-size: 100% 100%;
          background: url('../../../assets/home-page/time-bg.png') no-repeat;
          background-position: 0px 35px;
          background-size: cover;
        }
        .text {
          margin-left: 10px;
          font-family: myFirstFont;
          font-size: 28px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
