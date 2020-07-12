$(function () {
  var option1 = {
    title: {
      text: '各行政区绿化总里程分布',
      textStyle: { color: '#32eafa', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: false,
    },

    series: [
      {
        name: '绿化总里程',
        type: 'pie',
        radius: ['40%', '60%'],
        color: [
          '#3bdd87',
          '#6ba4f1',
          '#32d7e6',
          '#3565f1',
          '#39c6a3',
          '#ae9a6f',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.value + 'km';
          },
        },
        labelLine: {
          show: false,
          length: 8,
          length2: 13,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 28, name: '张家港' },
          { value: 22, name: '吴中' },
          { value: 12, name: '太仓1' },
          { value: 14, name: '太仓2' },
          { value: 13, name: '昆山' },
          { value: 11, name: '常熟' },
        ],
      },
    ],
  };
  var option3 = {
    title: {
      text: '各行政区污水回收设施分布',
      textStyle: { color: '#32eafa', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: false,
    },

    series: [
      {
        name: '污水回收',
        type: 'pie',
        radius: ['40%', '60%'],
        color: [
          '#3bdd87',
          '#6ba4f1',
          '#32d7e6',
          '#3565f1',
          '#39c6a3',
          '#ae9a6f',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: false,
          length: 8,
          length2: 13,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 2, name: '张家港' },
          { value: 0, name: '吴中' },
          { value: 1, name: '太仓1' },
          { value: 1, name: '太仓2' },
          { value: 0, name: '昆山' },
          { value: 1, name: '常熟' },
        ],
      },
    ],
  };
  var option2 = {
    title: {
      text: '各行政区环境监测设施分布',
      textStyle: { color: '#32eafa', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: false,
    },

    series: [
      {
        name: '环境监测',
        type: 'pie',
        radius: ['40%', '60%'],
        color: [
          '#3bdd87',
          '#6ba4f1',
          '#32d7e6',
          '#3565f1',
          '#39c6a3',
          '#ae9a6f',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: false,
          length: 8,
          length2: 13,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 2, name: '张家港' },
          { value: 1, name: '吴中' },
          { value: 2, name: '太仓1' },
          { value: 1, name: '太仓2' },
          { value: 1, name: '昆山' },
          { value: 1, name: '常熟' },
        ],
      },
    ],
  };
  var option4 = {
    title: {
      text: '各行政区充电桩设施分布',
      textStyle: { color: '#32eafa', fontSize: 16 },
      textAlign: 'left',
      left: 'center',
    },
    tooltip: {
      show: false,
    },

    series: [
      {
        name: '充电桩',
        type: 'pie',
        radius: ['40%', '60%'],
        color: [
          '#3bdd87',
          '#6ba4f1',
          '#32d7e6',
          '#3565f1',
          '#39c6a3',
          '#ae9a6f',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: false,
          length: 8,
          length2: 13,
        },
        hoverOffset: 5,
        selectedOffset: 5,
        data: [
          { value: 2, name: '张家港' },
          { value: 1, name: '吴中' },
          { value: 2, name: '太仓1' },
          { value: 5, name: '太仓2' },
          { value: 3, name: '昆山' },
          { value: 4, name: '常熟' },
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
});
