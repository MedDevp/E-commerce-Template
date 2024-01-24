let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let menubtn = document.getElementById("menubtn");
let menu = document.getElementById("menu");

window.onscroll = function (){
    this.scrollY >=400 ? scrollToTopBtn.style.display = "block" : scrollToTopBtn.style.display = "none";
}
scrollToTopBtn.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior : "smooth",
    });
};


menubtn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
