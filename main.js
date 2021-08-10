console.log("仙人，我吃你仙人");
//判断手机横竖屏状态：
function hengshuping(){
    if(window.orientation==180||window.orientation==0){
    alert("目前网站暂不支持手机或竖屏显示器！");
    window.close();
    }
    }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);