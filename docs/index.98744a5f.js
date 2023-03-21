const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById("nav");
icon.addEventListener("click", function() {
    icon1.classList.toggle("a");
    icon2.classList.toggle("c");
    icon3.classList.toggle("b");
    nav.classList.toggle("show");
});
let encodedEmail = "c3V2aS5wcmljZWxsYUBnbWFpbC5jb20=";
const emailLink = document.getElementById("contact");
emailLink.setAttribute("href", "mailto:".concat(atob(encodedEmail)));

//# sourceMappingURL=index.98744a5f.js.map
