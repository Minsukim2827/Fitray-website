const aboutPage = document.querySelector("#about-page");
const aboutLeft = document.querySelector("#about-left");
const aboutRight = document.querySelector("#about-right");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            //IF SECTION AND USERS VIEW OVERLAP, DO THIS
            if (entry.isIntersecting) {
                //SLIDE FROM LEFT TO RIGHT
                aboutLeft.style.transform = "translateX(0%)";
                //SLIDE FROM RIGHT TO LEFT WITH A SMALL TIME DELAY
                setTimeout(() => {
                    aboutRight.style.transform = "translateX(0%)";
                }, 100);
                //IF SECTION OFF VIEW, DO THIS
            } else {
                //SLIDE OUT OF SCREEN
                aboutLeft.style.transform = "translateX(-150%)";
                setTimeout(() => {
                    //SLIDE OUT OF SCREEN WITH A SMALL TIME DELAY
                    aboutRight.style.transform = "translateX(150%)";
                }, 100);
            }
        });
    },
    {
        threshold: 0.5,
    }
);
//OBSERVE ABOUT SECTION
observer.observe(aboutPage);
