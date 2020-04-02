$(".prev").click(
  prevImg
);
$(".next").click(
  nextImg
);
$(".firstcircle").click(
  selectFirst
);
$(".secondcircle").click(
  selectImg2
);
$(".threecircle").click(
  selectImg3
);
$(".lastcircle").click(
  selectLast
);
function prevImg(){
  var imgSlide = $(".images img.active");
  var buttonSlide = $(".nav i.active");

  imgSlide.removeClass("active");
  buttonSlide.removeClass('active');

  if(imgSlide.hasClass("first")){
    $(".images img.last").addClass("active");
    $(".nav i.lastcircle").addClass("active")
  }else{
    imgSlide.prev().addClass("active");
    buttonSlide.prev().addClass("active");
  }
}
function nextImg(){
  var imgSlide = $(".images img.active");
  var buttonSlide = $(".nav i.active");

  imgSlide.removeClass("active");
  buttonSlide.removeClass('active');

  if(imgSlide.hasClass("last")){
    $(".images img.first").addClass("active");
    $(".nav i.firstcircle").addClass("active")
  }else{
    imgSlide.next().addClass("active");
    buttonSlide.next().addClass("active");
  }
}
function selectFirst(){
  $(".two").removeClass("active")
  $(".three").removeClass("active")
  $(".last").removeClass("active")
  $(".secondcircle").removeClass("active")
  $(".threecircle").removeClass("active")
  $(".lastcircle").removeClass("active")
  if($(".nav i").hasClass("firstcircle")){
    $(".firstcircle").addClass("active")
    $(".first").addClass("active")
  }
}
function selectImg2(){
  $(".first").removeClass("active")
  $(".three").removeClass("active")
  $(".last").removeClass("active")
  $(".firstcircle").removeClass("active")
  $(".threecircle").removeClass("active")
  $(".lastcircle").removeClass("active")
  if($(".nav i").hasClass("secondcircle")){
    $(".secondcircle").addClass("active")
    $(".two").addClass("active")
  }
}
function selectImg3(){
  $(".first").removeClass("active")
  $(".two").removeClass("active")
  $(".last").removeClass("active")
  $(".firstcircle").removeClass("active")
  $(".secondcircle").removeClass("active")
  $(".lastcircle").removeClass("active")
  if($(".nav i").hasClass("threecircle")){
    $(".threecircle").addClass("active")
    $(".three").addClass("active")
  }
}
function selectLast(){
  $(".first").removeClass("active")
  $(".two").removeClass("active")
  $(".three").removeClass("active")
  $(".firstcircle").removeClass("active")
  $(".secondcircle").removeClass("active")
  $(".threecircle").removeClass("active")
  if($(".nav i").hasClass("lastcircle")){
    $(".lastcircle").addClass("active")
    $(".last").addClass("active")
  }
}
