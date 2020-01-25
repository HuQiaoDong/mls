// 搜索层顶部两个导航按钮
let btnSwitch=document.getElementsByClassName("switch");
// 商品层顶部两个导航按钮
let goodsLayerBtn=document.getElementsByClassName("layer-nav");
// 商品层第一层
let outGoodsLayer=document.getElementById("out-layer");
// 商品层第二层
let insideGoodsLayer=document.getElementById("inside-layer");
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
    // 显示商品层第一层
    outGoodsLayer.style.display="block";
    // 隐藏商品层第二层
    insideGoodsLayer.style.display="none";
}
goodsLayerBtn[1].onclick=function(){
    // 如果商品层第二个导航按钮被按下,添加被选中样式，移除第一个导航按钮的被选中样式
    goodsLayerBtn[1].classList.add("layer-now");
    goodsLayerBtn[0].classList.remove("layer-now");
    // 隐藏商品层第一层
    outGoodsLayer.style.display="none";
    // 显示商品层第二层
    insideGoodsLayer.style.display="block";
}