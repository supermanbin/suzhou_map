$(function () {
  // 各航道重点养护工程分布
  var data = [
    {
      name: '苏申外港',
      value: 15,
    },
    {
      name: '京杭大运河',
      value: 25,
    },
    {
      name: '苏申内港',
      value: 10,
    },
  ];
  var arrName = getArrayValue(data, 'name');
  var arrValue = getArrayValue(data, 'value');
  var sumValue = eval(arrValue.join('+'));
  var objData = array2obj(data, 'name');
  var optionData = getData(data);

  function getArrayValue(array, key) {
    var key = key || 'value';
    var res = [];
    if (array) {
      array.forEach(function (t) {
        res.push(t[key]);
      });
    }
    return res;
  }

  function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
      resObj[array[i][key]] = array[i];
    }
    return resObj;
  }

  function getData(data) {
    var res = {
      series: [],
      yAxis: [],
    };
    for (let i = 0; i < data.length; i++) {
      res.series.push({
        name: '',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
        center: ['45%', '55%'],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 5,
        },
        data: [
          {
            value: data[i].value,
            name: data[i].name,
          },
          {
            value: sumValue - data[i].value,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
        ],
      });
      res.series.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
        center: ['45%', '55%'],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 5,
        },
        data: [
          {
            value: 7.5,
            itemStyle: {
              color: 'RGBA(24, 80, 125, 1.00)',
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
          {
            value: 2.5,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
        ],
      });
      res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + '%');
    }
    return res;
  }

  var conservationOption = {
    title: {
      text: '各航道重点养护工程分布',
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      show: true,
      icon: 'circle',
      top: 'center',
      top: '16%',
      bottom: '53%',
      left: '48%',
      data: arrName,
      width: 10,
      padding: [0, 5],
      itemGap: 5,
      formatter: function (name) {
        console.log(name);

        return (
          '{value|' +
          ((objData[name].value / sumValue) * 100).toFixed(2) +
          '%}{title|' +
          name +
          '}'
        );
      },

      textStyle: {
        rich: {
          title: {
            fontSize: 12,
            lineHeight: 16,
            color: 'RGBA(184, 203, 241, 1.00)',
          },
          value: {
            fontSize: 14,
            lineHeight: 16,
            color: '#fff',
          },
        },
      },
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{a}<br>{b}:{c}({d}%)',
    },
    color: [
      'RGBA(0, 198, 255, 1.00)',
      'RGBA(34, 255, 137, 1.00)',
      'RGBA(255, 255, 0, 1.00)',
    ],
    xAxis: [
      {
        show: false,
      },
    ],
    series: optionData.series,
  };
  var conservationChart = echarts.init(
    document.getElementById('conservationChart')
  );
  conservationChart.setOption(conservationOption);

  // 各重点工程项目进度情况
  var index = 0;
  var colorList = [
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: 'RGBA(20, 78, 181, 1.00)',
      },
      {
        offset: 1,
        color: 'RGBA(37, 121, 220, 1.00)',
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: 'RGBA(23, 167, 182, 1.00)',
      },
      {
        offset: 1,
        color: 'RGBA(63, 198, 227, 1.00)',
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: 'RGBA(156, 135, 91, 1.00)',
      },
      {
        offset: 1,
        color: 'RGBA(206, 175, 111, 1.00)',
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: 'RGBA(53, 113, 194, 1.00)',
      },
      {
        offset: 1,
        color: 'RGBA(107, 164, 241, 1.00)',
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: 'RGBA(27, 153, 122, 1.00)',
      },
      {
        offset: 1,
        color: 'RGBA(71, 212, 177, 1.00)',
      },
    ]),
  ];
  var progressOption = {
    title: {
      text: '各重点工程项目进度情况',
      textStyle: { color: '#fff' },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      show: false,
    },
    legend: {
      show: false,
    },
    grid: {
      left: 100,
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'value',

      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30,
        },
      },
      data: [
        '苏申外港线\nSSWG-HD1',
        '苏申外港线\nSSWG-HD2',
        '苏浙界河段\nSZJH-SG1',
        '苏南运河苏州市区段\n三级航道整治工程',
        '其他重点工程项目\n进度情况',
      ],
      axisLabel: {
        margin: 10,
        fontSize: 10,
        align: 'right',
        color: 'RGBA(184, 203, 241, 1.00)',
      },
    },
    series: [
      {
        z: 2,
        name: 'value',
        type: 'bar',
        data: [31, 30, 25, 10, 4].map(function (item, i) {
          itemStyle = {
            color: colorList[i],
            barBorderRadius: 30,
          };
          return {
            value: item,
            itemStyle: itemStyle,
          };
        }),
        barWidth: 15,
        label: {
          show: true,
          position: 'right',
          color: 'RGBA(50, 234, 250, 1.00)',
          fontSize: 12,
          offset: [10, 0],
          formatter: function (param) {
            console.log(param);
            return param.value + '%';
          },
        },
      },
    ],
  };

  var progressChart = echarts.init(document.getElementById('progressChart'));
  progressChart.setOption(progressOption);
});
