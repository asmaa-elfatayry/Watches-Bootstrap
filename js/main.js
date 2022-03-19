
$(function(){
    //Stop carousel
    $('.carousel').carousel('pause');
 
    'use strict';
    $(window).scroll(function(){
        var navbar=$('.navbar');
        if($(window).scrollTop()>= navbar.height()){
            navbar.addClass("scrolled");
        }else{
            navbar.removeClass("scrolled");
        }
    })




let arr=Array.from(document.querySelectorAll(".carousel-inner >.carousel-item "));
let spans=Array.from(document.querySelectorAll(".options span a"));

spans.forEach(el=>{
  
    el.addEventListener('click',function(e){
        spans.forEach((e)=>{
      e.classList.remove("active");
        })
        e.currentTarget.classList.add("active")
        arr.forEach((slide)=>{
            slide.style.display="none"
        })
        document.querySelector(e.currentTarget.dataset.type).style.display="flex"
    })
    
});


//add to cardr

let mycard=document.querySelector('.mycard .container');
let allAddBtn=document.querySelectorAll('a.btn.btn-success');

// console.log(allAddBtn)
 // create container
 let divContainer=document.createElement('div');
 // create ul li
 let ul=document.createElement('ul');
allAddBtn.forEach(ele=>{

    ele.addEventListener("click",function(e){
        let count=0;
        count++;
        e.preventDefault();
        let li=document.createElement('li');
        li.classList.add('styleLi');
        let innerDiv=document.createElement('div');
        innerDiv.classList.add("ineerCont");
        // inside inner div we will have to section photo and name count & price
        let photo=document.createElement('div');
        let img=document.createElement('img');
        let srcImg=(ele.parentElement.parentElement.previousElementSibling.name);
        console.log(srcImg)
        img.setAttribute("src",`img/${srcImg}`);
        console.log(img)
      //create price section
        let priceCont =document.createElement('div');
        let spanDel=document.createElement('span');
        spanDel.textContent="X";
        spanDel.classList.add("x");
        let price= ele.parentElement.parentElement.children[0].childNodes[3].textContent;
        let theprice=document.createElement('div');
        theprice.classList.add("price");
        theprice.textContent=price;
        priceCont.append(theprice);
        priceCont.append(spanDel);
       // img.setAttribute('src',ele.parentElement.parentElement.img.src);
        let spanCount=document.createElement('span');
        spanCount.textContent=count;
        let productName=document.createElement('span');
        let text=document.createTextNode(e.currentTarget.name);
        //append texr to div
        productName.appendChild(text);
        // phpto append
        photo.append(img);
        photo.append(spanCount);
        photo.append(productName);
        //append three section
        innerDiv.appendChild(photo);
        innerDiv.appendChild(priceCont);
        //append div to li
        li.append(innerDiv);
        ul.appendChild(li);

        // delete
        spanDel.addEventListener("click",function(){
            this.parentElement.parentElement.parentElement.remove();
        })
    
    })

    
})
divContainer.append(ul);
mycard.append(divContainer)

});

