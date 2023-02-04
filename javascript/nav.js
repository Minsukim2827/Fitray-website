const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#about-button");
const servicesButton = document.querySelector("#services-button");
const plansButton = document.querySelector("#plans-button");
const contactButton = document.querySelector("#contact-button");

const homesection = document.querySelector("#intro-page");
const aboutsection = document.querySelector("#about-page");
const servicessection = document.querySelector("#services-page");
const planssection = document.querySelector("#plans-page");
const contactsection = document.querySelector("#contact-page");

homeButton.addEventListener("click", function () {
    homesection.scrollIntoView({ behavior: "smooth" });
});

aboutButton.addEventListener("click", function () {
    aboutsection.scrollIntoView({ behavior: "smooth" });
});

servicesButton.addEventListener("click", function () {
    servicessection.scrollIntoView({ behavior: "smooth" });
});

plansButton.addEventListener("click", function () {
    planssection.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", function () {
    contactsection.scrollIntoView({ behavior: "smooth" });
});
