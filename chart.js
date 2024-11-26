var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  color: ["red", "blue", "green"],
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: "Min",
      type: 'bar',
    },
    {
      name: "Max",
      type: 'bar'
    },
    {
      name: "Avg",
      type: 'bar'
    }
  ]
};


option.series[0].data = [10000, 25000, 38000]
option.series[1].data = [15000, 35000, 48000]
option.series[2].data = ["11200", "202700", "190000",]

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);