
/* let logoImg = document.querySelector('.logo--image');
let logoText = document.querySelector('.logo--text'); */

/* 
gsap.from(logoImg, {
    delay: 1,
    duration: 1,
    ease: "back.out",
    y: -100,
}) 
gsap.from(logoText, {
    delay: 1.5,
    duration: 1,
    ease: "back.out",
    y: -100,
})  */

gsap.from(".navG--items", {
    ease: "power3",
    y: -100,
    duration: 0.5,
    stagger: 0.25,
    clearProps: "transform"
}) 