slider2int = 4;
slider2Next = 5;

$(document).ready(function(){
    $("#slider-2>Img#1").show();
    startSlider2();
});

function startSlider2(){
    countCheckk = 8;
   
    loop   = setInterval(function(){

        if(slider2Next>countCheckk){
            slider2Next = 5;
            slider2int = 4;
        }
        $("#slider-2>Img").hide();
        $("#slider-2>Img#"+slider2Next).show();

        slider2Next = slider2Next + 1;
    }, 15000)
}



function prev2(){
    newSlidee = slider2Next - 2;
    
    showslidee(newSlidee);  
}

function next2(){
    newSlidee = slider2int + 1;
    
    showslidee(newSlidee);
}



function showslidee(idd){
    
    if(idd>countCheckk){
            idd = 4;
        }else if(idd<4){
            idd = 8;
        }
      
    $("#slider-2>Img").hide();
    $("#slider-2>Img#"+idd).show();

    slider2int = idd
    slider2Next = idd + 1;
    
    startSlider2();
}

