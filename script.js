function homepageAnimation(){
    gsap.set(".slidesm", { scale:['40rem'], })
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom 50%",
        scrub: 3
    }
})

tl
.to(".vdodiv",{
    '--clip': "0%",
    ease: Power2
},'a')
.to(".slidesm",{
    scale:1,
    ease:Power2
},'a')
.to(".lft",{
    xPercent:5,
    stagger:.03,
    ease:Power4
},'b')
.to(".rgt",{
    xPercent:-5,
    stagger:.03,
    ease:Power4
},'b')
}

function RealAnimation( ){
  gsap.to(".slide",{
    scrollTrigger:{
        trigger:".real",
        start:"top top",
        end:"bottom 70%",
        scrub: 6
    },
    xPercent:-100,
    ease:Power2
  })
}

function teamAnimation(){
    document.querySelectorAll('.listelem1')
.forEach(function(el){
    el.addEventListener('mousemove',function(dets){
         gsap.to(this.querySelector(".picture"),{
            opacity:1,
            ease: Power2,
            duration:.5,
            x:gsap.utils.mapRange(0,window.innerWidth, -200, 200, dets.clientX)
         })
         gsap.to(this.querySelector('.bluelayer'),{
            height:"100%",
            ease:Power2
         })
    })


    el.addEventListener('mouseleave',function(dets){
        gsap.to(this.querySelector(".picture"),{
            opacity:0,
            ease: Power2,
            duration:.5
            
         })
         gsap.to(this.querySelector('.bluelayer'),{
            height:"0%",
            ease:Power2
         })

         

    })
})
}

function workingAnimation(){
    var clutter ="";
document.querySelector(".textpp").textContent.split("")
.forEach(function(e){
     if(e===" ") clutter += `<span>${" "}</span>`
     else clutter += `<span class="opacity-10">${e}</span>`
})
document.querySelector('.textpp').innerHTML = clutter;

gsap.to(".textpp span",{
    scrollTrigger:{
        trigger:".textpp",
        start:"top 50%",
        end:"bottom 80%",
        scrub:.2
    },
    opacity:1,
    stagger:.03,
    
})

}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
};  

function capAnimation(){
    gsap.to(".capsule",{
        scrollTrigger:{
            trigger:".capsule",
            start:"top 50%",
            end:"bottom bottom",
            scrub:2
        },
        y:0,
        ease: Power2
    
    })
}

loco();
homepageAnimation();
RealAnimation();
teamAnimation();
workingAnimation();
capAnimation();
 
