<template>
  <div class="map-echart">
    <div class="time">
      <div class="time-title"></div>
      <div class="time-details">{{ startDate }}</div>
    </div>
    <div id="mapEchart" class="echars-background"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/province/liaoning.js'
import 'echarts-gl'
import $ from 'jquery'

export default {
  name: 'mapEchart',
  props: ['startDate'],
  data() {
    return {}
  },

  created() {},
  beforeDestroy() {
    if (!this.echart) {
      return
    }
    this.echart.dispose()
    this.echart = null
  },
  mounted() {
    this.echartShow()
  },
  methods: {
    echartShow() {
      if (this.echart != null) {
        return
      }
      $('#mapEchart').width($('#mapEchart').width())
      $('#mapEchart').height($('#mapEchart').height())
      this.echart = echarts.init(document.getElementById('mapEchart'), 'light')

      this.echart.setOption({
        geo3D: {
          type: 'map3D',
          selectedNode: 'single',
          boxDepth: 'auto',
          instancing: true,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          height: '100%',
          map: '辽宁',
          boxHeight: 2.2,
          regionHeight: 6,
          roam: true,
          label: {
            show: true,
            textStyle: { color: 'rgba(0,0,0,0)', fontSize: 12, backgroundColor: 'rgba(0,0,0,0)' }
          },
          itemStyle: { marginTop: 0, paddingTop: 0, color: '#16C8F5', borderWidth: 1, borderColor: '#088CCA' },
          viewControl: { distance: 110, rotateSensitivity: 0, zoomSensitivity: 0 },
          emphasis: { label: { show: true, textStyle: { color: '#fff' }, itemStyle: { color: 'black' } } },
          regions: [{ name: '沈阳', itemStyle: { areaColor: 'black' } }]
        },
        series: [
          {
            //配置路径
            type: 'lines3D',
            coordinateSystem: 'geo3D',
            polyline: 'true',
            animation: 'true',
            blendMode: 'source-over',
            zlevel: 99999,
            effect: {
              show: true,
              trailWidth: 3,
              trailOpacity: 1,
              trailLength: 2,
              constantSpeed: 5
            },
            lineStyle: {
              color: '#FFCF00',
              opacity: 1,
              width: 1.5
            },
            data: [
              {
                coords: [
                  [123.38, 41.8],
                  [123.73, 41.3]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [123.17, 41.28]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [121.15, 41.13]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [122.75, 40.85]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [122.18, 40.65]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [122.03, 41.02]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [120.83, 40.77]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },

              {
                coords: [
                  [123.38, 41.8],
                  [124.37, 40.13]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [121.62, 38.92]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [120.42, 41.58]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [123.85, 42.32]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              },
              {
                coords: [
                  [123.38, 41.8],
                  [121.65, 42]
                ],
                // 数据值
                value: 100,
                // 数据名

                // 线条样式
                lineStyle: {}
              }
            ]
          },
          {
            //配置位置标记点
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbol: 'circle',
            symbolSize: 5,
            blendMode: 'source-over',
            zlevel: 11,
            label: {
              show: true,
              position: 'top',
              formatter: '{b}',
              textStyle: {
                color: '#000',
                fontFamily: 'Microsoft YaHei'
              }
            },
            itemStyle: {
              color: '#FFCF00' //标记颜色
            },
            data: [
              { value: [121.62, 38.92] },
              { value: [123.97, 41.97] },
              { value: [123.73, 41.3] },
              { value: [123.17, 41.28] },
              { value: [121.15, 41.13] },
              { value: [122.75, 40.85] },
              { value: [122.18, 40.65] },
              { value: [122.03, 41.02] },
              { value: [120.83, 40.77] },
              { value: [124.37, 40.13] },
              { value: [120.42, 41.58] },
              { value: [123.85, 42.32] },
              { value: [121.65, 42] }
            ]
          },
          {
            //配置攻击点
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbol:
              'path://M56.51,22A31.39,31.39,0,1,0,87.9,53.37,31.39,31.39,0,0,0,56.51,22Zm0-22A56.51,56.51,0,0,1,113,56.51q0,31.21-56.51,82.16Q0,87.72,0,56.51A56.51,56.51,0,0,1,56.51,0Z',
            symbolSize: function(val) {
              var ret
              if (val[2] >= 0 && val[2] < 1000) {
                ret = 10
              } else {
                ret = 25
              }
              return ret
            },
            blendMode: 'source-over',
            zlevel: 1000,
            label: {
              show: true,
              position: 'top',
              formatter: '{b}',
              // formatter: function(params) {
              //   var ret = params.value[2]
              //   return ret
              // },
              textStyle: {
                color: '#000',
                fontFamily: 'Microsoft YaHei',
                fontWeight: 'bold'
              }
            },
            itemStyle: {
              show: true,
              color: '#eb4f38'
            },
            data: [{ name: '中心', value: [123.38, 41.8] }]
          }
        ]
      })
      window.onresize = this.echart.resize
      let than = this.echart
      this.echart.on('click', function(e) {
        if (than.name == e.name) {
          return false
        }
        than.styles.left = e.event.enent.offsetX - 132 + 'px'
        than.styles.top = e.event.enent.offsetX + 80 + 'px'
        than.name = e.name
        than.tabChange(than.btn[0])
      })
    }
  }
}
</script>
<style lang="less" scoped>
@font-face {
  font-family: myFirstFont;
  src: url('../../../assets/customFont/UnidreamLED.woff');
}
.map-echart {
  // background-image: url('../../../assets/home-page/center-ehcarImg.png');
  background-size: 100% 100%;
  .time {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: center;
    align-items: center;
    .time-title {
      width: 260px;
      height: 30%;
      background-size: 80% 100%;
      background-position: center;
      background-image: url('../../../assets/home-page/start-time.png');
    }
    .time-details {
      color: #00ffd4;
      font-size: 60px;
      height: 45px;
      font-family: myFirstFont;
      font-size: 44px;
    }
  }
  .echars-background {
    // position: relative;
    // top: -80px;
    height: 500px;
    width: 100%;
    background-size: 100% 100%;
  }
}
</style>
