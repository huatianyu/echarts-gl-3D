<template>
  <div class="eacher-container">
    <p class="progress-title">试卷运送车辆统计</p>
    <div style="width: 50%">
      <a-progress
        :stroke-color="{
          from: '#108ee9',
          to: '#87d068'
        }"
        status="active"
        :percent="onOffRate"
        :strokeWidth="3"
        :show-info="false"
      />
    </div>
    <div id="vehiclesCount" class="echars-background"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'vehiclesCount',
  props: ['offlineNum', 'onlineNum', 'onOffRate'],
  data() {
    return {
      indexStyle: 1,
      echart: null
    }
  },
  created() {},
  mounted() {
    this.echartShow(this.offlineNum, this.onlineNum)
  },
  methods: {
    echartShow(offlineNum, onlineNum) {
      if (this.echart != null) {
        return
      }
      this.echart = echarts.init(document.getElementById('vehiclesCount'))
      var tipData = [
        {
          value: offlineNum,
          legendname: '离线车辆',
          name: '离线车辆' + offlineNum + '辆',
          itemStyle: { color: '#0DBCE5' }
        },
        {
          value: onlineNum,
          legendname: '在线车辆',
          name: '在线车辆' + onlineNum + '辆',
          itemStyle: { color: '#1C5ED6' }
        }
      ]
      //职称结构图表
      this.echart.setOption({
        grid: { containLabel: true },
        title: [
          {
            text: offlineNum + onlineNum + '辆',
            subtext: '全部车辆',
            textStyle: {
              fontSize: 17,
              color: '#00EDC7'
            },
            subtextStyle: {
              fontSize: 13,
              color: '#CFD1D5'
            },
            textAlign: 'center',
            x: '33%',
            y: '38%'
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: function(parms) {
            var str =
              parms.marker +
              '' +
              parms.data.legendname +
              '</br>' +
              '数量：' +
              parms.data.value +
              '辆' +
              '</br>' +
              '占比：' +
              parms.percent +
              '%'
            return str
          }
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: '55%',
          x: 'right',
          y: 'bottom',
          align: 'left',
          // top: 'middle',
          textStyle: {
            color: '#8C8C8C'
          },
          height: 250
        },
        series: [
          {
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['40%', '70%'],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
              //展示文本设置
              normal: {
                show: true, //展示
                position: 'outside' // outside表示文本显示位置为外部
              },

              emphasis: {
                //文本样式
                show: true, //展示
                textStyle: {
                  //文本样式
                  fontSize: '12',
                  fontWeight: '600'
                }
              }
            },
            labelLine: {
              //引导线设置
              normal: {
                show: true //引导线显示
              }
            },
            data: tipData
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.eacher-container {
  background-size: 100% 100%;
  // height: 350px;

  // background-image: url('../../../assets/home-page/left-echarImg.png');
  width: 100%;
  padding: 0 50px;
  padding-left: 50px;
  .echars-background {
    background-size: 100% 100%;
    height: 180px;
    background-image: url('../../../assets/home-page/rect.png');
  }
  #vehiclesCount {
    width: 100%;
  }
  .progress-title {
    height: 10px;
    float: left;
  }
}
</style>
