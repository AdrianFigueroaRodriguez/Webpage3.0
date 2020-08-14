console.log('ns Js is conected');

function nmc(){
    if($('.n-m-c').is(':visible')){
        $('.n-m-c').css('visibility', 'hidden');
    }
}

function ndc(){
    if($('.n-m-c').is(':visible')){
        $('.n-m-c').css('visibility', 'visible');
    }
}

function cotNewServiceAdder(){    
    if($('.cot-s2').prop('clientHeight') === 0){
        $('.cot-s2').css('visibility', 'visible');
        $('.cot-s2').css('height', '38px');
        $('.cot-s2').css('margin', '16px 0px');

        $('.cot-new-serv-rem').css('padding', '5px 0px');
        $('.cot-new-serv-rem').css('margin', '16px 0px');
        $('.cot-new-serv-rem').css('height', '38px');
        $('.cot-new-serv-rem').css('visibility', 'visible');

    } else if($('.cot-s3').prop('clientHeight') === 0){
        $('.cot-s3').css('visibility', 'visible');
        $('.cot-s3').css('height', '38px');
        $('.cot-s3').css('margin', '16px 0px');
    } else if($('.cot-s4').prop('clientHeight') === 0){
        $('.cot-s4').css('visibility', 'visible');
        $('.cot-s4').css('height', '38px');
        $('.cot-s4').css('margin', '16px 0px');
    } else if($('.cot-s5').prop('clientHeight') === 0 ){
        $('.cot-s5').css('visibility', 'visible');
        $('.cot-s5').css('height', '38px');
        $('.cot-s5').css('margin', '16px 0px');
    } else{
        $('.cot-s6').css('visibility', 'visible');
        $('.cot-s6').css('height', '38px');
        $('.cot-s6').css('margin', '16px 0px');
    }
}

function cotNewServiceEliminator(){
    if($('.cot-s6').prop('clientHeight') === 38){
        $('.cot-s6').css('visibility', 'collapse');
        $('.cot-s6').css('height', '0px');
        $('.cot-s6').css('margin', '0px');
    } else if($('.cot-s5').prop('clientHeight') === 38){
        $('.cot-s5').css('visibility', 'collapse');
        $('.cot-s5').css('height', '0px');
        $('.cot-s5').css('margin', '0px');
    } else if($('.cot-s4').prop('clientHeight') === 38){
        $('.cot-s4').css('visibility', 'collapse');
        $('.cot-s4').css('height', '0px');
        $('.cot-s4').css('margin', '0px');
    } else if($('.cot-s3').prop('clientHeight') === 38){
        $('.cot-s3').css('visibility', 'collapse');
        $('.cot-s3').css('height', '0px');
        $('.cot-s3').css('margin', '0px');
    } else if($('.cot-s2').prop('clientHeight') === 38){
        $('.cot-s2').css('visibility', 'collapse');
        $('.cot-s2').css('height', '0px');
        $('.cot-s2').css('margin', '0px');

        $('.cot-new-serv-rem').css('padding', '0px');
        $('.cot-new-serv-rem').css('margin', '0px');
        $('.cot-new-serv-rem').css('height', '0px');
        $('.cot-new-serv-rem').css('visibility', 'collapse');
    } 
}