/* gsap.from('.logo--image', {
    delay:  0,
    duration: 1,
    ease: "back.out",
    rotate: 360,
});

gsap.from('.item--menu--navLand', {
    delay: 0.75,
    y: -100,
    ease: "circ.out",
    stagger: 0.25,
    clearProps: "transform"
});

gsap.from('.items--menu--lateral', {
    delay: 1,
    duration: 2,
    x: 500,
    ease: "back.out",
    stagger: 0.25,
    clearProps: "transform"
}); */

let catchFrames = document.querySelectorAll('.catch--frame');

catchFrames.forEach((catchFrame, index) => {
    gsap.from(catchFrame, {
        duration: 0.75,
        delay: index * 0.1,
        x: gsap.utils.random(-500, 500),
        y: gsap.utils.random(-200, 200),
        ease: "back.out",
        clearProps: "transform",
        opacity: 0,
    });
});

gsap.from('.first--img-item', {
    y: 700,
    delay: 1,
    duration: 1,
    ease: "back.out",
    opacity: 0,
})
