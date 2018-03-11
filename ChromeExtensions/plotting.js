var DOM = $(document).ready(function() {})[0];

DOM.getElementsByClassName('guess-game-btn')[0].click();

var counter = 0;
var output = [];
var timestep = 100;//ms
var min = 10

/*
var a = setInterval(() => {
var length = DOM.getElementsByClassName('guess-game-box-body').length;
},1000);
clearInterval(a);
*/

function convert(pot_number,left_or_right,rate_or_number){
    return DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children[pot_number].children[0].children[0].children[0].children[1].children[left_or_right].attributes[rate_or_number].nodeValue;
};

function convert2(pot_number,left_or_right){ // 0 for right, 1 for left
    return DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children[pot_number].children[0].children[0].children[0].children[2].children[left_or_right].children[0].attributes[1].nodeValue
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

    if (DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children.length >= 2){
        var i = 1;
        var rate3 = convert(i,0,1);
        var number3 = convert(i,0,3);
        var pot3 = convert2(i,1);
        var rate4 = convert(i,2,1);
        var number4 = convert(i,2,3);
        var pot4 = convert2(i,0);
        output += [rate3,number3,pot3,rate4,number4,pot4+'/'];
    }

    if (DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 3){
        var i = 2;
        var rate5 = convert(i,0,1);
        var number5 = convert(i,0,3);
        var pot5 = convert2(i,1);
        var rate6 = convert(i,2,1);
        var number6 = convert(i,2,3);
        var pot6 = convert2(i,0);
        output += [rate5,number5,pot5,rate6,number6,pot6+'/'];
    }

    if (DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 1){
        console.log(rate1,number1,pot1,rate2,number2,pot2);
    } else if (DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 2){
        console.log(rate1,number1,pot1,rate2,number2,pot2,'/',rate3,number3,pot3,rate4,number4,pot4);
    } else if (DOM.getElementsByClassName('guess-game-box-body')[0].children[0].children.length == 3){
        console.log(rate1,number1,pot1,rate2,number2,pot2,'/',rate3,number3,pot3,rate4,number4,pot4,'/',rate5,number5,pot5,rate6,number6,pot6);
    } else {
        clearInterval(b);
        alert('wtf')
    }
    counter += 1;

    if (counter > 10*60*min) {
        clearInterval(b);
        counter=0;
        console.log(output);
    };
};

var b = setInterval(() => test(),timestep);