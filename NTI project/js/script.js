let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")
let current = 0
dots.forEach((dot, i)=>{
    dot.addEventListener("click", function(){
        slides.forEach(s=> s.classList.remove("active"))
        dots.forEach(s=> s.classList.remove("active"))
        dot.classList.add("active")
        slides[i].classList.add("active")
        current = i
    })
})

const after = document.querySelector("#after")
const before = document.querySelector("#before")
after.addEventListener("click", function(){
    current++    
    if(current>dots.length-1) current=0
    slides.forEach(s=> s.classList.remove("active"))
    dots.forEach(s=> s.classList.remove("active"))
    dots[current].classList.add("active")
    slides[current].classList.add("active")
})
before.addEventListener("click", function(){
    current--
    if(current<0) current=dots.length-1
    slides.forEach(s=> s.classList.remove("active"))
    dots.forEach(s=> s.classList.remove("active"))
    dots[current].classList.add("active")
    slides[current].classList.add("active")
})