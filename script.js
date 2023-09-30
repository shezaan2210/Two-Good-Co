function topscreen (){
    var screen = document.querySelector(`#top-scr`);
var menu = document.querySelector(`#right>.bg>#menu`);
var bg = document.querySelector(`#right>.bg`)
var line1 = document.querySelector(`#menu>.line1`)
var line2 = document.querySelector(`#menu>.line2`)
var nav = document.querySelector(`#nav`)
var flag = 0;

menu.addEventListener(`click`,function(){
    if(flag===0){
screen.style.top = `0%`
line1.style.backgroundColor = `#fff`
line2.style.backgroundColor = `#fff`
line1.style.rotate = `-45deg`
line2.style.rotate = `45deg`
line1.style.marginTop = `3px`
line2.style.marginTop = `-9px`
nav.style.color = `#fff`
bg.style.backgroundColor = `#000`
flag = 1;

}
else{
    screen.style.top = `-100%`
line1.style.backgroundColor = `#000`
line2.style.backgroundColor = `#000`
line1.style.rotate = `0deg`
line2.style.rotate = `0deg`
line1.style.marginTop = `0px`
line2.style.marginTop = `0px`
nav.style.color = `#000`
bg.style.backgroundColor = `#fff`
flag = 0;
}
})
}
topscreen();


function videoanime(){
    var videocursor = document.querySelector(`#video-cursor`)
var main = document.querySelector(`#page1`)
var videocontainer = document.querySelector(`#video-container`)


main.addEventListener(`mousemove`,function(dets){
videocursor.style.top = dets.y+ -50+`px`
videocursor.style.left = dets.x+ -50+`px`
})
videocontainer.addEventListener(`mouseenter`,function () {
    videocursor.style.scale = 1
    videocursor.style.opacity = 1
    
})
videocontainer.addEventListener(`mouseleave`,function(){
    videocursor.style.scale = 0
    videocursor.style.opacity = 0
   
})



gsap.from(`.hidden>h1,.hidden>h2`,{
    paddingTop:`0vw`,
    y:250,
    duration:.5,
    delay:.3,
    stagger:.2

})
}
videoanime();

