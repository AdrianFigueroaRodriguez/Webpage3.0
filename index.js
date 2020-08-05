console.log('Js is conected');

setTimeout(function(){
    $('.container').css('background-position', 'right');
}, 1000);

setTimeout(function(){
    $('nav').css('background-color', '#2699FB');
}, 2000);

function nmc(){
    
    console.log($('.n-m-c').is('visible'));
    if($('.n-m-c').is('visible')){
        $('.n-m-c').css('visibility', 'visible')
    } else{
        $('.n-m-c').css('visibility', 'hidden')
    }
    console.log($('.n-m-c').is('visible'));
}
