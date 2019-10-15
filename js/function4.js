$(function(){
  


  var $mnu = $('header>.header>.header_pagination>ol>li>a');
  var $gnb = $('header>.header>.header_gnb>ol>li>a');
  var mnuIdx = 0;


  
  
  var $mnu_0 = $mnu.eq(0);
  var $mnu_1 = $mnu.eq(1);
  var $mnu_2 = $mnu.eq(2);
  var $mnu_3 = $mnu.eq(3);
  var $mnu_4 = $mnu.eq(4);


  var arrTopVal = [0,800,1650,2430,3280]

  function pageAni(topVal){
    $('html,body').stop().animate({
      scrollTop:topVal
    });
  }

  $mnu_0.on('click',function(evt){
    evt.preventDefault();
    pageAni(arrTopVal[0]);
  });
   $mnu_1.on('click',function(evt){
    evt.preventDefault();
    pageAni(arrTopVal[1]);
  });
   $mnu_2.on('click',function(evt){
    evt.preventDefault();
    pageAni(arrTopVal[2]);
  });
   $mnu_3.on('click',function(evt){
    evt.preventDefault();
    pageAni(arrTopVal[3]);
  });
   $mnu_4.on('click',function(evt){
    evt.preventDefault();
    pageAni(arrTopVal[4]);
  });



  // header 메뉴  클릭이벤트
  $gnb.on('click',function(evt){
    evt.preventDefault();
    mnuIdx = $gnb.index(this);
  
    $('html,body').stop().animate({
      scrollTop:arrTopVal[mnuIdx]
    });
  }); 


  // 맨위로
  $(window).on('load',function(){
    $('html,body').stop().animate({
      scrollTop:0
    });
  });
  
  
  //스크롤 높이값에 따른 메뉴 활성화
  $(window).on('scroll',function(){
    var scrollTop = $(window).scrollTop();
  
    for(var i=0;i<6;i++){
        if(scrollTop>=arrTopVal[i]){
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
        $gnb.eq(i).parent().addClass('on').siblings().removeClass('on');
        }
    }
  });




  






  
  //슬라이드 배너


  var $indicator = $('section>.sect1>.slides-pagination>li>a');//인디케이터
  var $container = $('section>.sect1>.slides-banner');//컨테이너
  var $btn_prev = $('section>.sect1>.slides-prev');
  var $btn_next = $('section>.sect1>.slides-next');
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



  // 자동슬라이드
  setInterval(function(){
      
    if(nowIdx<2){
        nowIdx++;
    }else{
        nowIdx=0;
    }
    moveFn();
  },3000);



  
  
  
  //레시피

  var $bigImg = $('section>.sect5>.recipe_bt>p.recipe_screen>a');
  var $thmbs = $('section>.sect5>.recipe_bt>ul.recipe_thmbs>li>a');

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
