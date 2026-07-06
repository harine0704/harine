
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});



// Dark Mode

const themeBtn=document.getElementById("theme-toggle");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

const icon=this.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.replace("fa-moon","fa-sun");

}else{

icon.classList.replace("fa-sun","fa-moon");

}

};

// RTL

document.getElementById("rtl-toggle").onclick=function(){

document.body.classList.toggle("rtl-mode");

};




// Dark Mode

const themeBtn=document.getElementById("theme-toggle");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

const icon=this.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.replace("fa-moon","fa-sun");

}else{

icon.classList.replace("fa-sun","fa-moon");

}

};

// RTL

document.getElementById("rtl-toggle").onclick=function(){

document.body.classList.toggle("rtl-mode");

};














