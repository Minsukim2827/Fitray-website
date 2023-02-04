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

const underweightButton = document.querySelector("#underweight-button");
const normalButton = document.querySelector("#normal-button");
const overweightButton = document.querySelector("#overweight-button");
const obeseButton = document.querySelector("#obese-button");

underweightButton.addEventListener("click", function () {
    bmi1.scrollIntoView({ behavior: "smooth" });
});

normalButton.addEventListener("click", function () {
    bmi2.scrollIntoView({ behavior: "smooth" });
});

overweightButton.addEventListener("click", function () {
    bmi3.scrollIntoView({ behavior: "smooth" });
});

obeseButton.addEventListener("click", function () {
    bmi4.scrollIntoView({ behavior: "smooth" });
});
