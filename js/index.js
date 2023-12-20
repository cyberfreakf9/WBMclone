LondonSlides()
function LondonSlides() {
  $(document).ready(function () {
    $('.london-slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      autoplay: true,
      speed: 500,
      dots: true,
      prevArrow:
        '<div class="slick-left"><span style="color:orange;padding:14px 14px;border-radius:100%;background-color:black" class="fa fa-angle-left fa-2xl"></span><span class="sr-only">Prev</span></div>',

      nextArrow:
        '<div class="slick-right"><span style="color:orange;padding:14px 14px;border-radius:100%;background-color:black" class="fa fa-angle-right fa-2xl"></span><span class="sr-only">Next</span></div>',
      // responsive: [
      //   {
      //     breakpoint: 767,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
      //   // You can unslick at a given breakpoint now by adding:
      //   // settings: "unslick"
      //   // instead of a settings object
      // ],
    })
  })
}
NoveltySlides()
function NoveltySlides() {
  $(document).ready(function () {
    $('.novelty-slick').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      autoplay: false,
      speed: 500,
      dots: true,
      prevArrow:
        '<div class="slick-left" ><span style="color:orange;padding:12px 12px;border-radius:50%;background-color:grey" class="fa fa-angle-left fa-2xl"></span><span class="sr-only">Prev</span></div>',

      nextArrow:
        '<div class="slick-right"><span style="color:orange;padding:12px 12px;border-radius:50%;background-color:grey" class="fa fa-angle-right fa-2xl"></span><span class="sr-only">Next</span></div>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    })
  })
}
const stickEl = document.getElementById('stick')
// window.onscroll = function () {
//   myFunction()
// }
var top = 60
function myFunction() {
  if (window.scrollY >= top) {
    alert('hello')
    stickEl.classList.add('sticky')
  } else {
    stickEl.classList.remove('sticky')
  }
}
window.addEventListener('scroll', () => {
  stickEl.classList.toggle('sticky', window.scrollY > 40)
})
