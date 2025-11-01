document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
});


// Folder where your icons are stored
const iconFolder = "images/";  

// Icon files
const iconFiles = [
  "whatsapp.png",
  "Instagram.png",
  "linkedin.png",
   "herobg.jpg",
  " herobg.png",
  "house1.png",
];

// Preload images
iconFiles.forEach((file) => {
  const img = new Image();
  img.src = iconFolder + file;
});


window.addEventListener("load", function() {
  if (window.location.hash) {
    window.location.href = window.location.pathname; 
  }
});