//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();
    $('.header_wrapper').addClass("hide");
    $('.header_language_wrapper').addClass("hide");

  
});

$(document).on("click", ".mobile-close", function(){
  
    $('.mobile_version').fadeToggle();
    $('.header_wrapper').removeClass("hide");
    $('.header_language_wrapper').removeClass("hide");
  
});


//swiper

const swiper = new Swiper('#first_swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
        
      481: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      
      485: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      488: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      490: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      701: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      705: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      710: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      730: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      731: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      735: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      738: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      740: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1216: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1218: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1230: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }

  });



  const second_swiper = new Swiper('#second_swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
        
      481: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      
      485: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      488: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      490: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      670: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      671: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 10
      },

      699: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      701: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      705: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      710: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      730: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      731: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      735: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      738: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      740: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      770: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1141: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1148: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1149: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });



 //modals
  $(document).on("click", ".our_games_works_item_link", function(){
    $(".modal").toggleClass("open");
    $("body").toggleClass("hidden_body");
  })

  $(document).on("click", ".hidden_games_works_link", function(){
    $(".modal").toggleClass("open");
    $("body").toggleClass("hidden_body");
  })
  
  $(document).on("click", ".modal_close", function(event){
    event.stopPropagation();
    $(".modal").removeClass("open");
    $("body").removeClass("hidden_body");
  })

 
  $(document).on("click", ".write_us_form_btn", function(){
    $(".send_modal").toggleClass("open");
    $("body").toggleClass("hidden_body");
  })
    
  $(document).on("click", ".send_modal_close", function(event){
    event.stopPropagation();
    $(".send_modal").removeClass("open");
    $("body").removeClass("hidden_body");
  })




  //input's change
  $(document).on("change", "#write_us_check_input", function(){
    if($("#write_us_check_input").is(':checked')) {
      $(this).parent().addClass("active");
    } else{
      $(this).parent().removeClass("active");
    }
 })



//input type file

$(document).on('change','#fileinput',function () {

  var value = $(this).val();

    var arr = value.split('\\');

    $(this).parent().find(".file_span").html(arr[arr.length - 1]);

    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];

    var span = $(this).parent().find(".file_span");



    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {

        span.html("Невозможно загрузить формат");

        span.css({
            'color': '#F60000'
        });

        $('.hide-title').css({
            "display": "block"
        })

    

    } else {

        span.css({

            'color': "#9c9c9c"

        });


      //  var parent =$(this).closest(".projects-form-input-wrapper");

      //  parent.append("<img class='close-js' src='wp-content/themes/build/images/file-.svg' alt=''>");

      //  parent.append("<p class='hide-title'>Файл</p>");

      //   parent.css({

      //      "position": 'relative',

      //      "justify-content": 'space-between'

      //  });



    }

});


$(document).on('change','#second_file_input',function () {

  var value = $(this).val();

    var arr = value.split('\\');

    $(this).parent().find(".file_span").html(arr[arr.length - 1]);

    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];

    var span = $(this).parent().find(".file_span");



    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {

        span.html("Невозможно загрузить формат");

        span.css({
            'color': '#F60000'
        });

        $('.hide-title').css({
            "display": "block"
        })

    

    } else {

        span.css({

            'color': "#9c9c9c"

        });


      //  var parent =$(this).closest(".projects-form-input-wrapper");

      //  parent.append("<img class='close-js' src='wp-content/themes/build/images/file-.svg' alt=''>");

      //  parent.append("<p class='hide-title'>Файл</p>");

      //   parent.css({

      //      "position": 'relative',

      //      "justify-content": 'space-between'

      //  });



    }

});

//top button

$(document).on("click", ".up_btn", function(){
  
  $('html, body').animate({scrollTop : 0},800);
  return false;
})


//red and black links functional part
$(".bottom_link").click(function () {
  let id = $(this).attr("href");
  let scrollElem = $(id);
  let offsetTop = $(scrollElem).offset().top;
  $("html, body").animate({
      scrollTop: offsetTop - 200,
  }, 1000);
});


$(".top_link").click(function () {
  let id = $(this).attr("href");
  let scrollElem = $(id);
  let offsetTop = $(scrollElem).offset().top;
  $("html, body").animate({
      scrollTop: offsetTop - 200,
  }, 1000);
});



// ymaps.ready(function () {console.log('ready')});


// function init(){
//   // Создание карты.
//   var myMap = new ymaps.Map("map", {center: [55.76, 37.64],zoom: 7});

 
// }
// // ymaps.ready(init);

// $(document).ready(function(){
  

//   // ymaps.ready(function () {
//   //   var myMap = new ymaps.Map('map', {
//   //           center: [55.751574, 37.573856],
//   //           zoom: 9
//   //       }, {
//   //           searchControlProvider: 'yandex#search'
//   //       }),
  
//   //       // Создаём макет содержимого.
//   //       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//   //           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//   //       ),
  
//   //       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//   //           hintContent: 'Собственный значок метки',
//   //           balloonContent: 'Это красивая метка'
//   //       }, {
//   //           // Опции.
//   //           // Необходимо указать данный тип макета.
//   //           iconLayout: 'default#image',
//   //           // Своё изображение иконки метки.
//   //           iconImageHref: 'images/myIcon.gif',
//   //           // Размеры метки.
//   //           iconImageSize: [30, 42],
//   //           // Смещение левого верхнего угла иконки относительно
//   //           // её "ножки" (точки привязки).
//   //           iconImageOffset: [-5, -38]
//   //       }),
  
//   //       myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
//   //           hintContent: 'Собственный значок метки с контентом',
//   //           balloonContent: 'А эта — новогодняя',
//   //           iconContent: '12'
//   //       }, {
//   //           // Опции.
//   //           // Необходимо указать данный тип макета.
//   //           // iconLayout: 'default#imageWithContent',
//   //           // // Своё изображение иконки метки.
//   //           // iconImageHref: 'images/ball.png',
//   //           // Размеры метки.
//   //           iconImageSize: [48, 48],
//   //           // Смещение левого верхнего угла иконки относительно
//   //           // её "ножки" (точки привязки).
//   //           iconImageOffset: [-24, -24],
//   //           // Смещение слоя с содержимым относительно слоя с картинкой.
//   //           iconContentOffset: [15, 15],
//   //           // Макет содержимого.
//   //           iconContentLayout: MyIconContentLayout
//   //       });
  
//   //   myMap.geoObjects
//   //       .add(myPlacemark)
//   //       .add(myPlacemarkWithContent);
//   // });

// })

