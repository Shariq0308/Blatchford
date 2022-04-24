sliderint = 1;
sliderNext = 2;

$(document).ready(function(){
    $("#slider>Img#1").show();
    startSlider();
});

function startSlider(){
    countCheck = 4;
   
    loop   = setInterval(function(){

        if(sliderNext>countCheck){
            sliderNext = 1;
            sliderint = 1;
        }
        $("#slider>Img").hide();
        $("#slider>Img#"+sliderNext).show();

        sliderNext = sliderNext + 1;
    }, 15000)
}



function prev(){
    newSlide = sliderNext - 2;
    showslide(newSlide);  
}

function next(){
    newSlide = sliderint + 1;
    showslide(newSlide);
}

function stopLoop(){
    window.clearInterval(loop);
}

function showslide(id){
    stopLoop();
    if(id>countCheck){
            id = 1;
        }else if(id<1){
            id = countCheck;
        }

    $("#slider>Img").hide();
    $("#slider>Img#"+id).show();

    sliderint = id
    sliderNext = id + 1;
    
    startSlider();
}

$("#slider>Img").hover(
    
    function(){stopLoop();},
    function(){startSlider();},
    
);