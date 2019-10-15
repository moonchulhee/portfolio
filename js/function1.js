$(function(){
  


  var $mnu = $('header>.header>.header_pagination>ol>li>a');
  
  
  var $mnu_0 = $mnu.eq(0);
  var $mnu_1 = $mnu.eq(1);
  var $mnu_2 = $mnu.eq(2);
  var $mnu_3 = $mnu.eq(3);
  var $mnu_4 = $mnu.eq(4);


  var arrTopVal = [0,750,1600,2420,3400,]
  function pageAni(topVal){
    $('html,body').stop().animate({
      scrollTop:topVal
    });
  }


 $mnu_0.on('click',function(evt){
  evt.preventDefault();
  pageAni(arrTopVal[0]);
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
 });
 $mnu_1.on('click',function(evt){
  evt.preventDefault();
  pageAni(arrTopVal[1]);
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });
 $mnu_2.on('click',function(evt){
  evt.preventDefault();
  pageAni(arrTopVal[2]);
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });
 $mnu_3.on('click',function(evt){
  evt.preventDefault();
  pageAni(arrTopVal[3]);
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });
 $mnu_4.on('click',function(evt){
  evt.preventDefault();
  pageAni(arrTopVal[4]);
  nowIdx = $mnu.index(this);
  $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
 });



  // 맨위로
  $(window).on('load',function(){
    pageAni(arrTopVal[mnuIdx]);
  });
  
  
  //스크롤 높이값에 따른 메뉴 활성화
  $(window).on('scroll',function(){
    var scrollTop = $(window).scrollTop();
  
    for(var i=0;i<6;i++){
        if(scrollTop>=arrTopVal[i]){
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
        }
    }
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
