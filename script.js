// =============================
// Portfolio JavaScript
// =============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =============================
// Sticky Navbar
// =============================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);
});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// Scroll Reveal Animation
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".info-box,.skill-card,.project-card,.timeline-item")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =============================
// Typing Effect
// =============================

const text =
"Aspiring IT Professional | BCA Undergraduate";

const typingElement =
document.querySelector(".hero-content h3");

let i = 0;

typingElement.innerHTML = "";

function typing(){

    if(i < text.length){

        typingElement.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,70);

    }

}

typing();

// =============================
// Back To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.classList.add("show-btn");

    }else{

        topBtn.classList.remove("show-btn");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =============================
// Contact Form
// =============================

const form =
document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// =============================
// Console Message
// =============================

console.log("Portfolio Website Loaded Successfully");