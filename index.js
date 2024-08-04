const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    
    slidesPerView:3,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
const toggle_button = document.querySelector(".toggle-button")
const dropdown = document.querySelector(".toggle-dropdown")
toggle_button.addEventListener('click' , ()=>{
    dropdown.classList.toggle("show_dropdown")
})

