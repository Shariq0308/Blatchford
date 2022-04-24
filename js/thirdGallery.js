let eImages = document.querySelectorAll(".exterior-img");
let elatestImg;
let winwidthe = window.innerWidth;

if(eImages){
    eImages.forEach(function(imgge, index){
        imgge.onclick = function(){
            
            let getEcsse = window.getComputedStyle(imgge);
            let getEImgURL = getEcsse.getPropertyValue("background-image");
            let getIurlPose = getEImgURL.split("/Blatchford/Pictures/");
            let setEImgURL = getIurlPose[1].replace('")','');
            

            elatestImg = index + 1;

            let etainer = document.body;
            let eImgWindow = document.createElement("div");
            etainer.appendChild(eImgWindow);
            eImgWindow.setAttribute("class", "img-window");
            eImgWindow.setAttribute("onclick", "closedImge()");

            let eImg = document.createElement("img");
            eImgWindow.appendChild(eImg);
            eImg.setAttribute("src", "/Blatchford/Pictures/" + setEImgURL);
            eImg.setAttribute("id", "currE-imge");

            eImg.onload = function() {
                let imgWidthe = this.width;
                let ImageToEdge = ((winwidthe - imgWidthe) / 2) - 80;
                
                let neweBtn = document.createElement("a");
                let btneText = document.createTextNode("NEXT");
                neweBtn.appendChild(btneText);
                etainer.appendChild(neweBtn);
                neweBtn.setAttribute("Class", "img-btn-ne");
                neweBtn.setAttribute("onclick", "changeImageE(1)");

                neweBtn.style.cssText = "right: " + ImageToEdge + "px;";

                let prevEBtn = document.createElement("a");
                let btnPText = document.createTextNode("PREV");
                prevEBtn.appendChild(btnPText);
                etainer.appendChild(prevEBtn);
                prevEBtn.setAttribute("Class", "img-btn-pe");
                prevEBtn.setAttribute("onclick", "changeImageE(0)");

                prevEBtn.style.cssText = "left: " + ImageToEdge + "px;";
            }

        }
    });
}


function closedImge(){
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-ne").remove();
    document.querySelector(".img-btn-pe").remove();
}

function changeImageE(EEDirectory){

    document.querySelector("#currE-imge").remove();
    
    let getImageWIndow = document.querySelector(".img-window");
    let eImg = document.createElement("img");
    getImageWIndow.appendChild(eImg);
    
    let calENewImage;
    
    if(EEDirectory === 1) {
        
        calENewImage = elatestImg + 1;
        if(calENewImage > eImages.length){
            calENewImage = 1;
        }
    }
    else if (EEDirectory === 0){
        calENewImage = elatestImg - 1;
        if(calENewImage < 1){
            calENewImage = eImages.length;
        }
    }

    eImg.setAttribute("src", "/Blatchford/Pictures/Exterior" + calENewImage +".jpg");
    eImg.setAttribute("id", "currE-imge");
    
    elatestImg = calENewImage;

}
