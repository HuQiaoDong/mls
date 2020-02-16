// 搜索层顶部两个导航按钮
let btnSwitch=document.getElementsByClassName("switch");
// 轮播层上方导航栏
let titleNav=document.querySelector(".title-nav");
// 商品层顶部两个导航按钮
let goodsLayerBtn=document.getElementsByClassName("layer-nav");
// 商品层顶部两个导航按钮下面的下划线
let underline=document.getElementsByClassName("underline");
// 商品层第一层
let outGoodsLayer=document.getElementById("out-layer");
// 商品层第二层
let insideGoodsLayer=document.getElementById("inside-layer");
// 右侧固定导航栏最底部返回顶部按钮
let returnTop=document.querySelector(".return-top");
// 需要进行懒加载的图片
let lazyLoadImgs=document.getElementsByClassName("lazyLoadImg");
// 视窗高度
let windowHeight = window.innerHeight;
console.log(lazyLoadImgs);
// 如果搜索层第一个导航按钮被按下,添加被选中样式，移除第二个导航按钮的被选中样式
btnSwitch[0].onclick=function(){
    btnSwitch[0].classList.add("switch-on");
    btnSwitch[1].classList.remove("switch-on");
}
// 如果搜索层第二个导航按钮被按下,添加被选中样式，移除第一个导航按钮的被选中样式
btnSwitch[1].onclick=function(){
    btnSwitch[1].classList.add("switch-on");
    btnSwitch[0].classList.remove("switch-on");
}
goodsLayerBtn[0].onclick=function(){
    // 如果商品层第一个导航按钮被按下,添加被选中样式，移除第二个导航按钮的被选中样式
    goodsLayerBtn[0].classList.add("layer-now");
    goodsLayerBtn[1].classList.remove("layer-now");
    underline[0].classList.add("line-on");
    underline[1].classList.remove("line-on");
    // 显示商品层第一层
    outGoodsLayer.style.display="block";
    // 隐藏商品层第二层
    insideGoodsLayer.style.display="none";
}
goodsLayerBtn[1].onclick=function(){
    // 如果商品层第二个导航按钮被按下,添加被选中样式，移除第一个导航按钮的被选中样式
    goodsLayerBtn[1].classList.add("layer-now");
    goodsLayerBtn[0].classList.remove("layer-now");
    underline[1].classList.add("line-on");
    underline[0].classList.remove("line-on");
    // 隐藏商品层第一层
    outGoodsLayer.style.display="none";
    // 显示商品层第二层
    insideGoodsLayer.style.display="block";
}
window.onscroll = function(){
    // document.documentElement.scrollTop是为了兼容IE
    let scrollTop = this.document.body.scrollTop || this.document.documentElement.scrollTop;

    // 滚动条偏离最顶部
    if(scrollTop > 0){
        // 显示右侧导航栏底部的回到顶部按钮
        returnTop.style.display = "block";
        this.console.log("浏览器窗口顶部与文档顶部之间的距离为：",scrollTop);
        this.console.log("屏幕的可视化高度",window.innerHeight);
        this.console.log("图片距离文档顶部的高度",lazyLoadImgs[1].offsetTop);
        // this.Array.from(lazyLoadImgs).forEach
        // 图片懒加载
        // for(let i = 0; i < lazyLoadImgs.length; i++){
        //     if(lazyLoadImgs[i].offsetTop-scrollTop<windowHeight){
        //         lazyLoadImgs[i].src=lazyLoadImgs[i].dataset.src;
        //         this.console.log("进入if");
        //     }
        // }
        // this.Array.from(lazyLoadImgs).forEach(function(){
        //     if(lazyLoadImgs[i].offsetTop-scrollTop<windowHeight){
        //         lazyLoadImgs[i].src=lazyLoadImgs[i].dataset.src;
        //         this.console.log("进入if");
        //     }
        // })
    }
    else{
        // 滚动条位于最顶部，隐藏回到顶部按钮
        returnTop.style.display="none";
    }
    if(scrollTop>200){
        titleNav.style.position="fixed";
        titleNav.style.backgroundColor="#fff";
        titleNav.style.top=0+"px";
        titleNav.style.zIndex="1000";
    }
    else{
        titleNav.style.position="static";
    }
}
// 检测图片是否进入可视窗口