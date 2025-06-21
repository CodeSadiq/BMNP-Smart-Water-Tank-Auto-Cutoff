let i=0;
function nextImage(){
    i++;
    if(i>3){
        i=0;
    };
    document.querySelector("#productImageContainer img").setAttribute("src", `./images/switchimage${i}.png`)
    
}
function previousImage(){
    i--;
    if(i<0){
        i=3;
    };
    document.querySelector("#productImageContainer img").setAttribute("src", `./images/switchimage${i}.png`)
    
}

document.querySelector(".productBodyRight #container3 ").addEventListener("click" , nextImage);
document.querySelector(".productBodyRight #container1 ").addEventListener("click" , previousImage);