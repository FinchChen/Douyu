
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

Highcharts.chart('plot-container', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series1 = this.series[0];
                var series2 = this.series[1];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y1 = Math.random(); //自己的数据
                        y2 = Math.random();
                    series1.addPoint([x, y1],false, true);
                    series2.addPoint([x, y2],true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: '标题'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Rate'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Rate',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -100; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0 //最开始的-i个数据
                });
            }
            return data;
        }())
    },{
        name: 'Rate2',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -100; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0 //最开始的-i个数据
                });
            }
            return data;
        }())
    }]
});