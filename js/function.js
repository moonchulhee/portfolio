$(function(){
  


  var $mnu = $('header>.header>.header_pagination>ol>li>a');
  
  
  var $mnu_0 = $mnu.eq(0);
  var $mnu_1 = $mnu.eq(1);
  var $mnu_2 = $mnu.eq(2);
  var $mnu_3 = $mnu.eq(3);
  var $mnu_4 = $mnu.eq(4);


 $mnu_0.on('click',function(evt){
  evt.preventDefault();
  $('html,body').stop().animate({
    scrollTop:0
  });
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
 });
 $mnu_1.on('click',function(evt){
  evt.preventDefault();
  $('html,body').stop().animate({
    scrollTop:750
    
  });
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });
 $mnu_2.on('click',function(evt){
  evt.preventDefault();
  $('html,body').stop().animate({
    scrollTop:1600
  });
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });
 $mnu_3.on('click',function(evt){
  evt.preventDefault();
  $('html,body').stop().animate({
    scrollTop:2420
  });
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });
 $mnu_4.on('click',function(evt){
  evt.preventDefault();
  $('html,body').stop().animate({
    scrollTop:3400
  });
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });



  






  
  //슬라이드 배너


  var $indicator = $('section>.sect_01>.slides-pagination>li>a');//인디케이터
  var $container = $('section>.sect_01>.slides-banner');//컨테이너
  var $btn_prev = $('section>.sect_01>.slides-prev');
  var $btn_next = $('section>.sect_01>.slides-next');
  var nowIdx = 0;
  
  

  function moveFn(){
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $container.stop().animate({
      left:-(100*nowIdx)+'%' 
    })
  }

  function nextIdx(){
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx=0;
    }
  }
  
  function prevIdx(){
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=2;
    }
  }

    $indicator.on('click',function(evt){
    evt.preventDefault();
    nowIdx = $indicator.index(this);
    
    moveFn();
  });


  $btn_prev.on('click',function(){
    prevIdx();
    moveFn();
  });

  $btn_next.on('click',function(){
    nextIdx();
    moveFn();
  });


  setInterval(function(){
      
    if(nowIdx<2){
        nowIdx++;
    }else{
        nowIdx=0;
    }
    moveFn();
  },2000);



  
  
  
  //레시피

  var $bigImg = $('section>.sect_04>.recipe_bt>p.recipe_screen>a');
  var $thmbs = $('section>.sect_04>.recipe_bt>ul.recipe_thmbs>li>a');

  $thmbs.on('click',function(evt){

    evt.preventDefault();

    var img = $(this).attr('href');
    var tit = $(this).attr('title');


    $bigImg.css({
      backgroundImage:'url(' + img + ')',
      backgroundSize:'100%'
    });
    $bigImg.text(tit);
    
  });



});
