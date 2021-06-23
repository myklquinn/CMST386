const menu = document.querySelector("#menuList")


var clickAway = evt => {
    if (evt.target === menu && !menu.contains(evt.target) && menu.classList.contains("menuVisible")) {
        menu.classList.toggle("menuVisible")
        document.removeEventListener("click", clickAway)
    }
}

menu.addEventListener("click", evt => { 
    document.addEventListener("click", clickAway)
    menu.classList.toggle("menuVisible") 
})

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
            // observer.unobserve(entry.target)
        } else if(entry.isIntersecting && window.scrollY <= entry.target.getBoundingClientRect().height) {
            console.log(entry)
            entry.target.classList.toggle("anchorFooter")
            // observer.unobserve(entry.target)
        }
    })
}, options)
// observer.observe(footer)