let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .set('.content-images', {x: '500'})
    .set('.content-images2', {x: '- 500'})
    .fromTo('.bigie', {opacity: 1}, {opacity: 0}) 
    .set('.bigie', {scale:0.5, transformOrigin: "center top"}) 
    .to('.bg4', 3, {y: -1000})
    .to('.bg3', 3, {y: -100}, '-=3')
    .to('.bg2', 3, {y: 10}, '-=3')
    .to('.bg1', 3, {y: 0}, '-=3')
    .to('.content', 3, {top:'0%'},'-=3')


    .to('.content-images', 5, {x:'-500'},'-=3')
    .to('.content-images2', 5, {x:'500'},'-=5')
    .to('.content-images3', 5, {x:'500'},'-=6')
    .to('.content-images4', 5, {x:'-500'},'-=10')
    .fromTo('.bigie', {opacity: 0}, {opacity: 1}) 
    .fromTo('.firstpage', {opacity: 1}, {opacity: 0, duration: 1}) 
    .to('.secondpage', 3, {y: -900}, '-=2')
    .fromTo('.rechtsabout', {opacity: 0}, {opacity: 1, duration: 1}) 

  
    .to('.bigie', 3, {scale: 1, y:"-65%"})

    .fromTo('.secondpage', {opacity: 1}, {opacity: 0, duration: 1}) 
    .to('.forthpage', 3, {top:'0%'}, '-=3')
    .fromTo('.kapoenen', {opacity: 0}, {opacity: 1}) 
    .fromTo('.welpen', {opacity: 0}, {opacity: 1}) 
    .fromTo('.pioniers', {opacity: 0}, {opacity: 1}) 
    .fromTo('.jvk', {opacity: 0}, {opacity: 1}) 
    .fromTo('.vk', {opacity: 0}, {opacity: 1}) 
    .fromTo('.jin', {opacity: 0}, {opacity: 1}) 
    .fromTo('.leiding', {opacity: 0}, {opacity: 1}) 
    .fromTo('.groepsleiding', {opacity: 0}, {opacity: 1}) 

    .fromTo('.forthpage', {opacity: 1}, {opacity: 0, duration: 1}) 
    .to('.fithpage', 3, {y: -1800}, '-=1')
 
    .fromTo('.eerst', {x: 750}, {x: 0,duration: 3}) 
    .to('.fithpage', 3, {y: -1900}, '-=1')
    .fromTo('.tweede', {x: 750}, {x: 0,duration: 3}) 
    .to('.fithpage', 3, {y: -2200}, '-=1')
    .fromTo('.derde', {x: 750}, {x: 0,duration: 3}) 
    .to('.fithpage', 3, {y: -2500}, '-=1')

   

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration:"300%",
    triggerHook:0, 
})

    .setTween(timeline)
    .setPin("section")
    .addTo(controller);