let i=0;
function nextImage(){
    i++;
    if(i>3){
        i=0;
    };
    document.querySelector("#productImageContainer img").setAttribute("src", `./images/switchImage${i}.png`)
    
}
function previousImage(){
    i--;
    if(i<0){
        i=3;
    };
    document.querySelector("#productImageContainer img").setAttribute("src", `./images/switchImage${i}.png`)
    
}

document.querySelector(".productBodyRight #container3 ").addEventListener("click" , nextImage);
document.querySelector(".productBodyRight #container1 ").addEventListener("click" , previousImage);

function changeteamfoto() {
    var i = 1;
    setInterval( ()=> {
       document.querySelector("#aboutUsImageContainermain").setAttribute("src",`./images/teamimage${i}.jpg`)
       i++
       if(i > 2){
        i =0;
       }
    },4000)
}

changeteamfoto();