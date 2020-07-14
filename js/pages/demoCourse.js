$(function () {
  // 示范航线数量
  var countValue = 2;
  var countOption = {
    title: {
      text: countValue + '{a|条}',
      textStyle: {
        fontSize: 26,
        fontFamily: 'Microsoft Yahei',
        fontWeight: '700',
        color: '#32EAFA',
        rich: {
          a: {
            fontSize: 14,
            verticalAlign: 'bottom',
          },
        },
      },
      x: 'center',
      y: '30%',
    },
    series: [
      {
        type: 'liquidFill',
        radius: '90%',
        center: ['50%', '50%'],
        data: [0.35, 0.35], // data个数代表波浪数
        backgroundStyle: {
          color: 'rgba(104,151,175,0.3)',
        },
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(58, 71, 212, 0)',
              },
              {
                offset: 0.5,
                color: 'rgba(31, 222, 225, .2)',
              },
              {
                offset: 0,
                color: 'rgba(31, 222, 225, 1)',
              },
            ],
          },
        ],
        label: {
          show: false,
        },
        outline: {
          show: false,
        },
      },
    ],
  };
  // 示范航线通达率
  var rateValue = 80;
  var rateOption = {
    angleAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      min: 0,
      max: 100,
      boundaryGap: ['0', '100'],
      startAngle: 90,
    },
    radiusAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: ['a', 'b', 'c'],
      z: 10,
    },
    polar: {
      radius: '100%',
      center: ['50%', '50%'],
    },
    title: {
      text: rateValue + '{value|%}',
      top: '30%',
      left: 'center',
      textStyle: {
        fontSize: 26,
        fontFamily: 'Microsoft Yahei',
        fontWeight: '700',
        color: '#32EAFA',
        rich: {
          value: {
            fontSize: 14,
            verticalAlign: 'bottom',
          },
        },
      },
    },
    series: [
      {
        type: 'bar',
        data: [, , rateValue],
        z: 1,
        coordinateSystem: 'polar',
        barMaxWidth: 8,
        roundCap: true,
        color: 'RGBA(9, 172, 255, 1.00)',
        barGap: '-100%',
      },
      {
        type: 'bar',
        data: [, , 100],
        z: 0,
        silent: true,
        animation: false,
        coordinateSystem: 'polar',
        barMaxWidth: 10,
        name: 'C',
        roundCap: true,
        color: '#325075',
        barGap: '-100%',
      },
    ],
    tooltip: {
      show: false,
    },
  };

  // 规划里程达标率
  var qualifiedRateValue = 41;
  var qualifiedRateOption = {
    angleAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      min: 0,
      max: 100,
      boundaryGap: ['0', '100'],
      startAngle: 90,
    },
    radiusAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: ['a', 'b', 'c'],
      z: 10,
    },
    polar: {
      radius: '100%',
      center: ['50%', '50%'],
    },
    title: {
      text: qualifiedRateValue + '{value|%}',
      top: '30%',
      left: 'center',
      textStyle: {
        fontSize: 26,
        fontFamily: 'Microsoft Yahei',
        fontWeight: '700',
        color: '#32EAFA',
        rich: {
          value: {
            fontSize: 14,
            verticalAlign: 'bottom',
          },
        },
      },
    },
    series: [
      {
        type: 'bar',
        data: [, , qualifiedRateValue],
        z: 1,
        coordinateSystem: 'polar',
        barMaxWidth: 8,
        roundCap: true,
        color: '#1DC194',
        barGap: '-100%',
      },
      {
        type: 'bar',
        data: [, , 100],
        z: 0,
        silent: true,
        animation: false,
        coordinateSystem: 'polar',
        barMaxWidth: 10,
        name: 'C',
        roundCap: true,
        color: '#325075',
        barGap: '-100%',
      },
    ],
    tooltip: {
      show: false,
    },
  };

  var countChart = echarts.init(document.getElementById('count'));
  countChart.setOption(countOption);

  var rateChart = echarts.init(document.getElementById('rate'));
  rateChart.setOption(rateOption);

  var qualifiedRateChart = echarts.init(
    document.getElementById('qualifiedRate')
  );
  qualifiedRateChart.setOption(qualifiedRateOption);

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
