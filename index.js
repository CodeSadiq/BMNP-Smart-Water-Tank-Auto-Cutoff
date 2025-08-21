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




  
// To place sections on viewport 

(function () {
  const sections = Array.from(document.querySelectorAll('.snap-section'));
  let timer;

  // Custom smooth scroll function
  function smoothScrollTo(targetY, duration = 1500) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Find section with maximum visible area
  function getMostVisibleSection() {
    return sections.reduce((best, el) => {
      const rect = el.getBoundingClientRect();
      const visible =
        Math.min(rect.bottom, window.innerHeight) -
        Math.max(rect.top, 0);

      const visibleHeight = Math.max(0, visible);

      return visibleHeight > best.visible
        ? { el, visible: visibleHeight }
        : best;
    }, { el: null, visible: 0 }).el;
  }

  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        const target = getMostVisibleSection();
        if (target) {
          const targetY = window.scrollY + target.getBoundingClientRect().top;
          smoothScrollTo(targetY, 900); // 900ms smooth scroll
        }
      }, 10000); // wait after scroll stops
    },
    { passive: true }
  );
})();


  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".floating-social").classList.add("show");
    }, 4000); // 4 seconds
  });
