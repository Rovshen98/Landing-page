

let burger = document.querySelector(".fa-bars");
let menu = document.querySelector(".passive");
burger.addEventListener("click", () => {
  menu.classList.toggle("resmenu");
});

head_2=document.querySelector("header")

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    head_2.classList.add("active")
  } 
  else{
    
    head_2.classList.remove("active")
  }
});


var swiper = new Swiper(".main_slider_1", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   second_slider------------
let sone= document.querySelector(".stick_one")
let stwo=document.querySelector(".stick_two")
let sthree= document.querySelector(".stick_three")

let img1 = document.querySelector(".profile")
let img2 = document. querySelector(".down")
let img3 = document.querySelector(".appilo")

sone.addEventListener('click', () => {
    document.querySelector(".swiper-wrapper_second img")
    .setAttribute("src","./IMG/profile.jpg")
  });
  
  stwo.addEventListener('click', () => {
    document.querySelector(".swiper-wrapper_second img")
    .setAttribute("src","./IMG/down.png")
  });

  sthree.addEventListener('click', () => {
     document.querySelector(".swiper-wrapper_second img")
    .setAttribute("src","./IMG/appilo.jpg")
  });

  // third slider===============
  var swiper = new Swiper(".tslider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 4,
    coverflowEffect: {
      scale:0.8,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  }); 