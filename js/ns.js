console.log('Js is conected');

setTimeout(function(){

}, 2000);


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

function serviceCardImageExpansionXS(image,text){    
    if($(`${image}`).prop('clientHeight') === 200){
        $(`${image}`).css('height', '373px');
        $(`${text}`).css('visibility', 'collapse');
        $(`${text}`).css('height', '0px');
        $(`${text}`).css('padding', '0px ');
    } else{
        $(`${image}`).css('height', '200');
        $(`${text}`).css('visibility', 'visible');
        $(`${text}`).css('height', '173px');
        $(`${text}`).css('padding', '16px');
    }
}


