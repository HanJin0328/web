	var arealist = $("#shortcut .w .fl .dropdown");
	var myjd = $("#shortcut .w .fr #ttbar-myjd");
	var serv = $("#shortcut .w .fr #ttbar-serv");
	var navs = $("#shortcut .w .fr #ttbar-navs");
	var phone = $("#shortcut .w .fr #ttbar-phone");
    var settleup = $("#settleup");
	var showdroplist = function(name){
		name.hover(function(){
		name.addClass("hover");
	},function(){
		name.removeClass("hover");

	});
	}
	showdroplist(arealist);
	showdroplist(myjd);
	showdroplist(serv);
	showdroplist(navs);
	showdroplist(settleup);
	showdroplist(phone);

	//左侧导航
	var navfloat = $(".navfloat");
	var num = $(".nav .navleft ul li").length;
	var oleftli = $(".nav .navleft ul li");//显示区块
	var ofloatli = $(".nav .navfloat ul li");//隐藏区块
	bannerplay(navfloat,ofloatli,oleftli,15,false,1);
	//中间轮播图
	var banner = $(".banner");
	var picli = $(".banner .bpicture ul li");
	var lilen = picli.length;
	var leftbtn = $(".banner .left");
	var rightbtn = $(".banner .right");
	for(var i=1;i<=lilen;i++){	//创建图片个数相对应的底部数字个数
		var li="<li>"+i+"</li>";	//创建li标签，并插入到页面中
		$(".banner .num_btn ul").append(li);
	}
	var numli = $(".banner .num_btn ul li")
	bannerplay(banner,picli,numli,8,true,0,leftbtn,rightbtn);

	//轮播图
	//console.log($);
 	var bannerplay= function(box,hiddenblock,displayblock,lilength,auto,position,leftbtn,rightbtn){
    //外部盒子，隐藏区块，显示区块，li长度，是否自动播放，轮播图上下还是左右，
    //左右切换按钮
    var index = 0;
	var position;    		    		
	//分三种情况    	
    switch(position){
    	case 2://显示第一个，竖排自动轮播，没有上下切换,（可以不用定位）
    	hiddenblock.eq(0).show();	//显示第一张图片
	    displayblock.eq(0).addClass("active");
    	displayblock.hover(function(){
    		index=$(this).index();  //定义底部数字索引值
    		hideplay();
    	});
    	autoplay(auto,moveS);
        break;
    	case 1://竖排导航,不显示第一个
    	displayblock.hover(function(){//经过显示区块
    		
		index=$(this).index();  //定义底部数字索引值
		hideplay();//显示区块加样式，并显示隐藏区块
	},function(){   //没有经过显示区块
		index=$(this).index();  //定义底部数字索引值
        hiddenblock.hover(function(){//在隐藏区块
			  hideplay();
        },function(){
		     remove();
        });
        remove();
	});
    	break;
    	case 0://横排轮播图（必须定位）
    	hiddenblock.eq(0).show();	//显示第一张图片
	    displayblock.eq(0).addClass("active");	//第一张图片底部相对应的数字列表添加active类
    	//alert("成功")
    	displayblock.hover(function(){
		index=$(this).index();  //定义底部数字索引值
		fadeplay();
	});
        onlybanner();
    	break;	
    }//switch语句结束
    function onlybanner(){

	  //左按钮点击事件
	  leftbtn.click(function(){
		  moveL();	//点击左键调用向左切换函数
	  })
	  //右按钮点击事件
	  rightbtn.click(function(){
		  move();    //点击右键调用向右切换函数
	  })
	    autoplay(auto,move);
    }//onlybanner函数结束

     //向左切换函数
     function moveL(){
		index--;
		
		//if(index==-1)index=lilength-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
		index %= (-lilength);
         fadeplay();
	 }
	 //向右切换函数
	 function move(){
		index++;
        index %= lilength;
		fadeplay();
	 }
	 function moveS(){//竖向轮播
		index++;
        index %= lilength;
		hideplay();
	 }
	 //自动播放函数
     function autoplay(auto,move){
	     //自动控制图片轮播
	     if(auto==false){
	     	return false;
            }else{
	     var t=setInterval(move,4000);  //设置定时器，1.5秒切换下一站轮播图
	     //定时器开始与结束
	     box.hover(function(){
		 clearInterval(t);	//鼠标放在轮播区域上时，清除定时器
	     },function(){
		  t=setInterval(move,4000);  //鼠标移开时定时器继续
	    })
	     }
      }
    function remove(){
    	displayblock.eq(index).removeClass("active");//移去显示区块样式
	    hiddenblock.eq(index).hide(); //隐藏 隐藏区块
    }
    function fadeplay(){
		displayblock.eq(index).addClass("active").siblings().removeClass("active"); 
		 //鼠标在哪个数字上那个数字添加class为active
		hiddenblock.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);	
		//鼠标移动到的数字上显示对应的图片
	}
	function hideplay(){
		displayblock.eq(index).addClass("active").siblings().removeClass("active");
		  //鼠标在哪个数字上那个数字添加class为active
		hiddenblock.eq(index).stop().show().siblings().stop().hide();
			//鼠标移动到的数字上显示对应的图片
	}  
	
};

//京东秒杀
//左边轮播
	var oImg = document.getElementById('img_two img');
	var radiu_ul = document.getElementById("span-ridus");
	var aRadius = radiu_ul.getElementsByTagName("li");
	var img_width = oImg.getElementsByTagName("img")[0].offsetWidth;
	var oldLeft = 0;
	var timer = 0;
	function move() {
		oldLeft = oImg.offsetLeft;
 		if (oldLeft == -img_width*3) {
 			oImg.style.left = "0px";
 		}else{
 			oImg.style.left = oldLeft - img_width +"px";
 		}
 		// console.log(oImg.offsetLeft);
 		for (var i = 0; i < aRadius.length; i++) {
 			aRadius[i].className = "";
 		}
 		aRadius[oImg.offsetLeft/-img_width].className = "active_radiu";
	}
 	oLeft.onclick = move;
 	oRight.onclick = function () {
 		clearInterval(timer)
 		oldLeft = oImg.offsetLeft;
 		if(oldLeft == 0){
 			oImg.style.left = -img_width*3 + "px";
 		}else{
 			oImg.style.left = oldLeft + img_width +"px";
 		}
 		for (var i = 0; i < aRadius.length; i++) {
 			aRadius[i].className = "";
 		}
 		aRadius[oImg.offsetLeft/-img_width].className = "active_radiu";

 		timer = setInterval(move, 2000)
 	}
 	timer = setInterval(move,2000);
 	for (var i = 0; i < aRadius.length; i++) {
 		aRadius[i].index = i;
 		aRadius[i].onclick = function () {
 			clearInterval(timer);
 			for (var i = 0; i < aRadius.length; i++) {
	 			aRadius[i].className = "";
	 		}
 			this.className = "active_radiu";
 			oImg.style.left = -img_width*this.index + "px";
 			timer = setInterval(move,2000)
 		}
 	}

 //发现好货一栏
	$(".findbrandrank-list-find-content-list li").addClass('moveleft');
	(function(){
		var tabnav=$(".findbrandrank-list-rank-nav li:even");
		var tabcontent=$(".tabcontent");
		tabnav.hover(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var idx=tabnav.index(this);
			var imgs=tabcontent.find('img');
			//利用相同的索引号使标签栏与内容栏对应
			tabcontent.eq(idx).show().siblings('.tabcontent').hide();
			//显示对应内容栏的图片
			imgs.each(function() {
				$(this).attr('src', $(this).attr('data-src'));
			});
		});
	})();


