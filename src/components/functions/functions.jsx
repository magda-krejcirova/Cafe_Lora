const hamburger = document.querySelector("#menu-tlacitko")

hamburger.addEventListener("click", (event) => {
    const menuElm = document.querySelector("#menu-polozky")
    menuElm.classList.toggle("show")
    console.log(event.target)
    event.target.classList.toggle("fa-bars")    
    event.target.classList.toggle("fa-xmark")   
})