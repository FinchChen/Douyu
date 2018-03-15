injectpoint = document.getElementsByClassName('PlayerSub')[0];
injectpoint.innerHTML = ''

document.getElementsByClassName('guess-game-btn')[0].click();

ele = document.createElement('button');
ele.setAttribute('id','startbutton');
ele.textContent = '开始记录';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('id','stopbutton');
ele.textContent = '停止';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','plotbutton');
ele.textContent = '画图1';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','plotbutton');
ele.textContent = '停止画图1';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','plotbutton');
ele.textContent = '画图2';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','plotbutton');
ele.textContent = '停止画图2';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','plotbutton');
ele.textContent = '画图3';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','plotbutton');
ele.textContent = '停止画图3';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','betbutton');
ele.textContent = '1左下注10';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','betbutton');
ele.textContent = '1右下注10';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','betbutton');
ele.textContent = '1两边同时压10';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('id','wtfbutton1');
ele.textContent = '数据插件';
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('id','wtfbutton2');
ele.textContent = '数据停止';
injectpoint.append(ele);


ele = document.createElement('button');
ele.setAttribute('class','betbutton');
ele.textContent = '左开猜,编号,赔率，底池';
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 0;
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 1.4;
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 2000;
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','betbutton');
ele.textContent = '右开猜,编号,赔率，底池';
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 0;
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 0.4;
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 1000;
injectpoint.append(ele);

ele = document.createElement('button');
ele.setAttribute('class','betbutton');
ele.textContent = '两边开猜,编号,赔率，底池';
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 0;
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 0.8;
injectpoint.append(ele);

ele = document.createElement('input');
ele.setAttribute('class','input');
ele.setAttribute('style','width: 50px');
ele.value = 1000;
injectpoint.append(ele);



ele = document.createElement('div');
ele.setAttribute('id','result container');
ele.textContent = '等待开始'
injectpoint.append(ele);

ele = document.createElement('div');
ele.setAttribute('id','plotarea');
injectpoint.append(ele);

ele = document.createElement('div');
ele.setAttribute('id','plot-container1');
ele.setAttribute('style','min-width: 310px; height: 200px; margin: 0 auto');
document.getElementById('plotarea').append(ele)

ele = document.createElement('div');
ele.setAttribute('id','plot-container2');
ele.setAttribute('style','min-width: 310px; height: 200px; margin: 0 auto');
document.getElementById('plotarea').append(ele)

ele = document.createElement('div');
ele.setAttribute('id','plot-container3');
ele.setAttribute('style','min-width: 310px; height: 200px; margin: 0 auto');
document.getElementById('plotarea').append(ele);

document.getElementsByClassName('guess-game-btn')[0].click();

//document.getElementById('guess-main-panel').setAttribute('style','position:relative');

leftobj = document.createElement('div');
leftobj.textContent = '未开始1';


rightobj = document.createElement('div');
rightobj.textContent = '未开始2';



function convert(pot_number,left_or_right,rate_or_number){ // 0 1 2 //0left 2right //1rate 3number
    return document.getElementsByClassName('guess-game-box-body')[0].children[0].children[pot_number].children[0].children[0].children[0].children[1].children[left_or_right].attributes[rate_or_number].nodeValue;
};

function convert2(pot_number,left_or_right){ // 0 for right, 1 for left
    return document.getElementsByClassName('guess-game-box-body')[0].children[0].children[pot_number].children[0].children[0].children[0].children[2].children[left_or_right].children[0].attributes[1].nodeValue
};

