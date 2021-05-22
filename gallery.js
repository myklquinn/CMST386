if (window.location.pathname.indexOf("gallery.html") != -1) {
    var fullresContainer = document.querySelector(".fullresImage")
    var fullresImage = fullresContainer.querySelector("img")
    var fullresCaption = fullresContainer.querySelector("figcaption")
    var fullresClose = fullresContainer.querySelector("span")

    fullresClose.addEventListener("click", (evt) => {
        fullresContainer.classList.toggle("fullresVisible")
    })

    document.querySelectorAll(".galleryImages a").forEach((a)=> {
        a.addEventListener("click", (evt) => {
            fullresImage.src = a.getAttribute("data-src")
            fullresCaption.innerText = a.querySelector("figcaption").innerText
            fullresContainer.classList.toggle("fullresVisible")
        })
    })
}

var sectionTotal = 0
const footer = document.querySelector("footer")
const options = { 
    root: null,
    threshold: 1,
    rootMargin: "0px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            console.log(entry)
            observer.unobserve(entry.target)
        } else if(entry.isIntersecting && window.scrollY <= entry.target.getBoundingClientRect().height) {
            console.log(entry)
            entry.target.classList.toggle("anchorFooter")
            observer.unobserve(entry.target)
        }
    })
}, options)
observer.observe(footer)