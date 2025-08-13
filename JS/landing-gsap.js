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

gsap.from('.img--animation--landing', {
    y: 700,
    delay: 1,
    duration: 1,
    ease: "back.out",
    opacity: 0,
})
