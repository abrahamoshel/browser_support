$(function () {
  $('#market_share').highcharts({
      title: {
          text: 'Browser Market Share',
          x: -20 //center
      },
      subtitle: {
          text: 'source: http://www.w3schools.com/browsers/browsers_stats.asp',
          x: -20
      },
      xAxis: {
          categories: ["2007", "2008", "2009", "2010", "2011",  "2012", "2013"]
      },
      yAxis: {
          title: {
              text: 'Market Share'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          valueSuffix: '%'
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Internet Explorer',
          data: [57.20, 51.00,  39.30,  30.70,  22.40,  16.20,  11.80]
      }, {
          name: 'Firefox',
          data: [35.40, 43.70,  47.40,  45.80,  40.60,  32.80,  28.20]
      }, {
          name: 'Chrome',
          data: [0.00,  0.00, 7.00, 17.00,  30.30,  43.70,  52.90]
      }, {
          name: 'Safari',
          data: [1.60,  2.60, 3.30, 3.50, 3.80, 4.00, 3.90]
      }, {
          name: 'Opera',
          data: [1.50,  2.10, 2.10, 2.30, 2.30, 2.20, 1.80]
      }]
  });
  $('#internet_explorer').highcharts({
      title: {
          text: 'Internet Explorer',
          x: -20 //center
      },
      subtitle: {
          text: 'source: http://www.w3schools.com/browsers/browsers_stats.asp',
          x: -20
      },
      xAxis: {
          categories: ["2007", "2008", "2009", "2010", "2011",  "2012", "2013"]
      },
      yAxis: {
          title: {
              text: 'Market Share'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          valueSuffix: '%'
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Total',
          data: [57.20, 51.00,  39.30,  30.70,  22.40,  16.20,  11.80]
      }, {
          name: 'IE 10',
          data: [0.00,  0.00, 0.00, 0.00, 0.00, 0.10, 3.60]
      }, {
          name: 'IE 9',
          data: [0.00,  0.00, 0.00, 0.00, 4.20, 6.10, 2.80]
      }, {
          name: 'IE 8',
          data: [20.80, 26.00,  10.60,  16.20,  11.90,  7.80, 4.70]
      }, {
          name: 'IE 7',
          data: [34.90, 24.50,  15.10,  7.80, 4.20, 1.80, 0.60]
      }, {
          name: 'IE 6',
          data: [1.50,  0.50, 13.60,  6.70, 2.00, 0.50, 0.10]
      }]
  });
  impress().init();
});



