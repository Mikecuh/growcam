let lang="en";
function toggleLang(){
  lang = lang==="en" ? "kh" : "en";
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.textContent = el.dataset[lang];
  });
}

const android="https://growcam.vercel.app/api/growcam-android";
const android2="https://www.mediafire.com/file/99xylwpysecvgne/SpotyPS.txt/file";
const ios="https://growcam.vercel.app/api/growcam-ios";
const hosts=`91.134.85.13 growtopia1.com
91.134.85.13 growtopia2.com
91.134.85.13 www.growtopia1.com
91.134.85.13 www.growtopia2.com`;

function copyText(text){
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

/* Tabs */
document.querySelectorAll(".tab-btn").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".tab-btn,.tab-content")
      .forEach(e=>e.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  }

  document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    document.querySelectorAll(".nav-links a")
      .forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
  });
});
});

