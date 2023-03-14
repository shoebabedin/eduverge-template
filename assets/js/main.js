$(document).ready(function () {
  // prelaoder
  $(window).on("load", function () {
    $("#status").fadeOut(); 
    $("#preloader").delay(2000).fadeOut("slow"); 
    $("body").delay(1000).css({ overflow: "visible" });
  });
  // prelaoder



  //  testimonial slider
  $(".suggested-slider").slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipeToSlide: true
  });

  //  testimonial slider

  // cart sidebar section
  // var replaceBtn = document.querySelector(".apply");
  // var replaceDom = document.querySelector(".promoCodeFeild");
  // var promoApply = document.querySelector(".promo_apply");
  // var couponText = document.querySelector(".couponText");
  // var discount = document.querySelector(".discount");

  // $(replaceBtn).click(function () {
  //   $(replaceBtn).addClass("d-none");
  //   $(replaceDom).removeClass("d-none");
  // });

  // $(promoApply).click(function () {
  //   $(discount).removeClass("d-none");
  // });

  
  // dropdown toggle btn

  // $(".img").on("click", function () {
  //   $(this).toggleClass("active");
  // });

  // texture item selector
  // $(".product-texture-item").click(function () {
  //   $(this).toggleClass("active");
  // });

  // const stars = document.querySelectorAll(".stars i");
  // const starsNone = document.querySelector(".rating-box");

  // ---- ---- Stars ---- ---- //
  // stars.forEach((star, index1) => {
  //   star.addEventListener("click", () => {
  //     stars.forEach((star, index2) => {
  //       // ---- ---- Active Star ---- ---- //
  //       index1 >= index2
  //         ? star.classList.add("active")
  //         : star.classList.remove("active");
  //     });
  //   });
  // });

  // $(".ph-heart").on("click", function () {
  //   $(this).toggleClass("ph-heart-fill");
  // });
  // product heart

  // product hero slider
  // $(".product_hero_slider_for").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: ".product_hero_slider_nav",
  //   autoplay: true
  // });
  // $(".product_hero_slider_nav").slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   asNavFor: ".product_hero_slider_for",
  //   arrows: false,
  //   dots: false,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         vertical: false
  //       }
  //     }
  //   ]
  // });
  // product hero slider

  // all product filter button select
  // let selectBtn = document.querySelector(".all-product-name li");

  // $(".all-product-name li").on("click", function () {
  //   $(this).toggleClass("active");
  // });
  // all product filter button select

  // sticky nav
  var btn = $("#top_navbar");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("sticky");
    } else {
      btn.removeClass("sticky");
    }
  });
  // sticky nav


    // MixItUp Shorting
$(function(){
  $('.shorting').mixItUp();
});

  
});

// toggle date
// function myDateShow() {
//   var checkBox = document.getElementById("myCheck");
//   var text = document.getElementById("text");
//   if (checkBox.checked == true) {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

// js password show
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// increase & decrease btn
// $(function () {
//   $("[data-decrease]").click(decrease);
//   $("[data-increase]").click(increase);
//   $("[data-value]").change(valueChange);
// });

// function decrease() {
//   var value = $(this).parent().find("[data-value]").val();
//   if (value > 1) {
//     value--;
//     $(this).parent().find("[data-value]").val(value);
//   }
// }

// function increase() {
//   var value = $(this).parent().find("[data-value]").val();
//   if (value < 100) {
//     value++;
//     $(this).parent().find("[data-value]").val(value);
//   }
// }

// function valueChange() {
//   var value = $(this).val();
//   if (value == undefined || isNaN(value) == true || value <= 0) {
//     $(this).val(1);
//   } else if (value >= 101) {
//     $(this).val(100);
//   }
// }

// scroll to top

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Window History Back
function goBack() {
  window.history.back();
}



// email validation
const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
      text.innerHTML="";
    }else{
      email.className="form-control border-danger",
      text.innerHTML='<div class="row"><div class="col-2"><i class="ph-warning-circle-fill"></i></div><div class="col-10"><h6>Invalid Email</h6><p>Please enter email as name@email.com</p></div></div>';
    }
})



// sidebar sticky
// $(function() {
//   var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
//   var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

//   var maxY = footTop - $('#sidebar').outerHeight();

//   $(window).scroll(function(evt) {
//     var y = $(this).scrollTop();
//     if (y > top) {
//       if (y < maxY) {
//         $('#sidebar').addClass('fixed').removeAttr('style');
//       } else {
//         $('#sidebar').removeClass('fixed').css({
//           position: 'absolute',
//           top: (maxY - top) + 'px'
//         });
//       }
//     } else {
//       $('#sidebar').removeClass('fixed');
//     }
//   });
// });


// custom dropdoen
// Change option selected
const label = document.querySelector('.dropdown__filter-selected')
const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

options.forEach((option) => {
	option.addEventListener('click', () => {
		label.textContent = option.textContent
	})
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter')		
	
	if (!isDropdownChild) {
		toggle.checked = false
	}
})