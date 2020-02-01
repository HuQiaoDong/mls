let container=document.querySelector(".container");
let list=document.querySelector(".list");
let pictures=document.querySelector(".picture");
let allPictures=document.getElementsByClassName("picture");
let btn=document.querySelectorAll(".btn");
let back=document.querySelector(".back");
let next=document.querySelector(".next");
let timer=null;
let timer2=null;
//停顿点的延时
let changeTime=3000;
let changeTimer2=4;
//三种移动方式移动一次的Left值
let autoSpeed=50;
let moveOneImageSpeed=25;
let btnMoveSpeed=100;
//底部按钮位置定位
let indexOffsetLeft;
//高亮按钮，标记当前图片为第几张
let index=0;
//图片列的宽度，包含隐藏的图片
let listWidth=list.offsetWidth;
//每张图片的宽度，用于视图移动
let pictureWidth=pictures.offsetWidth;
// 保存停顿时的位置
let stop_pos;
function autoPlay(){
    moveRight(autoSpeed);
    console.log(list.offsetLeft);
    if(Math.abs(list.offsetLeft)%pictureWidth===autoSpeed){
        index++;
        if(list.offsetLeft===-7250){
            index=0;
        }
        btn_Index();
    }
    // console.log("当前视窗在图片条中的位置为"+Math.abs(list.offsetLeft));
    if(isStop()){
        stop_pos=list.offsetLeft;
        console.log(stop_pos);
        changeTime=3000;
        //图片位置向右一张
        // index++;
        // btn_Index();
        if(isLastImage()){
            returnFirstImage();
            // btn_Index();
        }
        console.log("停顿点");
    }
    else{
        changeTime=10;
    }
    //当前图片为最后一张时，下一次播放回到开始播放第一张图片
    timer=setTimeout(autoPlay,changeTime);
}
//判断是否为轮播停顿状态，是返回true
function isStop(){
    if((Math.abs(list.offsetLeft))%pictureWidth==0){
        return true;
    }
    else{
        // changeTime=3;
        return false;
    }
}
function isLastImage(){
    if(list.offsetLeft==-(listWidth-pictureWidth)){
        // console.log("最后一张图片");
        return true;
    }
    else{
        return false;
    }
}
function isFirstImage(){
    if(list.offsetLeft==0){
        return true;
    }
    else{
        return false;
    }
}
//返回展示的最后一张图片位置
function returnLastImage(){
    list.style.left=-(listWidth-(pictureWidth*2))+"px";
    index=5;
}
//返回展示的第一张图片位置
function returnFirstImage(){
    list.style.left=-pictureWidth+"px";
    index=0;
    // btn_Index();   
}
//将图片位置与高亮按钮对应
function btn_Index(){
    console.log("定位按钮");
    //将整个图片列表向左移动一张图片的宽度，将下一张图片暴露在视窗,上一张图片被隐藏
        for(let i=0;i<allPictures.length-2;i++){
            if(i!=index){
                btn[i].classList.remove("on");
            }
            else if(i===index){
                btn[i].classList.add("on");
            }
        }
}
function moveLeft(speed){
    list.style.left=list.offsetLeft+speed+"px";
}
function moveRight(speed){
    list.style.left=list.offsetLeft-speed+"px";
}
// 移动到上一张图片的实现过程
function moveBeforeImage(){
    moveLeft(moveOneImageSpeed);
    if(isStop()){
        if(isStop()&&isFirstImage()){
            returnLastImage();
            btn_Index();
            console.log(list.offsetLeft);
        }
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveBeforeImage,changeTimer2);
}
// 移动到下一张图片的实现过程
function moveNextImage(){
    moveRight(moveOneImageSpeed);
    if(isStop()){
        if(isStop()&&isLastImage()){
            returnFirstImage();
            btn_Index();
        }
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveNextImage,changeTimer2);
}
//移动到的第一张图片的实现过程
function moveIndexImage1(){
    indexOffsetLeft=-pictureWidth;
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage1,changeTimer2);
}
//移动到的第二张图片的实现过程
function moveIndexImage2(){
    indexOffsetLeft=-(pictureWidth*2);
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage2,changeTimer2);
}
//移动到的第三张图片的实现过程
function moveIndexImage3(){
    indexOffsetLeft=-(pictureWidth*3);
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage3,changeTimer2);
}
//移动到的第四张图片的实现过程
function moveIndexImage4(){
    indexOffsetLeft=-(pictureWidth*4);
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage4,changeTimer2);
}
//移动到的第五张图片的实现过程
function moveIndexImage5(){
    indexOffsetLeft=-(pictureWidth*5);
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage5,changeTimer2);
}
//移动到的第六张图片的实现过程
function moveIndexImage6(){
    indexOffsetLeft=-(pictureWidth*6);
    if(indexOffsetLeft>list.offsetLeft){
        moveLeft(btnMoveSpeed);
    }
    else{
        moveRight(btnMoveSpeed);
    }
    if(list.offsetLeft==indexOffsetLeft){
        clearTimeout(timer2);
        return ;
    }
    timer2=setTimeout(moveIndexImage6,changeTimer2);
}
//点击按钮向左移动一张图片
back.onclick=function(){
    console.log("isPressON");
    if(!isFirstImage()){
        console.log("上一张展示图片");
        index--;
        btn_Index();
        // turnLeft();
        moveBeforeImage();
    }
}
//点击按钮向右移动一张图片
next.onclick=function(){
    console.log("isPressON");
    if(!isLastImage()){
        console.log("下一张展示图片");
        index++;
        btn_Index();
        moveNextImage();
    }
}
// 第一个按钮按下移动到第一张图
btn[0].onmouseenter=function(){
    index=0;
    // list.style.left=-pictureWidth+"px";
    if(isStop()){
        moveIndexImage1();
        btn_Index();
    }
}
// 第二个按钮按下移动到第二张图
btn[1].onmouseenter=function(){
    index=1;
    // list.style.left=-1300+"px";
    if(isStop()){
        moveIndexImage2();
        btn_Index();
    }
}
// 第三个按钮按下移动到第三张图
btn[2].onmouseenter=function(){
    index=2;
    // list.style.left=-1950+"px";
    if(isStop()){
        moveIndexImage3();
        btn_Index();
    }
}
// 第四个按钮按下移动到第四张图
btn[3].onmouseenter=function(){
    index=3;
    // list.style.left=-2600+"px";
    if(isStop()){
        moveIndexImage4();
        btn_Index();
    }
}
// 第五个按钮按下移动到第五张图
btn[4].onmouseenter=function(){
    index=4;
    // list.style.left=-3250+"px";
    if(isStop()){
        moveIndexImage5();
        btn_Index();
    }
}
btn[5].onmouseenter=function(){
    index=5;
    // list.style.left=-3250+"px";
    if(isStop()){
        moveIndexImage6();
        btn_Index();
    }
}
//鼠标移动到视窗，清除定时器，停止播放
container.onmouseenter=function(){
    if(isStop()){
        clearTimeout(timer);
    }
}
//鼠标离开视窗，调用自动轮播函数
container.onmouseleave=function(){
    //避免短时间多次触发鼠标移入移出事件造成的定时器叠加
    //轮播动作停止后再清除定时器，避免在轮播过程鼠标移入又快速移出造成的轮播中断
    if(isStop()){
        clearTimeout(timer);
        clearTimeout(timer2);
    }
    //重新在2s后进入autoPlay函数进行自动轮播
    timer=setTimeout(autoPlay,2000);
}
// 进入自动轮播模式,定时器autoPlay递归
timer=setTimeout(autoPlay,changeTime);
// console.log(timer);
