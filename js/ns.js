console.log('Js is conected');

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

function bigger(x){
    console.log($(`${x}`));
    console.log($(`${x}`).prop('id'));
    console.log($(`${x}`).prop('classList').item(0));
    console.log($(('#'+$(`${x}`).prop('id')+' .'+$(`${x}`).prop('classList').item(0)+'-i')));
    

    //console.log($(`${x} .sc-i`));
    if($($(('#'+$(`${x}`).prop('id')+' .'+$(`${x}`).prop('classList').item(0)+'-i'))).prop('clientHeight') === 173){
        $($('#'+$(`${x}`).prop('id')+'.sc-i')).css('height', '373px');
        $($('#'+$(`${x}`).prop('id')+'.sc-t')).css('visibility', 'collapse');
    } else{
        $($('#'+$(`${x}`).prop('id')+'.sc-i').css('height', '173px');
        $($('#'+$(`${x}`).prop('id')+'.sc-t').css('visibility', 'visible');
    }
/*
    if($(`${x} .sc-i`).prop('clientHeight') === 173){
        $(`${x} .sc-i`).css('height', '373px');
        $(`${x} .sc-i`).css('visibility', 'collapse');
    } else{
        $(`${x} .sc-i`).css('height', '173px');
        $(`${x} .sc-i`).css('visibility', 'visible');
    }
*/

/*
    if($(`${x} .sc-i`).prop('clientHeight') === 173){
        $(`${x} .sc-i`).css('height', '373px');
        $(`${x} .sc-t`).css('visibility', 'collapse');
    } else{
        $(`${x} .sc-i`).css('height', '173px');
        $(`${x} .sc-t`).css('visibility', 'visible');
    }
*/
}


