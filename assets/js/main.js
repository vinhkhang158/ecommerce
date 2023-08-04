/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      }
  });

/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContent= document.querySelectorAll('[content]')
tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        const target= document.querySelector(tab.dataset.target)
        tabContent.forEach((tabContent)=>{
            tabContent.classList.remove('active-tab')
            
        })
        target.classList.add('active-tab')
        tabs.forEach((tab)=>{
            tab.classList.remove('active-tab')
        })
        tab.classList.add('active-tab')
    })
})
function account(){
  let cur = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [];
    console.log(cur); //Hiện user đang đang nhập
    if (cur.length > 0) { // Nếu current
      window.location = 'accounts.html'
      


    }
    else{
      alert("Tài khoản chưa đăng nhập");
      
    }

}
