$(function () {
  // 概览Tab chart option
  var option1 = {
    title: {
      text: '各行政区三级航道里程占比',
      textStyle: { color: '#fff', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        name: '三级航道里程占比',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '55%'],
        color: [
          '#65A243',
          '#6AA3F0',
          '#4172FF',
          '#2D54C6',
          '#33BDDC',
          '#5FF0CC',
          '#EB7527',
          '#4BA5DE',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: true,
          length: 6,
          length2: 10,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 9, name: '常熟' },
          { value: 5, name: '张家港' },
          { value: 12, name: '昆山' },
          { value: 19, name: '市区' },
          { value: 21, name: '吴中区' },
          { value: 10, name: '太仓市' },
          { value: 6, name: '吴江市' },
          { value: 8, name: '相城区' },
        ],
      },
    ],
  };
  var option2 = {
    title: {
      text: '各行政区四级航道里程占比',
      textStyle: { color: '#fff', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        name: '四级航道里程占比',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '55%'],
        color: [
          '#65A243',
          '#6AA3F0',
          '#4172FF',
          '#2D54C6',
          '#33BDDC',
          '#5FF0CC',
          '#EB7527',
          '#4BA5DE',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: true,
          length: 6,
          length2: 10,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 23, name: '常熟' },
          { value: 4, name: '张家港' },
          { value: 25, name: '昆山' },
          { value: 19, name: '市区' },
          { value: 15, name: '吴中区' },
          { value: 10, name: '太仓市' },
          { value: 10, name: '吴江市' },
          { value: 29, name: '相城区' },
        ],
      },
    ],
  };
  var option3 = {
    title: {
      text: '各行政区五级航道里程占比',
      textStyle: { color: '#fff', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        name: '五级航道里程占比',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '55%'],
        color: [
          '#65A243',
          '#6AA3F0',
          '#4172FF',
          '#2D54C6',
          '#33BDDC',
          '#5FF0CC',
          '#EB7527',
          '#4BA5DE',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: true,
          length: 6,
          length2: 10,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 8, name: '常熟' },
          { value: 17, name: '张家港' },
          { value: 21, name: '昆山' },
          { value: 22, name: '市区' },
          { value: 23, name: '吴中区' },
          { value: 16, name: '太仓市' },
          { value: 28, name: '吴江市' },
          { value: 2, name: '相城区' },
        ],
      },
    ],
  };
  var option4 = {
    title: {
      text: '各行政区六级航道里程占比',
      textStyle: { color: '#fff', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        name: '六级航道里程占比',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '55%'],
        color: [
          '#65A243',
          '#6AA3F0',
          '#4172FF',
          '#2D54C6',
          '#33BDDC',
          '#5FF0CC',
          '#EB7527',
          '#4BA5DE',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: true,
          length: 6,
          length2: 10,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 27, name: '常熟' },
          { value: 21, name: '张家港' },
          { value: 14, name: '昆山' },
          { value: 4, name: '市区' },
          { value: 23, name: '吴中区' },
          { value: 18, name: '太仓市' },
          { value: 12, name: '吴江市' },
          { value: 8, name: '相城区' },
        ],
      },
    ],
  };

  var myChart;
  var content = $('.chart__content')[0];

  myChart = echarts.init(content);
  myChart.setOption(option1);

  $('.chart__tab').on('click', 'li', function () {
    var index = $(this).index();

    $('.chart__tab li').removeClass('active');
    $(this).addClass('active');

    switch (index) {
      case 0:
        myChart.setOption(option1);
        break;
      case 1:
        myChart.setOption(option2);
        break;
      case 2:
        myChart.setOption(option3);
        break;
      case 3:
        myChart.setOption(option4);
        break;
      default:
        break;
    }
  });

  // 全市各行政区航道里程占比 courseRate
  var courseRateOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: ['四级', '六级', '七级', '等外级'],
      textStyle: { color: '#fff' },
      top: '20',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    yAxis: {
      type: 'value',
      axisTick: { show: false },
      axisLabel: { color: '#70ACDE' },
      axisLine: { lineStyle: { color: '#70ACDE', width: 0 } },
      splitLine: { lineStyle: { color: ['#70ACDE'] } },
    },
    xAxis: {
      type: 'category',
      axisTick: { show: false },
      axisLabel: { color: ['#70ACDE'] },
      axisLine: { lineStyle: { color: ['#70ACDE'] } },
      data: [
        '常熟',
        '张家港',
        '昆山',
        '市区',
        '吴中区',
        '太仓市',
        '吴江区',
        '相城区',
      ],
    },
    series: [
      {
        name: '四级',
        type: 'bar',
        stack: '总量',
        label: {
          show: false,
          position: 'insideRight',
        },
        data: [284, 271, 248, 208, 289, 248, 232, 228],
        color: ['#65A243'],
        barWidth: 20,
      },
      {
        name: '六级',
        type: 'bar',
        stack: '总量',
        label: {
          show: false,
          position: 'insideRight',
        },
        data: [243, 221, 296, 220, 276, 214, 296, 224],
        color: ['#8FEB7B'],
        barWidth: 20,
      },
      {
        name: '七级',
        type: 'bar',
        stack: '总量',
        label: {
          show: false,
          position: 'insideRight',
        },
        data: [281, 279, 206, 276, 221, 290, 204, 248],
        color: ['#F9A055'],
        barWidth: 20,
      },
      {
        name: '等外级',
        type: 'bar',
        stack: '总量',
        label: {
          show: false,
          position: 'insideRight',
        },
        data: [265, 247, 224, 212, 286, 243, 256, 298],
        color: ['#4172FF'],
        barWidth: 20,
      },
    ],
  };
  var courseRateChart = echarts.init(document.getElementById('courseRate'));
  courseRateChart.setOption(courseRateOption);
});