function test(){

    var i = 0;
    var rate1 = convert(i,0,1);
    var number1 = convert(i,0,3);
    var pot1 = convert2(i,1);
    var rate2 = convert(i,2,1);
    var number2 = convert(i,2,3);
    var pot2 = convert2(i,0);
    output += [rate1,number1,pot1,rate2,number2,pot2+'/'];
    
    //tempResult1 = "左边赔率:"+rate1+" 该赔率底池:"+number1+" 左边总投注:"+pot1;
    //tempResult2 = "右边赔率:"+rate2+" 该赔率底池:"+number2+" 右边总投注:"+pot2;

    if (document.getElementsByClassName('guess-game-box-body')[0].children[0].children.length >= 2){
        var i = 1;
        var rate3 = convert(i,0,1);
        var number3 = convert(i,0,3);
        var pot3 = convert2(i,1);
        var rate4 = convert(i,2,1);
        var number4 = convert(i,2,3);
        var pot4 = convert2(i,0);
        output = output.slice(0,-1);
        output += [,rate3,number3,pot3,rate4,number4,pot4+'/'];
    }

    if (document.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 3){
        var i = 2;
        var rate5 = convert(i,0,1);
        var number5 = convert(i,0,3);
        var pot5 = convert2(i,1);
        var rate6 = convert(i,2,1);
        var number6 = convert(i,2,3);
        var pot6 = convert2(i,0);
        output = output.slice(0,-1);
        output += [,rate5,number5,pot5,rate6,number6,pot6+'/'];
    }

    /*
    if (document.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 1){
        console.log(rate1,number1,pot1,rate2,number2,pot2);
    } else if (document.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 2){
        console.log(rate1,number1,pot1,rate2,number2,pot2,'/',rate3,number3,pot3,rate4,number4,pot4);
    } else if (document.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 3){
        console.log(rate1,number1,pot1,rate2,number2,pot2,'/',rate3,number3,pot3,rate4,number4,pot4,'/',rate5,number5,pot5,rate6,number6,pot6);
    } else {
        clearInterval(b);
        alert('wtf')
    }
    */

    /*
    if (tempResult1 != lastresult1) {

        document.getElementsByClassName('result')[0].textContent = tempResult1;
        lastresult1 = tempResult1;

    }

    if (tempResult2 != lastresult2) {

        document.getElementsByClassName('result')[1].textContent = tempResult2;
        lastresult2 = tempResult2;

    }
    */
    
    counter += 1;

    if (counter > 24*min) {
        clearInterval(b);
        counter = 0;
        console.log('Finish');
        document.getElementById('result container').textContent = '结束';
        //console.log(output);
    };
};

function update_plot2(){
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    
    Highcharts.chart('plot-container2', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 30,
            events: {
                load: function () {
    
                    // set up the updating of the chart each second
                    var series1 = this.series[0];
                    var series2 = this.series[1];
                    var pre1 = 0;
                    var pre2 = 0;
                    d = setInterval(function () {
                        var x = (new Date()).getTime(); // current time
                        var y1 = parseFloat(convert(1,0,1));
                        var y2 = parseFloat(convert(1,2,1));

                        if (y1 != pre1 || y2 != pre2){
                            series1.addPoint([x, y1],true, false);
                            pre1 = y1;
                            series2.addPoint([x, y2],true, false);
                            pre2 = y2;
                        }
                        
                    }, 500);
                }
            }
        },
        title: {
            text: '第二个竞猜赔率趋势'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: '赔率'
            },
            max:3,
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
            name: '左边赔率',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -1; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0 //最开始的-i个数据
                    });
                }
                return data;
            }())
        },{
            name: '右边赔率',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -1; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0 //最开始的-i个数据
                    });
                }
                return data;
            }())
        }]
    });
}

function update_plot1(){
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    
    Highcharts.chart('plot-container1', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 30,
            events: {
                load: function () {
    
                    // set up the updating of the chart each second
                    var series1 = this.series[0];
                    var series2 = this.series[1];
                    var pre1 = 0;
                    var pre2 = 0;
                    c = setInterval(function () {
                        var x = (new Date()).getTime(); // current time
                        var y1 = parseFloat(convert(0,0,1));
                        var y2 = parseFloat(convert(0,2,1));

                        if (y1 != pre1 || y2 != pre2){
                            series1.addPoint([x, y1],true, false);
                            pre1 = y1;
                            series2.addPoint([x, y2],true, false);
                            pre2 = y2;
                        }
                        
                    }, 500);
                }
            }
        },
        title: {
            text: '第一个竞猜赔率趋势'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: '赔率'
            },
            max:3,
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
            name: '左边赔率',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -1; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0 //最开始的-i个数据
                    });
                }
                return data;
            }())
        },{
            name: '右边赔率',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -1; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0 //最开始的-i个数据
                    });
                }
                return data;
            }())
        }]
    });
}

function update_plot3(){
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    
    Highcharts.chart('plot-container3', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 30,
            events: {
                load: function () {
    
                    // set up the updating of the chart each second
                    var series1 = this.series[0];
                    var series2 = this.series[1];
                    var pre1 = 0;
                    var pre2 = 0;
                    e = setInterval(function () {
                        var x = (new Date()).getTime(); // current time
                        var y1 = parseFloat(convert(2,0,1));
                        var y2 = parseFloat(convert(2,2,1));

                        if (y1 != pre1 || y2 != pre2){
                            series1.addPoint([x, y1],true, false);
                            pre1 = y1;
                            series2.addPoint([x, y2],true, false);
                            pre2 = y2;
                        }
                        
                    }, 500);
                }
            }
        },
        title: {
            text: '第三个竞猜赔率趋势'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: '赔率'
            },
            max:3,
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
                    Highcharts.numberFormat(this.y, 1);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: '左边赔率',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -1; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0 //最开始的-i个数据
                    });
                }
                return data;
            }())
        },{
            name: '右边赔率',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -1; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0 //最开始的-i个数据
                    });
                }
                return data;
            }())
        }]
    });
}

