BlueDream.js(蓝梦)——jQuery网站使用引导插件
=============
  
相关链接：
-------------
  
[`BlueDream.js`演示链接](http://www.kpdown.com/bluedream/ "由开辟软件站提供")  
  
简介：
-------------
  
`BlueDream.js`是一款用户引导插件，可以让您的网站更容易入门。  
`BlueDream.js`依赖`jQuery`，因此自身体积小巧，经过细致的优化，特效流畅、性能稳定。  
`BlueDream.js`设计合理，使用非常方便，仅需引入一个`css`文件和一个`js`文件。
`BlueDream.js`界面简洁大方，瞬间提升网站档次。    
  
使用说明：
-------------
  
引入`css`、`js`文件(一定不要忘记引入`jQuery`)：  
  
    <!-- 引用 BlueDream 的样式 -->
    <link href="css/bluedream.css" rel="stylesheet">
    <!-- 先引入jQuery插件 -->
    <script type="text/javascript" src="js/jquery.1.10.2.min.js"></script>
    <!-- 引入BlueDream导航 -->
    <script type="text/javascript" src="js/bluedream.js"></script>
  
进行配置：  
  
    //配置BlueDream
    //第一个参数：需要引导的元素数组。数组元素的顺序即引导框出现的顺序。最多支持6个元素！
    //第二个参数：可选。规定动画的速度。默认是 "normal"。
    //可能的值：毫秒 （比如 1500）|"slow"|"normal"|"fast"
    $("body").bdream([{
      //要引导的元素id
      id: "bluedream",
      //引导框相对于引导元素的位置。
      //可能的值："left"|"right"|"top"|"bottom"
      position: "left",
      //引导框显示内容。
      message: "蓝梦(BlueDream)插件"
    }],1500);
  
调用：  
  
    //配置之后，任意位置调用该方法即可显示引导插件
    bdreamStart();
  
完整使用示例：  
  
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>BlueDream(蓝梦)——jQuery网站使用引导插件</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="bluedream.js - Better introductions for websites and features with a step-by-step guide for your projects.">
        <meta name="author" content="YangYuan">

        <!-- 页面基础样式 -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/demo.css" rel="stylesheet">
        <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
        
        <!-- 引用 BlueDream 的样式 -->
        <link href="css/bluedream.css" rel="stylesheet">

      </head>

      <body>

        <div class="container-narrow">

          <div class="masthead">
            <ul class="nav nav-pills pull-right" id="links">
              <li><a href="http://www.kpdown.com" target="_blank">开辟软件站赞助</a></li>
              <li><a href="http://www.cnblogs.com/iyangyuan">作者博客</a></li>
              <li><a href="" target="_blank">View On GitHub</a></li>
            </ul>
            <h3 class="muted">插件名称：bluedream.js</h3>
          </div>

          <hr>

          <div class="jumbotron">
            <h1 id="bluedream">BlueDream</h1>
            <p class="lead" id="howToUse"> 配置： <code>$("body").bdream();</code> 启动： <code>bdreamStart();</code> </p>
            <a class="btn btn-large btn-success" href="javascript:void(0);" onclick="javascript:bdreamStart();">点击查看效果</a>
          </div>

          <hr>

          <div class="row-fluid marketing">
            <div class="span6" id="kpdown">
              <h4>开辟软件站</h4>
              <p>
                开辟软件站致力于软件分享，提供经典优质软件，以公益为核心价值观，为用户提供一个优良下载环境的同时，最大化“我为人人”理念。
              </p>

              <h4>开辟软件站</h4>
              <p>
                开辟软件站致力于软件分享，提供经典优质软件，以公益为核心价值观，为用户提供一个优良下载环境的同时，最大化“我为人人”理念。
              </p>

              <h4>开辟软件站</h4>
              <p>
                开辟软件站致力于软件分享，提供经典优质软件，以公益为核心价值观，为用户提供一个优良下载环境的同时，最大化“我为人人”理念。
              </p>
              </div>

            <div class="span6" id="author">
              <h4>关于作者</h4>
              <p>
                作者即开辟软件站站长，程序猿一枚，喜欢折腾，乐于奉献，希望以后能有更多的朋友能投入公益的怀抱，共同建设鼎盛中华。
              </p>

              <h4>关于作者</h4>
              <p>
                作者即开辟软件站站长，程序猿一枚，喜欢折腾，乐于奉献，希望以后能有更多的朋友能投入公益的怀抱，共同建设鼎盛中华。
              </p>

              <h4>关于作者</h4>
              <p>
                作者即开辟软件站站长，程序猿一枚，喜欢折腾，乐于奉献，希望以后能有更多的朋友能投入公益的怀抱，共同建设鼎盛中华。
              </p>

            </div>
          </div>

          <hr>
        </div>
        <!-- 先引入jQuery插件 -->
        <script type="text/javascript" src="js/jquery.1.10.2.min.js"></script>
        <!-- 引入BlueDream导航 -->
        <script type="text/javascript" src="js/bluedream.js"></script>
        <script>
          //配置BlueDream
          //第一个参数：需要引导的元素数组。数组元素的顺序即引导框出现的顺序。最多支持6个元素！
          //第二个参数：可选。规定动画的速度。默认是 "normal"。
          //可能的值：毫秒 （比如 1500）|"slow"|"normal"|"fast"
          $("body").bdream([{
            //要引导的元素id
            id: "bluedream",
            //引导框相对于引导元素的位置。
            //可能的值："left"|"right"|"top"|"bottom"
            position: "left",
            //引导框显示内容。
            message: "蓝梦(BlueDream)插件"
          },{
            id: "kpdown",
            position: "right",
            message: "开辟软件站简介"
          },{
            id: "author",
            position: "top",
            message: "插件作者简介"
          },{
            id: "howToUse",
            position: "bottom",
            message: "BlueDream使用说明"
          },{
            id: "links",
            position: "bottom",
            message: "扩展链接"
          }],1500);
        </script>
      </body>
    </html>
  