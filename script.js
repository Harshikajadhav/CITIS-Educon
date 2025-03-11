// Front page code starts here

// gsap.to(".trial-section .front-page-engagements .boxes", {
//     transform: "translateX(-95%)",
//     scrollTrigger: {
//         trigger: ".trial-section",
//         scroller: "body",
//         start: "top 0%", // Adjust this value to move the start marker above the white line
//         end: "top -75%",  // Adjust this value to move the end marker above the white line
//         scrub: 2,
//         pin: true,
//         markers: true
//     }
// });

gsap.to(".front-page-engagements .boxes",{
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: ".front-page-engagements",
        scrub: 2,
        pin: true
    }
})


gsap.to(".backpage-cs .casestudies",{
    transform: "translateX(-40%)",
    scrollTrigger: {
        trigger: ".backpage-cs",
        scrub: 2,
        pin: true
    }
})


// Testimonial starts here
var testimonial = document.querySelector(".testimonial-heading");
var testimonialContent = document.querySelector(".list-of-testimonials");

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".front-testimonials",
        scroller: "body",
        start: "top 30%",
        end: "top -75%",
        scrub: 2, 
        pin: true, 
    }
});

tl.to(".testimonial-heading", {
    scale: 1,
    ease: "power2.out", 
});

tl.to(".list-of-testimonials", {
    y: "-75%", 
    ease: "power2.out", 
}, "-=0.5"); 
// Testimonial ends here

// Front page code ends here





// Header starts here
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo img');
    const menu = document.querySelector('.menu img');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.style.width = "7vmax";
        logo.style.height = "2vmax";
        menu.style.width = "5vmax";
        menu.style.height = "3vmax";
    } else {
        header.classList.remove('scrolled');
        logo.style.width = "10vmax";
        logo.style.height = "3vmax";
        menu.style.width = "7vmax";
        menu.style.height = "4vmax";
    }
});


var menu = document.querySelector(".menu");
var closeMenu = document.querySelector(".close-menu");
var menuList = document.querySelector(".menubar");

menu.addEventListener("click", function(){
    gsap.to(menuList, {
        top: "0%",
        duration: 0.5,
        ease: "power2.in"
    });
});

closeMenu.addEventListener("click", function(){
    gsap.to(menuList, {
        top: "-110%",
        duration: 0.5,
        ease: "power2.Out"
    });
});

const menuItems = document.querySelectorAll(".menu-list .elem");

menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add("dimmed");
            }
        });
    });

    item.addEventListener("mouseleave", () => {
        menuItems.forEach(otherItem => {
            otherItem.classList.remove("dimmed");
        });
    });
});
// Header starts ends





// Function to transform text into circular format
function transformText(element, rotationAngle) {
    element.innerHTML = element.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * rotationAngle}deg)">${char}</span>`
      )
      .join("");
}

// Apply different rotation angles
const visionText = document.querySelector(".circle-vision .text");
transformText(visionText, 10.3);  // Works fine for Vision

const missionText = document.querySelector(".circle-mission .text");
transformText(missionText, 9.8);  // Reduced rotation for Mission to avoid overlap
