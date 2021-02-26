<template>
  <div class="eacher-container">
    <p class="progress-title">押运节点启用统计</p>
    <div style="width: 50%">
      <a-progress
        :stroke-color="{
          from: '#108ee9',
          to: '#87d068'
        }"
        status="active"
        :percent="escortInfoDetail.rate * 100"
        :strokeWidth="3"
        size="small"
        :show-info="false"
      />
    </div>
    <div id="nodeStart" class="echars-background"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'nodeStart',
  props: {
    escortInfoDetail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      indexStyle: 1,
      echart: null
    }
  },
  created() {},
  mounted() {
    let escortInfoKey = ['考试考点', '考试保密室', '考试机构']
    let escortInfoItem = []
    let tempArr = this.escortInfoDetail
    if (tempArr) {
      for (var key in tempArr) {
        let item = tempArr[key]
        if (key != 'rate') {
          escortInfoItem.push(item)
        }
      }
      this.echartShow(escortInfoKey, escortInfoItem)
    }
  },
  methods: {
    echartShow(escortInfoKey, escortInfoItem) {
      if (this.echart != null) {
        return
      }
      let self = this
      // 任务量统计图表
      self.echart = echarts.init(document.getElementById('nodeStart'))
      const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function(ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c0 = [shape.x, shape.y]
          const c1 = [shape.x - 9, shape.y - 9]
          const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9]
          const c3 = [xAxisPoint[0], xAxisPoint[1]]
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath()
        }
      })
      const CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function(ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c1 = [shape.x, shape.y]
          const c2 = [xAxisPoint[0], xAxisPoint[1]]
          const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
          const c4 = [shape.x + 18, shape.y - 9]
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath()
        }
      })
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function(ctx, shape) {
          const c1 = [shape.x, shape.y]
          const c2 = [shape.x + 18, shape.y - 9]
          const c3 = [shape.x + 9, shape.y - 18]
          const c4 = [shape.x - 9, shape.y - 9]
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath()
        }
      })
      echarts.graphic.registerShape('CubeLeft', CubeLeft)
      echarts.graphic.registerShape('CubeRight', CubeRight)
      echarts.graphic.registerShape('CubeTop', CubeTop)

      self.echart.setOption({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(params, ticket, callback) {
            const item = params[1]
            return item.name + ' : ' + item.value
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          top: '28%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: escortInfoKey,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#A5D4E5'
            }
          },
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0,
            rotate: '45'
          },
          axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,

            lineStyle: {
              color: '#7DFFFD'
            }
          },
          axisLabel: {
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            type: 'custom',
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)])
              return {
                type: 'group',
                children: [
                  {
                    type: 'CubeLeft',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#1BC9F1'
                        },
                        {
                          offset: 1,
                          color: '#1C7084'
                        }
                      ])
                    }
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#1C7287'
                        },
                        {
                          offset: 1,
                          color: '#1BC3EB'
                        }
                      ])
                    }
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#06728A'
                        },
                        {
                          offset: 1,
                          color: '#06728A'
                        }
                      ])
                    }
                  }
                ]
              }
            },
            data: escortInfoItem
          },
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: e => {
                  return e.value + '个'
                },
                fontSize: 16,
                color: '#fff',
                offset: [2, -25]
              }
            },
            itemStyle: {
              color: 'transparent'
            },
            tooltip: {},
            data: escortInfoItem
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
  // height: 400px;
  // background-image: url('../../../assets/home-page/right-echarImg.png');

  width: 100%;
  padding: 0 50px;
  .echars-background {
    background-size: 100% 100%;
    height: 200px;
    background-image: url('../../../assets/home-page/rect.png');

    // background-image: url('../../../assets/home-page/left-echarImg.png');
  }
  .progress-title {
    height: 10px;
    float: left;
  }
}
</style>
