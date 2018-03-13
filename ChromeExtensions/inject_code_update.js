injectpoint = document.getElementsByClassName('PlayerSub')[0];
injectpoint.innerHTML = '';

start_recod_button = document.createElement('button');
start_recod_button.setAttribute('id','startbutton');
start_recod_button.textContent = '开始记录';
//injectpoint.append(start_recod_button);

start_recod_button.addEventListener("click", function(){

    document.getElementsByClassName('guess-game-btn')[0].click();

    counter = 0;
    output = [];
    timestep = 1000; //ms
    min = record_time_input.textContent;

    record_interval = setInterval(() => record(),timestep);

    record_result_container.textContent = '正在运行';

});

record_time_input = document.createElement('input');
record_time_input.setAttribute('id','record_time_input');
record_time_input.textContent = 10;

stop_recod_button = document.createElement('button');
stop_recod_button.setAttribute('id','stopbutton');
stop_recod_button.textContent = '停止记录';
//injectpoint.append(stop_recod_button);

stop_recod_button.addEventListener("click", function(){

    clearInterval(record_interval);
    counter = 0;
    record_result_container.textContent = '停止';

});

record_result_container = document.createElement('p');
record_result_container.setAttribute('id','record_result_container');
record_result_container.textContent = '记录未开始';
//injectpoint.append(record_result_container);

pot_obj = document.getElementsByClassName('guess-game-box-body')[0].children[0].children;//pot_obj[pot_number],pot_number = 0/1/2
//pot1 = pot_obj[0];
//pot2 = pot_obj[1];
//pot3 = pot_obj[2];

function get_data(pot_number,left_or_right,rate_or_number){ // 0 1 2 //0left 2right //1rate 3number
    return pot_obj[pot_number].children[0].children[0].children[0].children[1].children[left_or_right].attributes[rate_or_number].nodeValue;
};

function get_whole_betting(pot_number,left_or_right){ // 0 for right, 1 for left
    return pot_obj[pot_number].children[0].children[0].children[0].children[2].children[left_or_right].children[0].attributes[1].nodeValue;
};

function record(){

    total = pot_obj.length;

    var rate1 = 0;
    var number1 = 0;
    var pot1 = 0;
    var rate2 = 0;
    var number2 = 0;
    var pot2 = 0;

    for (var i = 0;i<=total;i++){
        rate1 = get_data(i,0,1);
        number1 = get_data(i,0,3);
        pot1 = get_whole_betting(i,1);
        rate2 = get_data(i,2,1);
        number2 = get_data(i,2,3); 
        pot2 = get_whole_betting(i,0);
        output += [rate1,number1,pot1,rate2,number2,pot2+'/'];
    };
    
    counter += 1;

    if (counter > 60*min) {
        clearInterval(record_interval);
        counter = 0;
        console.log('Finish');
        record_result_container.textContent = '结束';
        //console.log(output);
    };
};

rate_plot_button1 = document.createElement('button');
rate_plot_button1.setAttribute('id','different_rate_plot_button');
rate_plot_button1.textContent = '竞猜1赔率曲线';


injectpoint.append(start_recod_button);
injectpoint.append(record_time_input);
injectpoint.append(stop_recod_button);
injectpoint.append(record_result_container);