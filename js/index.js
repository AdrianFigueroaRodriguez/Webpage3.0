console.log('Js is conected');

window.onload = function(){
    

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
}

setTimeout(function(){
    document.getElementById("m-vp-v").play();
}, 4000);

function navMenuContainer(){
    if($('.n-m-c').is(':visible')){
        $('.n-m-c').css('visibility', 'hidden');
    }
}

function navDropdownCancel(){
    if($('.n-m-c').is(':visible')){
        $('.n-m-c').css('visibility', 'visible');
    }
}

/* Empty */
function cardImgExpandXS(x){
    
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

/* Empty */
function cardImgExpandM(x){

}

function cardImgExpandL(cardImgContainerId, btnId, unNeededCard){
    if($(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).prop('clientHeight') == 200){
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('visibility', 'collapse ');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('padding', '0px');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('margin', '0px');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('height', '0px');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('height', '373px');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('width', 'max-content');
        document.getElementById(cardImgContainerId).classList.remove('col-lg-6');
        document.getElementById(cardImgContainerId).classList.add('col-lg-12');
        $('#' + `${unNeededCard}`).css('visibility', 'collapse');
        $(`#` + `${unNeededCard}` + ` .cies-r`).css('visibility', 'collapse');    

    } else{
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('visibility', 'visible');
        $(`#` + `${cardImgContainerId}` + ` .card-body`).css('padding', '1.25rem');
        $(`#` + `${cardImgContainerId}` + ` .card-title`).css('margin-bottom', '.75rem');
        $(`#` + `${cardImgContainerId}` + ` .cl-star`).css('visibility', 'collapse');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('height', 'auto');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('height', '200');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('width', 'auto');
        document.getElementById(cardImgContainerId).classList.remove('col-lg-12');
        document.getElementById(cardImgContainerId).classList.add('col-lg-6');
        $('#'+`${unNeededCard}`).css('visibility', 'visible');
        $(`#` + `${unNeededCard}` + ` .cies-r`).css('visibility', 'visible');
        $(`#` + `${unNeededCard}` + ` .cies-r .cl-star`).css('visibility', 'collapse');
    }
}

function cardImgExpandXL(cardImgContainerId, btnId, unNeededCard){
    if($(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).prop('clientHeight') == 389){
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('visibility', 'collapse ');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('padding', '0px');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('margin', '0px');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('height', '0px');
        $(`#` + `${cardImgContainerId}` + ` button`).css('max-height', '587px');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('width', 'max-content');
        document.getElementById(cardImgContainerId).classList.remove('col-lg-6');
        document.getElementById(cardImgContainerId).classList.add('col-lg-12');
        $('#' + `${unNeededCard}`).css('visibility', 'collapse');
        $(`#` + `${unNeededCard}` + ` .cies-r`).css('visibility', 'collapse');

    } else {
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('visibility', 'visible');
        $(`#` + `${cardImgContainerId}` + ` .card-body`).css('padding', '1.25rem');
        $(`#` + `${cardImgContainerId}` + ` .card-title`).css('margin-bottom', '.75rem');
        $(`#` + `${cardImgContainerId}` + ` .cl-star`).css('visibility', 'collapse');
        $(`#` + `${cardImgContainerId}` + ` .cies-r`).css('height', 'auto');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('height', '389');
        $(`#` + `${cardImgContainerId}` + ` #` + `${btnId}`).css('width', 'auto');
        document.getElementById(cardImgContainerId).classList.remove('col-lg-12');
        document.getElementById(cardImgContainerId).classList.add('col-lg-6');
        $('#'+`${unNeededCard}`).css('visibility', 'visible');
        $(`#` + `${unNeededCard}` + ` .cies-r`).css('visibility', 'visible');
        $(`#` + `${unNeededCard}` + ` .cies-r .cl-star`).css('visibility', 'collapse');
    }
}

function cardImgExpand(x, y, z){
    if((window.matchMedia("(max-width: 576px)").matches)){
        cardImgExpandXS(x);
    } else if((window.matchMedia("(min-width: 576px)").matches && (window.matchMedia("(max-width: 768px)").matches))){
        cardImgExpandS(x);
    } else if((window.matchMedia("(min-width: 768px)").matches && (window.matchMedia("(max-width: 992px)").matches))){
        cardImgExpandM(x);
    } else if((window.matchMedia("(min-width: 992px)").matches && (window.matchMedia("(max-width: 1200px)").matches))){
        cardImgExpandL(x, y, z);
    } else {
        cardImgExpandXL(x, y, z);
    }
}
