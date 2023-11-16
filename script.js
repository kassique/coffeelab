document.addEventListener("DOMContentLoaded", function() { /*Animação durante o carregamento da página*/
    var loader = document.getElementById("loader");
    loader.style.display = "flex";
    document.body.style.overflow = "hidden"

    setTimeout(function() {
        loader.style.display = "none";
        document.body.style.overflow = "visible";
    }, 1000);
})

const hamburger = document.querySelector(".hamburger"); /*Navbar responsiva*/
const navbarList = document.querySelector(".navbar-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarList.classList.toggle("active");
})

document.addEventListener("DOMContentLoaded", function () { /*Definição do lugar exato onde o scroll rola a página*/
    var navbarLink = document.querySelectorAll(".navbar-link");

    navbarLink.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                var offsetTop = targetSection.offsetTop;
                var windowHeight = window.innerHeight;
                var offsetCenter = offsetTop - (windowHeight / 6);

                window.scrollTo({
                    top: offsetCenter
                });
            }
        });
    });
});

const login = document.querySelector("#login"); /*Popup contendo formulário de login e cadastro*/
const loginContainer = document.querySelector(".login-container");
const navbarBtnDesktop = document.querySelector(".navbar-btn-desktop");
const navbarBtnMobile = document.querySelector(".navbar-btn-mobile");
const loginIconClose = document.querySelector(".login-btn-close");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

navbarBtnDesktop.addEventListener("click", () => {
    login.classList.add("active");
});

navbarBtnMobile.addEventListener("click", () => {
    login.classList.add("active");
});

loginIconClose.addEventListener("click", () => {
    login.classList.remove("active");
});

navbarBtnDesktop.addEventListener("click", () => {
    loginContainer.classList.add("popup");
});

navbarBtnMobile.addEventListener("click", () => {
    loginContainer.classList.add("popup");
});

loginIconClose.addEventListener("click", () => {
    loginContainer.classList.remove("popup");
});

registerLink.addEventListener("click", () => {
    loginContainer.classList.add("toogle");
});

loginLink.addEventListener("click", () => {
    loginContainer.classList.remove("toogle");
});

let menuFilter = document.querySelector(".menu-filter"); /*Menu contendo filtro de categorias*/
let menuFilterItem = document.querySelectorAll(".menu-filter-item");
menuFilterItem.forEach(function(a) {
    a.addEventListener("click", function() {
        menuFilter.querySelector(".active").classList.remove("active");
        a.classList.add("active");
    })
})

function expresso() {
    document.getElementById("expresso").style.display = "block";
    document.getElementById("latte").style.display = "none";
    document.getElementById("mocha").style.display = "none";
}
function latte() {
    document.getElementById("expresso").style.display = "none";
    document.getElementById("latte").style.display = "block";
    document.getElementById("mocha").style.display = "none";
}
function mocha() {
    document.getElementById("expresso").style.display = "none";
    document.getElementById("latte").style.display = "none";
    document.getElementById("mocha").style.display = "block";
}