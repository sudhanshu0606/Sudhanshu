/*-----------------------------------------------------------------------------*/

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");


window.addEventListener("mousemove",function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top  = `${posY}px`;

    cursorOutline.animate({
        left : `${posX}px`,
        top : `${posY}px`,
    },{duration:500,fill:"forwards"});
});

/*-----------------------------------------------------------------------------*/

var tl=gsap.timeline()
tl
.from("#number4",{
    opacity:0,
    onStart:function(){
        $('#number4').textillate({
             in: { 
                effect: 'fadeInUp',
                   callback:function(){
                    $('#number4').textillate('out')
                }
            },
             out:{ effect: 'fadeOutUp'}
        });
    }
})
.from("#number3",{
    opacity:0,
    delay:1.2,
    onStart:function(){
        $('#number3').textillate({
             in: { effect: 'fadeInUp',
                   callback:function(){
                    $('#number3').textillate('out')
                   }
            },
             out:{ effect: 'fadeOutUp'}
        });
    }
})
.from("#number2",{
    opacity:0,
    delay:1.2,
    onStart:function(){
        $('#number2').textillate({
             in: { effect: 'fadeInUp',
                   callback:function(){
                    $('#number2').textillate('out')
                   }
            },
             out:{ effect: 'fadeOutUp'}
        });
    }
})
.from("#number1",{
    opacity:0,
    delay:1.2,
    onStart:function(){
        $('#number1').textillate({
             in: { effect: 'fadeInUp',},
        });
    }
})
.to(".screen",{
    top:"-100%",
    delay:1,
    duration:1.5,
    ease:"Power4.easeOut"
})


/*-----------------------------------------------------------------------------*/

/*var txt=document.querySelector(".text");

txt.addEventListener("mousemove",function(dets){
    txt.style.top = dets.y*0.05 +"px"
    txt.style.left = dets.x*0.05 + "px"
})*/

/*-----------------------------------------------------------------------------*/


/*const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");


window.addEventListener("mousemove",function(dets){
    cursorDot.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    cursorOutline.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
})*/

/*-----------------------------------------------------------------------------*/

/*var text = document.querySelector(".text");
const lerp = (x, y, a) => x * (1 - a) + y * a;

text.addEventListener("mousemove",function(dets){

    var dims = text.getBoundingClientRect();
    var xstart = dims.x;
    var xend = dims.x+dims.width;
    var zone = gsap.utils.mapRange(xstart,xend,0,1,dets.clientX);
    
    lerp(-50,50,zone)

    gsap.to(cursorDot,{
        scale:15,
        color:"blue",
    })
    gsap.to(text,{
        color:"blue",
        x:lerp(-50,50,zone),
        duration:0.3
    })
})

text.addEventListener("mouseleave",function(dets){
    gsap.to(cursorDot,{
        scale:1,
        color:"black"
    })
    gsap.to(text,{
        color:"black",
        x:0,
        duration:0.3
    })
})*/

/*-----------------------------------------------------------------------------*/

const texts = document.querySelectorAll(".text");
const lerp = (x, y, a) => x * (1 - a) + y * a;

texts.forEach((text) => {
  text.addEventListener("mousemove", function (dets) {
    var dims = text.getBoundingClientRect();
    var xstart = dims.x+10;
    var xend = dims.x + dims.width+10;
    var zone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    lerp(-50, 50, zone);

    gsap.to(cursorDot, {  
      scale: 10,
      color: "blue",
      transition:0.2
    });
    gsap.to(text, {
      /*color:"blue",*/
      x: lerp(-50, 50, zone),
      duration: 0.3,
    });
  });

  text.addEventListener("mouseleave", function (dets) {
    gsap.to(cursorDot, {
      scale: 1,
      color: "black",
    });
    gsap.to(text, {
      /*color:"black",*/
      x: 0,
      duration: 0.3,
    });
  });
});