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
  const images = ["./images/teamimage0.jpg", "./images/teamimage1.jpg", "./images/teamimage2.jpg"];
  let i = 0;
  let intervalId = null;
  const imgElement = document.querySelector("#aboutUsImageContainermain");

  function startChanging() {
    if (intervalId) return; // already running
    intervalId = setInterval(() => {
      i = (i + 1) % images.length; // loop images
      imgElement.setAttribute("src", images[i]);
    }, 2000);
  }

  function stopChanging() {
    clearInterval(intervalId);
    intervalId = null;
    setTimeout(()=> {
        imgElement.setAttribute("src", images[0]);
    }, 2000)
  }

  // observe when image is visible on screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startChanging();
      } else {
        stopChanging();
      }
    });
  }, { threshold: 0.5 }); // run only when 50% visible

  observer.observe(imgElement);
}

changeteamfoto();

