console.log('Js is conected');
//main container
$('#m-c').hide();
$('footer').hide();

//start transition
setTimeout(function(){
    $('.container').css('background-position', 'right');
}, 1000);

//initial screen transition
setTimeout(function(){
    $('nav').css('background-color', '#2699FB');
    $('nav').css('border-bottom', '#ffffff solid 10px');
    $('#m-is-l').css('opacity', '0.001%');
    $('#m-is-s').css('opacity', '0.001%');
    $('.n-ml-c').css('opacity', '100%');
    $('.n-o-c').css('opacity', '100%');
    $('#card-sr').css('height', 'auto');
}, 2000);

//main screen setup
setTimeout(function(){
    //main - initial screen and 
    $('#m-is-c').hide();
    $('#m-c').show();
    $('footer').show();
    //footer config adjustment
    $('footer').css('flex', '0 1 ');
    $('.ft-c-s').css('height', '100%');
    $('.ft-c-i').css('height', '50px');
    //html/body config adjustment
    $('html').css('padding-bottom', '0px');
    $('body').css('padding-bottom', '0px');
    $('html').css('height', 'auto');
    $('body').css('height', 'auto');
}, 3000);


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

function cardImgExpandXS(x){
    /*Optional - agregate value*/
}

function cardImgExpandS(x){
    if(($(`${x}`).prop('clientHeight') === 200) && ($(`${x}`).prop('id')) === "cri-id"){
        $(`${x}`).css('height', '373px');
        $('.cies-r').hide();
    } else{
        $('.cies-r').show();
        $(`${x}`).css('height', '200px');
    }
    
}

function cardImgExpandM(x){

}

/*
This code is for expandingthe cards all the way accros only for XL, L and/or M
    if(document.getElementById('n-ns-sc1').classList.contains('col-lg-12')){
        document.getElementById('n-ns-sc1').classList.remove('col-lg-12');
        document.getElementById('n-ns-sc1').classList.add('col-lg-6');
        setTimeout(function(){
            $('#n-ns-sc2').css('display','block');
        }, 1000);
    } else{
        $('#n-ns-sc2').css('display','none');
        document.getElementById('n-ns-sc1').classList.remove('col-lg-6');
        document.getElementById('n-ns-sc1').classList.add('col-lg-12');
    }
*/
function cardImgExpandL(x){

}

function cardImgExpandXL(){





}

function cardImgExpand(x){
    if((window.matchMedia("(max-width: 576px)").matches)){
        cardImgExpandXS(x);
    } else if((window.matchMedia("(min-width: 576px)").matches && (window.matchMedia("(max-width: 768px)").matches))){
        cardImgExpandS(x);
    } else if((window.matchMedia("(min-width: 768px)").matches && (window.matchMedia("(max-width: 992px)").matches))){
        cardImgExpandM(x);
    } else if((window.matchMedia("(min-width: 992px)").matches && (window.matchMedia("(max-width: 1200px)").matches))){
        cardImgExpandL(x);
    } else {
        cardImgExpandXL(x);
    }



}

