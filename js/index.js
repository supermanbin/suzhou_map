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
  $('#courseId').on('change', 'span', function () {
    var modal = new Modal({
      title: '苏州绿色环保航道总览',
      content: $('#course').html(),
      width: 650,
      height: 620,
    });
    /// chart
    var content = $('.pop').find('.chart__content')[0];

    myChart = echarts.init(content);
    myChart.setOption(option1);
  });

  $('#cultrueId').on('change', 'span', function () {
    var modal = new Modal({
      title: '苏州航道文化遗产总览',
      content: $('#cultrue').html(),
      width: 650,
      height: 530,
    });
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });

  $('body').on('click', '.chart__tab li', function () {
    var index = $(this).index();
    console.log(index);
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

  // 航道惠民
  // 锚地
  var CBSOption1 = {
    tooltip: {
      show: false,
    },
    grid: { top: 50, right: 20, bottom: 70, left: 20 },
    calculable: true,
    xAxis: [
      {
        data: [
          '外港线屯村锚地|姑苏区',
          '苏申内港线吴江锚地|太仓市',
          '苏南运河盛泽锚地|吴江区',
          '苏南运河平望锚地|吴江区',
          '苏南运河八坼锚地|吴江区',
          '杨林塘牌楼锚地|吴江区',
          '外港线高垫锚地|吴江区',
        ],
        nameLocation: 'center',
        nameTextStyle: {
          color: '#fff',
        },
        axisLine: {
          lineStyle: { color: '#70acde' },
        },
        axisLabel: {
          interval: 0,
          lineHeight: 16,
          formatter: function (value) {
            console.log(value);
            var vals = value.split('|');

            var a = vals[0].slice(0, 4);
            var b = vals[0].slice(4, value.length);
            var c = vals[1];
            return '{sty1|' + a + '}\n{sty2| ' + b + '}\n{sty3|' + c + '}';
            // return a + '\n' + b + '\n' + c;
          },
          rich: {
            sty3: {
              color: '#fff',
              backgroundColor: '#247a9a',
              padding: [3, 5],
              borderRadius: 2,
              lineHeight: 32,
            },
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        show: false,
        type: 'value',
        name: '单位：米',
        nameTextStyle: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        yAxisIndex: 0,
        data: [
          {
            value: 0,
            itemStyle: { color: '#49709b' },
          },
          { value: 690, itemStyle: { color: '#296dba' } },
          { value: 400, itemStyle: { color: '#1798ce' } },
          { value: 400, itemStyle: { color: '#13bbc6' } },
          { value: 547, itemStyle: { color: '#62a810' } },
          { value: 270, itemStyle: { color: '#af800e' } },
          { value: 0, itemStyle: { color: '#49709b' } },
        ],
        markPoint: {
          symbol: 'pin',
          symbolSize: 50,
          symbolOffset: [0, 0],
          label: {
            show: true,
          },
          data: [
            {
              value: '在建',
              xAxis: 0,
              yAxis: 0,
              itemStyle: { color: '#49709b' },
            },
            {
              value: '690',
              xAxis: 1,
              yAxis: 690,
              itemStyle: { color: '#296dba' },
            },
            {
              value: '400',
              xAxis: 2,
              yAxis: 400,
              itemStyle: { color: '#1798ce' },
            },
            {
              value: '400',
              xAxis: 3,
              yAxis: 400,
              itemStyle: { color: '#13bbc6' },
            },
            {
              value: '547',
              xAxis: 4,
              yAxis: 547,
              itemStyle: { color: '#62a810' },
            },
            {
              value: '270',
              xAxis: 5,
              yAxis: 270,
              itemStyle: { color: '#af800e' },
            },
            {
              value: '在建',
              xAxis: 6,
              yAxis: 0,
              itemStyle: { color: '#49709b' },
            },
          ],
        },
        barWidth: '5%',
      },
    ],
  };
  // 充电桩
  var CBSOption2 = {
    title: {
      show: false,
    },
    tooltip: {
      show: false,
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      left: 'right',
      align: 'auto',
      top: 'middle',
      textStyle: {
        color: '#fff',
      },
      data: ['吴中', '太仓', '昆山'],
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['50%', '50%'],
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        animation: false,
        tooltip: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: 'rgba(11,100,103,0.2)',
          },
        },
        data: [
          {
            value: 1,
          },
        ],
      },
      {
        name: '绿化总里程',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        color: ['#33ae5f', '#2382e2', '#32d7e6'],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (params) {
            return (
              params.name + '\n' + params.value + '个\n' + params.percent + '%'
            );
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
          { value: 22, name: '吴中' },
          { value: 12, name: '太仓' },
          { value: 13, name: '昆山' },
        ],
      },
    ],
  };

  $('#courseBenefitService').on('change', 'span', function () {
    var modal = new Modal({
      title: '惠民服务航道概览',
      content: $('#courseBenefitServicePopContent').html(),
      width: 650,
      height: 510,
    });
  });
  $('body').on('click', '.cbs__tab li', function () {
    var index = $(this).index() > 1 ? $(this).index() - 1 : $(this).index();
    $('.cbs__build-intro').hide();
    $('.cbs__tab li').removeClass('active');
    $(this).addClass('active');
    $('.other__tab span').css({ visibility: 'visible' }).addClass('active');
    $('.other__tab span:last-child').removeClass('active');
    $(this).parent().siblings('.cbs__tab-content').hide().eq(index).show();

    var chartDom = $('.pop').find('.cbs-chart');
    var CBSChart = echarts.init(chartDom[0]);
    if ($(this).index() == 1) {
      CBSChart.clear();
      chartDom.css({
        background: '',
      });
      CBSChart.setOption(CBSOption1);
    }
    if ($(this).index() == 2) {
      CBSChart.clear();
      chartDom.css({
        background: 'url("./images/chart_bg.png") center bottom no-repeat',
      });
      CBSChart.setOption(CBSOption2);
    }
  });

  $('body').on('click', '#cbs__intro', function () {
    // $('.other__tab span').css({ visibility: 'hidden' }).removeClass('active');
    $(this)
      .css({ visibility: 'visiable' })
      .addClass('active')
      .siblings('span')
      .css({ visibility: 'hidden' })
      .removeClass('active');
    // $(this).addClass('active');
    $('.cbs__tab-content').hide();
    $('.cbs__build-intro').show();
  });
});
