// let navbar = document.querySelector("nav");
// let nav_height = navbar.getAttribute("height");
// console.log(nav_height);    

// let root = document.querySelector(":root");
// console.log(root);

// let div_height = (100-nav_height) + "vh";

// root.style.setProperty("--content-div-height", div_height);

function dropdown(e) {
    let navbar = document.querySelector("nav");
    console.log(navbar);
    if (navbar.classList.contains("responsive-navbar")) {
        navbar.classList.remove("responsive-navbar");
    } else {
        navbar.classList.add("responsive-navbar");
    }
}