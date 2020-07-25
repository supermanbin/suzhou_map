$(function () {
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
            sty1: {
              color: '#fff',
              backgroundColor: '#247a9a',
              padding: [3, 5],
              borderRadius: 2,
              width:60
            },
            sty2: {
              color: '#fff',
              backgroundColor: '#247a9a',
              padding: [3, 5],
              borderRadius: 2,
              width:60
            },
            sty3: {
              padding: [3, 5],
              lineHeight: 32
            }
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
              value: '690\nkm',
              xAxis: 1,
              yAxis: 690,
              itemStyle: { color: '#296dba' },
            },
            {
              value: '400\nkm',
              xAxis: 2,
              yAxis: 400,
              itemStyle: { color: '#1798ce' },
            },
            {
              value: '400\nkm',
              xAxis: 3,
              yAxis: 400,
              itemStyle: { color: '#13bbc6' },
            },
            {
              value: '547\nkm',
              xAxis: 4,
              yAxis: 547,
              itemStyle: { color: '#62a810' },
            },
            {
              value: '270\nkm',
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

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.cbs__tab').on('click', 'li', function () {
    var $this = $(this);
    var index = $this.index() > 1 ? $this.index() - 1 : $this.index();
    console.log(index);
    
    $('#intro').hide();
    $('.cbs__tab li').removeClass('active');
    $this.addClass('active');
    $('.other__tab span').css({ visibility: 'visible' }).addClass('active');
    $('.other__tab span:last-child').removeClass('active');
    $this.parent().siblings('.cbs__tab-content').hide().eq(index).show();
    if ($this.index() === 1) {
      $('#cbs__tab-content-title').text(
        '各行政区锚地数量及岸线长度分布'
      );
    } else {
      $('#cbs__tab-content-title').text(
        '各行' + $this.find('p').text() + '数量分布'
      );
    }
    
    var chartDom = $('.cbs-chart');
    var CBSChart = echarts.init(chartDom[0]);
    if ($this.index() == 1) {
      CBSChart.clear();
      chartDom.css({
        background: '',
      });
      CBSChart.setOption(CBSOption1);
    }
    if ($this.index() == 2) {
      CBSChart.clear();
      chartDom.css({
        background: 'url("./images/chart_bg.png") center bottom no-repeat',
      });
      CBSChart.setOption(CBSOption2);
    }
  });

  $('#cbs__intro').on('click', function () {
    $('.cbs__tab li').removeClass('active');
    $(this)
      .css({ visibility: 'visiable' })
      .addClass('active')
      .siblings('span')
      .css({ visibility: 'hidden' })
      .removeClass('active');

    $('.cbs__tab-content').hide();
    $('#intro').show();
  });
});
