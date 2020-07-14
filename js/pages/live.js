$(function () {
  // 航标
  var naviMarkOption = {
    title: {
      show: false,
    },
    tooltip: {
      show: false,
    },
    series: [
      {
        name: '绿化总里程',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '40%'],
        color: [
          '#EC7628',
          '#1EEC9C',
          '#6BA4F1',
          '#4172FF',
          '#684DCE',
          '#33BEDC',
        ],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return params.name + '\n' + params.value;
          },
        },
        labelLine: {
          show: false,
          length: 8,
          length2: 13,
        },
        // hoverOffset: 5,
        // selectedOffset: 5,
        data: [
          { value: 11, name: '姑苏区' },
          { value: 20, name: '常熟' },
          { value: 5, name: '张家港市' },
          { value: 7, name: '相城区' },
          { value: 40, name: '吴中区' },
          { value: 50, name: '吴江区' },
          { value: 2, name: '太仓市' },
          { value: 22, name: '昆山市' },
        ],
      },
    ],
  };

  var NMChart = echarts.init(document.getElementById('navigationMarkChart'));
  NMChart.setOption(naviMarkOption);

  // 标志牌
  // var waterOption = {
  //   title: {
  //     text: 18 + ' {a|个}',
  //     textStyle: {
  //       fontSize: 32,
  //       fontFamily: 'Microsoft Yahei',
  //       fontWeight: '700',
  //       color: '#32EAFA',
  //       rich: {
  //         a: {
  //           fontSize: 14,
  //         },
  //       },
  //     },
  //     x: 'center',
  //     y: '40%',
  //   },
  //   series: [
  //     {
  //       type: 'liquidFill',
  //       radius: '60%',
  //       center: ['50%', '55%'],
  //       data: [0.35, 0.35], // data个数代表波浪数
  //       backgroundStyle: {
  //         color: 'rgba(104,151,175,0.3)',
  //       },
  //       color: [
  //         {
  //           type: 'linear',
  //           x: 0,
  //           y: 0,
  //           x2: 0,
  //           y2: 1,
  //           colorStops: [
  //             {
  //               offset: 1,
  //               color: 'rgba(58, 71, 212, 0)',
  //             },
  //             {
  //               offset: 0.5,
  //               color: 'rgba(31, 222, 225, .2)',
  //             },
  //             {
  //               offset: 0,
  //               color: 'rgba(31, 222, 225, 1)',
  //             },
  //           ],
  //         },
  //       ],
  //       label: {
  //         show: false,
  //       },
  //       outline: {
  //         show: false,
  //       },
  //     },
  //   ],
  // };
  // var titleValue = 78;
  // var gootOption = {
  //   angleAxis: {
  //     axisLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //     splitLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     min: 0,
  //     max: 100,
  //     boundaryGap: ['0', '100'],
  //     startAngle: 90,
  //   },
  //   radiusAxis: {
  //     type: 'category',
  //     axisLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //     data: ['a', 'b', 'c'],
  //     z: 10,
  //   },
  //   polar: {
  //     radius: '60%',
  //     center: ['50%', '55%'],
  //   },
  //   title: {
  //     text: titleValue + '{value|%}',
  //     top: '48%',
  //     left: 'center',
  //     textStyle: {
  //       fontSize: 32,
  //       fontFamily: 'Microsoft Yahei',
  //       fontWeight: '700',
  //       color: '#32EAFA',
  //       rich: {
  //         value: {
  //           fontSize: 14,
  //         },
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'bar',
  //       data: [, , titleValue],
  //       z: 1,
  //       coordinateSystem: 'polar',
  //       barMaxWidth: 10,
  //       roundCap: true,
  //       color: '#1DC194',
  //       barGap: '-100%',
  //     },
  //     {
  //       type: 'bar',
  //       data: [, , 100],
  //       z: 0,
  //       silent: true,
  //       animation: false,
  //       coordinateSystem: 'polar',
  //       barMaxWidth: 10,
  //       name: 'C',
  //       roundCap: true,
  //       color: '#325075',
  //       barGap: '-100%',
  //     },
  //   ],
  //   tooltip: {
  //     show: false,
  //   },
  // };

  // 驳岸损坏
  // var maxValueKm = 200; // 损坏公里的总数
  // var halfMax = maxValueKm / 2; // 为了形成半圆
  // var breakValueKm = 56; // 实际损坏的公里数
  // var breakDistanceOption = {
  //   angleAxis: {
  //     axisLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //     splitLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     min: 0,
  //     max: maxValueKm,
  //     boundaryGap: ['0', '100'],
  //     startAngle: 180,
  //   },
  //   radiusAxis: {
  //     type: 'category',
  //     axisLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //     data: ['a', 'b', 'c'],
  //     z: 10,
  //   },
  //   polar: {
  //     radius: '80%',
  //     center: ['50%', '55%'],
  //   },
  //   title: {
  //     text: breakValueKm + '{value|公里}',
  //     top: '48%',
  //     left: 'center',
  //     textStyle: {
  //       fontSize: 32,
  //       fontFamily: 'Microsoft Yahei',
  //       fontWeight: '700',
  //       color: '#32EAFA',
  //       rich: {
  //         value: {
  //           fontSize: 14,
  //         },
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'bar',
  //       data: [, , breakValueKm],
  //       z: 1,
  //       coordinateSystem: 'polar',
  //       barMaxWidth: 10,
  //       roundCap: true,
  //       color: '#32EAFA',
  //       barGap: '-100%',
  //     },
  //     {
  //       type: 'bar',
  //       data: [, , halfMax],
  //       z: 0,
  //       silent: true,
  //       animation: false,
  //       coordinateSystem: 'polar',
  //       barMaxWidth: 10,
  //       name: 'C',
  //       roundCap: true,
  //       color: '#325075',
  //       barGap: '-100%',
  //     },
  //   ],
  //   tooltip: {
  //     show: false,
  //   },
  // };
  // var breakRate = 3;
  // var breakRateOption = {
  //   angleAxis: {
  //     axisLine: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //     splitLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     min: 0,
  //     max: 100,
  //     boundaryGap: ['0', '100'],
  //     startAngle: 90,
  //   },
  //   radiusAxis: {
  //     type: 'category',
  //     axisLine: {
  //       show: false,
  //     },
  //     axisTick: {
  //       show: false,
  //     },
  //     axisLabel: {
  //       show: false,
  //     },
  //     data: ['a', 'b', 'c'],
  //     z: 10,
  //   },
  //   polar: {
  //     radius: '60%',
  //     center: ['50%', '55%'],
  //   },
  //   title: {
  //     text: breakRate + '{value|%}',
  //     top: '48%',
  //     left: 'center',
  //     textStyle: {
  //       fontSize: 32,
  //       fontFamily: 'Microsoft Yahei',
  //       fontWeight: '700',
  //       color: '#32EAFA',
  //       rich: {
  //         value: {
  //           fontSize: 14,
  //         },
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'bar',
  //       data: [, , breakRate],
  //       z: 1,
  //       coordinateSystem: 'polar',
  //       barMaxWidth: 10,
  //       roundCap: true,
  //       color: '#1DC194',
  //       barGap: '-100%',
  //     },
  //     {
  //       type: 'bar',
  //       data: [, , 100],
  //       z: 0,
  //       silent: true,
  //       animation: false,
  //       coordinateSystem: 'polar',
  //       barMaxWidth: 10,
  //       name: 'C',
  //       roundCap: true,
  //       color: '#325075',
  //       barGap: '-100%',
  //     },
  //   ],
  //   tooltip: {
  //     show: false,
  //   },
  // };

  // var waterChart = echarts.init(document.getElementById('water'));
  // var goodChart = echarts.init(document.getElementById('good'));
  // var breakDistanceChart = echarts.init(
  //   document.getElementById('breakDistance')
  // );
  // var breakRateChart = echarts.init(document.getElementById('breakRate'));

  // Tab
  $('.cbs__tab').on('click', 'li', function () {
    var $this = $(this);
    var index = $this.index();
    $('.cbs__build-intro').hide();
    $('.cbs__tab li').removeClass('active');
    $this.addClass('active');
    $('.other__tab span').css({ visibility: 'visible' }).addClass('active');
    $('.other__tab span:last-child').removeClass('active');
    $this.parent().siblings('.cbs__tab-content').hide().eq(index).show();

    switch (index) {
      case 0:
        NMChart.clear();
        NMChart.setOption(naviMarkOption);
        break;
      // case 1:
      //   waterChart.clear();
      //   goodChart.clear();
      //   waterChart.setOption(waterOption);
      //   goodChart.setOption(gootOption);
      //   break;
      // case 4:
      //   breakDistanceChart.clear();
      //   breakRateChart.clear();
      //   breakDistanceChart.setOption(breakDistanceOption);
      //   breakRateChart.setOption(breakRateOption);
      //   break;
      default:
        break;
    }
  });
});
