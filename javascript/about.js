const aboutPage = document.querySelector("#about-page");
const aboutLeft = document.querySelector("#about-left");
const aboutRight = document.querySelector("#about-right");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            //IF SECTION AND USERS VIEW OVERLAP, DO THIS
            if (entry.isIntersecting) {
                //SLIDE FROM RIGHT TO LEFT
                aboutRight.style.transform = "translateX(0%)";
                //SLIDE FROM LEFT TO RIGHT WITH A SMALL TIME DELAY
                setTimeout(() => {
                    aboutLeft.style.transform = "translateX(0%)";
                }, 150);
                //IF SECTION OFF VIEW, DO THIS
            } else {
                //SLIDE OUT OF SCREEN
                aboutRight.style.transform = "translateX(-300%)";
                setTimeout(() => {
                    //SLIDE OUT OF SCREEN WITH A SMALL TIME DELAY
                    aboutLeft.style.transform = "translateX(-150%)";
                }, 150);
            }
        });
    },
    {
        threshold: 0.5,
    }
);
//OBSERVE ABOUT SECTION
observer.observe(aboutPage);

var content = document.querySelector("#about-page");
var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", "width=" + content.offsetWidth);
