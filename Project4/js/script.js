var sB = document.querySelector("input[type='submit']")
var footer = document.querySelector(".footerContainer")
var menu = document.querySelector("#menuList")

var now = new Date()
now = now.toDateString() + " " +  now.toLocaleTimeString()

var nowP = document.createElement("p")
nowP.innerText = now
footer.append(nowP)

var imgs = document.querySelectorAll("img")

imgs.forEach(a=> {
    if (a.src.indexOf(".svg") != -1) return;
    if (a.src.indexOf("gnomes_logo_100px.png") != -1) {
        a.addEventListener("click", function() {
            console.log("logo clicked");
            window.open("index.html", "_self");
        }, false);
    } else {
        a.addEventListener("click", function() {
            window.open(a.src, "_blank");
        }, false );
    }
})



submitForm = function(evt) {
    

	fname = document.querySelector("#name")
    femail = document.querySelector("#email")
    fphone = document.querySelector("#phone")
    frequest = document.querySelector("#request option:checked")
    fmethod = document.querySelector("input[name='method']:checked")
    fprivacy = document.querySelector("#privacyCheck")
    fpromo = document.querySelector("#promoCheck")
    fmsg = document.querySelector("#message")

    errors = 0

    if (fname.value == "") fname.setAttribute("placeholder", "You must enter a valid name..."), fname.classList.add("error"), errors++;
    if (femail.value == "") femail.setAttribute("placeholder", "You must enter a valid email..."), femail.classList.add("error"), errors++;
    if (fphone.value == "" || isNaN(fphone.value)) fphone.setAttribute("placeholder", "You must enter a valid phone number..."), fphone.classList.add("error"), errors++;
    if (frequest.value == "") document.querySelector("#request option").innerText = "***You must select a request type", errors++;
    if (!fprivacy.checked) document.querySelector(".privacyError").classList.add("error"), errors++;
    if (fmsg.value == "") fmsg.placeholder = "Please include a message with your correspondance...", fmsg.classList.add("error"), errors++;

    if (errors) {
        evt.preventDefault()
        return false;
    } else {
        faction = evt.target.closest("form").getAttribute("action")
        console.log(faction)
    }

}

if (sB){ sB.addEventListener("click", submitForm, false) }
menu.addEventListener("click", evt=>{
    evt.target.classList.toggle(".menuVisible")
}, false)
