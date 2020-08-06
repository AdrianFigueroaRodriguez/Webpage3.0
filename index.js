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
}, 2000);

//main screen setup
setTimeout(function(){
    //main - initial screen and 
    $('#m-is-c').hide();
    $('#m-c').show();
    $('footer').show();
    //footer config adjustment
    $('footer').css('flex', '0 1 240px');
    $('.ft-c-s').css('height', '190px');
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
