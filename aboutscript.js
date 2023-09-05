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

gsap.to(".screen",{
    top:"-100%",
    delay:0.7,
    duration:2,
    ease:"Power4.easeOut"
    //ease: "bounce.out"
})

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