function init(){
    gsap.registerPlugin(ScrollTrigger);
  
//   Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();

function cursoranimation(){

    document.addEventListener(`mousemove`,function(dets){
        gsap.to(`#cursor`,{
            left:dets.x,
            top:dets.y
        })
        })
        document.querySelector(`#child2`).addEventListener(`mouseenter`,function(){
            gsap.to(`#cursor`,{
                backgroundColor:`#f1dccb70`,
                zIndex:`1`
            })
        })
        document.querySelector(`#child2`).addEventListener(`mouseleave`,function(){
            gsap.to(`#cursor`,{
                backgroundColor:`#c9c8c755`
            })
        })
        
        document.querySelector(`#child4`).addEventListener(`mouseenter`,function(){
            gsap.to(`#cursor`,{
                backgroundColor:`rgba(163, 243, 163, 0.32)`
            })
        })
        document.querySelector(`#child4`).addEventListener(`mouseleave`,function(){
            gsap.to(`#cursor`,{
                backgroundColor:`#c9c8c755 `
            })
        })
        
        document.querySelectorAll(".child").forEach(function (elem) {
            elem.addEventListener("mouseenter", function () {
              gsap.to("#cursor", {
                transform: "translate(-50%,-100%) scale(1)",
              });
            });
            elem.addEventListener("mouseleave", function () {
              gsap.to("#cursor", {
                transform: "translate(-50%,-100%) scale(0)",
              });
            });
          });
}
cursoranimation();
    
function tapanime(){
    
    
        document.querySelector(`#under5`).addEventListener(`click`,function(){
            gsap.to(`#under4>.circle`,{
                backgroundColor:`transparent`
            })
            gsap.to(`#under4>img`,{
                // width:`100%`
                scale:0,
                duration:.2
            })
        })
        
        document.querySelector(`#under5`).addEventListener(`click`,function(){
            gsap.to(`#under5>.circle`,{
                backgroundColor:`#000`
            })
            gsap.to(`#under5>img`,{
                // width:`100%`
                scale:1,
                duration:.2
            })
        })
       
        document.querySelectorAll(`.under`).forEach(function(shez){
        shez.addEventListener(`click`,function(){
            gsap.to(`#under1>.circle`,{
                backgroundColor:`#000`
            })
            gsap.from(`#page4>.text>.hidden>h1`,{
                y:100,
                stagger:.2
            })
            
        })
        })
        
        
          
        document.querySelector(`#under2`).addEventListener(`click`,function(){
            gsap.to(`#under2>.circle`,{
                backgroundColor:`#000`
            })
            gsap.to(`#under2>img`,{
                // width:`100%`
                scale:1,
                duration:.2
            })
        })
    
        document.querySelector(`#under3`).addEventListener(`click`,function(){
            gsap.to(`#under2>.circle`,{
                backgroundColor:`transparent`
            })
            gsap.to(`#under2>img`,{
                // width:`100%`
                scale:0,
                duration:.2
            })
        })
        
        document.querySelector(`#under3`).addEventListener(`click`,function(){
            gsap.to(`#under3>.circle`,{
                backgroundColor:`#000`
            })
            gsap.to(`#under3>img`,{
                // width:`100%`
                scale:1,
                duration:.2
            })
        
        })
        document.querySelector(`#under4`).addEventListener(`click`,function(){
            gsap.to(`#under3>.circle`,{
                backgroundColor:`transparent`
            })
            gsap.to(`#under3>img`,{
                // width:`100%`
                scale:0,
                duration:.2
            })
        })
    
    document.querySelector(`#under4`).addEventListener(`click`,function(){
        gsap.to(`#under4>.circle`,{
            backgroundColor:`#000`
        })
        gsap.to(`#under4>img`,{
            // width:`100%`
            scale:1,
            duration:.2
        })
    })
}
tapanime();





var tl = gsap.timeline();


// tl.from(`#nav`,{
//     y:-20,
//     opacity:0
// })

tl.to(`#nav>#right>h6`,{
    scrollTrigger:{
        trigger:`#nav`,
        scroller:`#main`,
        start:`top -2%`,
        end:`130% -20%`,
        // markers:true,
        scrub:true
        

    },
    opacity:0,
    y:-50,
    duration:.2
})
tl.from(`#page1>#video-container`,{
    opacity:0,
    scale:.8
})
tl.from(`#page2`,{
    scrollTrigger:{
        trigger:`#page2`,
        scroller:`#main`,
        start:`top bottom`,
        end:`20% top`,
        // markers:true,
        scrub:true
        

    },
    opacity:0,
    y:50,
    duration:.2
})
tl.from(`#page3`,{
    scrollTrigger:{
        trigger:`#page3`,
        scroller:`#main`,
        start:`top bottom`,
        end:`20% top`,
        // markers:true,
        scrub:true
        

    },
    opacity:.8,
    y:200,
    duration:.2
})
tl.from(`#page4`,{
    scrollTrigger:{
        trigger:`#page4`,
        scroller:`#main`,
        start:`top bottom`,
        end:`20% top`,
        // markers:true,
        scrub:true
        

    },
    opacity:.8,
    y:300,
    duration:.2
})
gsap.to(`#nav>#scroll`,{
    scrollTrigger:{
        trigger:`#nav`,
        scroller:`#main`,
        start:`top -2%`,
        end:`130% -20%`,
        // markers:true,
        scrub:true
    },
    display:`initial`,
    top:`12%`
})

gsap.to(`#nav>#unscroll`,{
    scrollTrigger:{
        trigger:`#nav`,
        scroller:`#main`,
        start:`top -2%`,
        end:`130% -20%`,
        // markers:true,
        scrub:true
    },
    display:`none`,
    marginTop:`-50%`
})




