(function($,exports){
  $.fn.extend({
    bdream: function(params,speed){
      //距离单位
      var unit = "px";
      
      //bluedream容器
      var bluedreamHtml = "<!-- bluedream容器 -->"+
                          "<div id='bdreamContainer' class='bdream-container bdream-display'>"+
                          "  <!-- 内容 -->"+
                          "  <div class='bdream-body'>"+
                          "    <!-- 顶部 -->"+
                          "    <div class='bdream-top'>"+
                          "      <div class='bdream-cloud-body'>"+
                          "        <!-- 云列表 -->"+
                          "        <ul id='bdreamClouds'>"+
                          "        </ul>"+
                          "      </div>"+
                          "    </div>"+
                          "    <!-- 中部 -->"+
                          "    <div class='bdream-center'>"+
                          "      <div class='bdream-message'>"+
                          "        <span id='bdreamMessage'></span>"+
                          "      </div>"+
                          "    </div>"+
                          "    <!-- 底部 -->"+
                          "    <div class='bdream-bottom'>"+
                          "      <div class='bdream-fish-left'>"+
                          "        <a id='bdreamPreviousBtn' href='javascript:void(0);'>上一步</a>"+
                          "      </div>"+
                          "      <div id='bdreamCloseBtn' class='bdream-operate bdream-pull-left bdream-curosr'></div>"+
                          "      <div class='bdream-fish-right'>"+
                          "        <a id='bdreamNextBtn' href='javascript:void(0);'>继续</a>"+
                          "      </div>"+
                          "    </div>"+
                          "  </div>"+
                          "</div>";
      
      //bluedream容器尺寸
      var bdreamOffsetX = 310;
      var bdreamOffsetY = 230;
      //指针容器
      var pointerHtml = "<span id='bdreamPointer' class='bdream-pointer bdream-pointer-left bdream-display'></span>";
      //指针容器尺寸
      var pointerOffsetX = 100;
      var pointerOffsetY = 100;
      
      //屏蔽层
      var overlayHtml = "<div id='bdreamOverlay' style='top: 0;bottom: 0; left: 0;right: 0;position: fixed;opacity: .8;' class='bdream-overlay bdream-display'></div>";
      
      //帮助层
      var helpHtml = "<div id='bdreamHelp' class='bdream-helperLayer' style='width: 0; height: 0; top: 0;left: 0;'>";
      
      //云列表项
      var cloudItemHtml = "<li><a data-step='@index' href='javascript:void(0);' class='bdream-cloud'>@index</a></li>";
      
      //初始化参数
      params = params || [];
      speed = speed || "normal";
      
      //可变逻辑
      var logic = {
        bluedream: {
          position: {
            top: {
              position: function (tag){
                var result = {};
                var bdreamStyle = result.bdreamStyle = {};
                var pointerStyle = result.pointerStyle = {};
                
                pointerStyle.top = (tag.offset().top-pointerOffsetY-15)+unit;
                pointerStyle.left = (tag.offset().left+tag.width()/2-pointerOffsetX/2)+unit;
                bdreamStyle.top = (tag.offset().top-pointerOffsetY-bdreamOffsetY-20)+unit;
                bdreamStyle.left = (tag.offset().left+tag.width()/2-bdreamOffsetX/2)+unit;
                
                return result;
              },
              move: function (style){
                $bdreamPointer.removeClass("bdream-pointer-left bdream-pointer-right bdream-pointer-up");
                $bdreamPointer.addClass("bdream-pointer-down");
                $bdreamPointer.css(style.pointerStyle);
                $bdreamContainer.css(style.bdreamStyle);
              }
            },
            bottom: {
              position: function (tag){
                var result = {};
                var bdreamStyle = result.bdreamStyle = {};
                var pointerStyle = result.pointerStyle = {};
                
                pointerStyle.top = (tag.offset().top+tag.height()+15)+unit;
                pointerStyle.left = (tag.offset().left+tag.width()/2-pointerOffsetX/2)+unit;
                bdreamStyle.top = (tag.offset().top+tag.height()+pointerOffsetY+20)+unit;
                bdreamStyle.left = (tag.offset().left+tag.width()/2-bdreamOffsetX/2)+unit;
                
                return result;
              },
              move: function (style){
                $bdreamPointer.removeClass("bdream-pointer-left bdream-pointer-right bdream-pointer-down");
                $bdreamPointer.addClass("bdream-pointer-up");
                $bdreamPointer.css(style.pointerStyle);
                $bdreamContainer.css(style.bdreamStyle);
              }
            },
            left: {
              position: function (tag){
                var result = {};
                var bdreamStyle = result.bdreamStyle = {};
                var pointerStyle = result.pointerStyle = {};
                
                pointerStyle.top = (tag.offset().top+tag.height()/2-pointerOffsetY/2)+unit;
                pointerStyle.left = (tag.offset().left-pointerOffsetX-30)+unit;
                bdreamStyle.top = (tag.offset().top+tag.height()/2-bdreamOffsetY/2)+unit;
                bdreamStyle.left = (tag.offset().left-pointerOffsetX-bdreamOffsetX-50)+unit;
                
                return result;
              },
              move: function (style){
                $bdreamPointer.removeClass("bdream-pointer-down bdream-pointer-right bdream-pointer-up");
                $bdreamPointer.addClass("bdream-pointer-left");
                $bdreamPointer.css(style.pointerStyle);
                $bdreamContainer.css(style.bdreamStyle);
              }
            },
            right: {
              position: function (tag){
                var result = {};
                var bdreamStyle = result.bdreamStyle = {};
                var pointerStyle = result.pointerStyle = {};
                
                pointerStyle.top = (tag.offset().top+tag.height()/2-pointerOffsetY/2)+unit;
                pointerStyle.left = (tag.offset().left+tag.width()+30)+unit;
                bdreamStyle.top = (tag.offset().top+tag.height()/2-bdreamOffsetY/2)+unit;
                bdreamStyle.left = (tag.offset().left+tag.width()+pointerOffsetX+50)+unit;
                
                return result;
              },
              move: function (style){
                $bdreamPointer.removeClass("bdream-pointer-left bdream-pointer-down bdream-pointer-up");
								$bdreamPointer.addClass("bdream-pointer-right");
								$bdreamPointer.css(style.pointerStyle);
								$bdreamContainer.css(style.bdreamStyle);
              }
            }
          }
        }
      };
      
      //核心移动方法
      function core(index){
        var _index = index-1;
        
        //1.获取对应数据
        var data = params[_index];
        
        //2.隐藏bluedream容器和指针容器
        $bdreamContainer.addClass("bdream-display");
        $bdreamPointer.addClass("bdream-display");
        
        //3.定位帮助层
        $(".bdream-element").removeClass("bdream-element");
        data.extra.tag.addClass("bdream-element");
        //帮助层移动效果，执行完成后才继续其他逻辑
        $bdreamHelp.animate(data.extra.helpStyle,speed,function(){
          //4.定位bluedream容器\指针容器
          logic.bluedream.position[data.position].move(data.extra.position);
          
          //5.更新云激活状态
          $("a.bdream-cloud-active").removeClass("bdream-cloud-active");
          data.extra._s.addClass("bdream-cloud-active");
          
          //6.更新上一步、继续按钮可见性
          
          if(_index == 0){
            $bdreamPreviousBtn.addClass("bdream-display");
          }else{
            $bdreamPreviousBtn.removeClass("bdream-display");
          }
          if(_index == params.length-1){
            $bdreamNextBtn.addClass("bdream-display");
          }else{
            $bdreamNextBtn.removeClass("bdream-display");
          }
          
          //7.更新提示信息
          $bdreamMessage.text(data.message);
          
          //8.显示bluedream容器和指针容器
          $bdreamContainer.removeClass("bdream-display");
          $bdreamPointer.removeClass("bdream-display");
        });

      }
      
      //1.向页面填入基本元素
      $(this).append(bluedreamHtml)
             .append(pointerHtml)
             .append(overlayHtml)
             .append(helpHtml);
      //固定不变且频繁使用的dom预先缓存
      var $bdreamClouds = $("#bdreamClouds");
      var $bdreamPointer = $("#bdreamPointer");
      var $bdreamContainer = $("#bdreamContainer");
      var $bdreamHelp = $("#bdreamHelp");
      var $bdreamPreviousBtn = $("#bdreamPreviousBtn");
      var $bdreamNextBtn = $("#bdreamNextBtn");
      var $bdreamMessage = $("#bdreamMessage");
      var $bdreamOverlay = $("#bdreamOverlay");
      
      
      //2.插入云列表
      for(var i=0;i<params.length;i++){
        var html = cloudItemHtml.replace(/@index/g,i+1);
        $bdreamClouds.append(html);
      }
      
      //3.注册事件
      //3.1.云列表切换事件
      $("a.bdream-cloud").click(function(){
        var index = $(this).attr("data-step");
        core(parseInt(index));
      });
      //3.2.上一步按钮切换事件
      $bdreamPreviousBtn.click(function(){
        var index = $("a.bdream-cloud-active").attr("data-step");
        core(parseInt(index)-1);
      });
      //3.3.继续按钮切换事件
      $bdreamNextBtn.click(function(){
        var index = $("a.bdream-cloud-active").attr("data-step");
        core(parseInt(index)+1);
      });
      //3.4.关闭事件
      $("#bdreamCloseBtn").click(function(){
        $bdreamContainer.addClass("bdream-display");
        $bdreamPointer.addClass("bdream-display");
        $bdreamOverlay.addClass("bdream-display");
        $bdreamHelp.attr("style","width: 0; height: 0; top: 0;left: 0;");
        //清除样式
        $(".bdream-element").removeClass("bdream-element");
      });
      
      //4.初始化数据
      for(var i=0;i<params.length;i++){
        var _s = params[i];
        var _e = _s.extra = {};
        
        //设置对应的引导元素
        var _tag = _e.tag = $("#"+_s.id);
        //设置对应云dom对象
        _e._s = $($("a.bdream-cloud")[i]);
        //计算帮助层位置
        var helpStyle = _e.helpStyle = {};
        helpStyle.width = _tag.width()+unit;
        helpStyle.height = _tag.height()+unit;
        helpStyle.left = _tag.offset().left+unit;
        helpStyle.top = _tag.offset().top+unit;
        //计算bluedream容器+指针容器位置
        _e.position = logic.bluedream.position[_s.position].position(_tag);
      }
      
      //5.导出对外接口，启动蓝梦引导
      var run = function (){
        if(params.length){
          $bdreamOverlay.removeClass("bdream-display");
          core(1);
        }
      }
      exports.bdreamStart = run;
    }
  });
})(jQuery,this);