function placebet(left_or_right,number){ //0left,1right

    document.getElementsByClassName('item-price')[left_or_right].click();
    //document.getElementsByClassName('guess-tip-betting-num')[0].click();
    document.getElementsByClassName('guess-tip-betting-input')[0].children[1].value = number;
    document.getElementsByClassName('guess-tip-betting-doneBtn')[0].click();

};

function openbet(pot_number,left_or_right,rate,number){ //0,1,2 //0,1 //number

    document.getElementsByClassName('rightBar')[pot_number].click();
    document.getElementsByClassName('guess-tip-dealer-choose_out')[0].children[left_or_right+1].click();
    document.getElementsByClassName('guess-tip-dealer-freedom_odds')[0].value = rate;
    document.getElementsByClassName('guess-tip-dealer-freedom_DeJin')[0].value = number;
    document.getElementsByClassName('guess-tip-dealer-sureBtn')[0].click();

}

document.getElementsByClassName('betbutton')[0].addEventListener("click", function(){

    placebet(0,10);

});

document.getElementsByClassName('betbutton')[1].addEventListener("click", function(){

    placebet(1,10);

});

document.getElementsByClassName('betbutton')[2].addEventListener("click", function(){

    placebet(0,10);
    var tmp100 = setTimeout(() => {
        placebet(1,10);
    }, 1700);

});

document.getElementsByClassName('betbutton')[3].addEventListener("click", function(){

    var tmp1 = document.getElementsByClassName('input')[0].value;
    var tmp2 = document.getElementsByClassName('input')[1].value;
    var tmp3 = document.getElementsByClassName('input')[2].value;
    openbet(tmp1,0,tmp2,tmp3);

});

document.getElementsByClassName('betbutton')[4].addEventListener("click", function(){

    var tmp1 = document.getElementsByClassName('input')[3].value;
    var tmp2 = document.getElementsByClassName('input')[4].value;
    var tmp3 = document.getElementsByClassName('input')[5].value;
    openbet(tmp1,1,tmp2,tmp3);

});

document.getElementsByClassName('betbutton')[5].addEventListener("click", function(){

    var tmp1 = document.getElementsByClassName('input')[6].value;
    var tmp2 = document.getElementsByClassName('input')[7].value;
    var tmp3 = document.getElementsByClassName('input')[8].value;
    openbet(tmp1,0,tmp2,tmp3);
    setTimeout(() => {
        openbet(tmp1,1,tmp2,tmp3);
    }, 2500);

});

document.getElementById('startbutton').addEventListener("click", function(){

    document.getElementsByClassName('guess-game-btn')[0].click();

    counter = 0;
    output = [];
    timestep = 5000;//ms
    min = 1;
    //lastresult1 = ''
    //lastresult2 = ''

    b = setInterval(() => test(),timestep);

    document.getElementById('result container').textContent = '正在运行';

});

document.getElementById('stopbutton').addEventListener("click", function(){

    clearInterval(b);
    counter = 0;
    document.getElementById('result container').textContent = '停止';

});

document.getElementsByClassName('plotbutton')[0].addEventListener("click", function(){

    document.getElementsByClassName('guess-game-btn')[0].click();
    update_plot1();

});

document.getElementsByClassName('plotbutton')[1].addEventListener("click", function(){

    clearInterval(c);

});

document.getElementsByClassName('plotbutton')[2].addEventListener("click", function(){

    document.getElementsByClassName('guess-game-btn')[0].click();
    update_plot2();

});

document.getElementsByClassName('plotbutton')[3].addEventListener("click", function(){

    clearInterval(d);

});

document.getElementsByClassName('plotbutton')[4].addEventListener("click", function(){

    document.getElementsByClassName('guess-game-btn')[0].click();
    update_plot3();

});

document.getElementsByClassName('plotbutton')[5].addEventListener("click", function(){

    clearInterval(e);

});

document.getElementById('wtfbutton1').addEventListener("click", function(){

    f = setInterval(()=>{
        leftobj.textContent = '1左: 赔率:' + convert(0,0,1) + ' 数量: ' + convert(0,0,3);
        rightobj.textContent = '1右:  赔率:' + convert(0,2,1) + ' 数量: ' + convert(0,2,3);
    },1000);
    
});

document.getElementById('wtfbutton2').addEventListener("click", function(){

    clearInterval(f);
    leftobj.textContent = 0;
    rightobj.textContent = 0;

});

setTimeout(() => {
    document.getElementById('guess-main-panel').append(leftobj);
    document.getElementById('guess-main-panel').append(rightobj);
}, 5000);


console.log('inject success');
