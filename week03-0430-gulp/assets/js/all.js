"use strict";

$(document).ready(function () {
  $(".js-anc01").on("click", function () {
    var offsetTop = $('#js-page01').offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 500);
  });
  $(".js-anc02").on("click", function () {
    var offsetTop = $('#js-page02').offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 500);
  });
  $(".js-anc03").on("click", function () {
    var offsetTop = $('#js-page03').offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 500);
  });
  $(".js-anc04").on("click", function () {
    var offsetTop = $('#js-page04').offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 500);
  });
  $(window).scroll(function () {
    var HH = $(window).scrollTop();

    if (HH > 900) {
      $(".topBack").stop().animate({
        "opacity": "1"
      }, 500);
      $(".topBack").on("click", clickFn);
    } else {
      $(".topBack").stop().animate({
        "opacity": "0"
      }, 500);
    }
  });

  function clickFn() {
    $(".topBack").off("click", clickFn);
    $("html,body").stop().animate({
      scrollTop: 0
    }, 500);
  }

  ; // 首頁

  $('.js-ham').click(function (e) {
    e.preventDefault();
    $('.js-nav').toggleClass('active');
    $('.js-menu').toggleClass('active');
    $('body').toggleClass('active');

    if ($('.blogNav').hasClass("active") === true) {
      $('.blogNav').removeClass('active');
      $('.js-blogMenu').removeClass('active');
    }

    ;
  });
  $('.js-nav').click(function (e) {
    $('.js-nav').removeClass('active');
    $('.js-menu').removeClass('active');
    $('body').removeClass('active');
  }); // 產品頁

  $('.productsContent').hide();
  $('.productsContent').eq(0).show();
  var isOpen = true;
  $('.js-pd-btn').on('click', function () {
    if (isOpen === true) {
      isOpen = false;
      var id = $(this)[0].id.substr(2);
      $('.productsMenu＿item').removeClass('active');
      $(this).addClass('active');
      $('.productsContent').fadeOut(100);
      $(".productsContent" + id).delay(100).fadeIn(100, function () {
        isOpen = true;
      });
    }
  }); // 部落格

  $('.blogMenu＿close').on('click', function () {
    $('.blogMenu＿close').toggleClass('active');
    $('.blogNav').toggleClass('active');
    $('.js-blogMenu').toggleClass('active');
  });
  var len = 140; // 超過140個字以"..."取代

  $(".js-ellipsis").each(function (i) {
    if ($(this).text().length > len) {
      $(this).attr("title", $(this).text());
      var text = $(this).text().substring(0, len - 1) + "...";
      $(this).text(text);
    }
  }); // QA

  $('.card＿item＿body').hide();
  $('.card＿item').eq(0).addClass('active');
  $('.card＿item＿body').eq(0).show();
  $('.card＿item').click(function (e) {
    e.preventDefault(); // 加上 active 屬性，並把其他有 active 的移除

    $(this).toggleClass('active').siblings().removeClass('active'); // 讓自己的 li body 切換收合

    $(this).children().next().slideToggle(); // 讓其他 li body 收合

    $(this).siblings().children().next().slideUp();
  });
});
//# sourceMappingURL=all.js.map
