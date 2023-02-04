let height = document.getElementById("height");
let height_val = document.getElementById("height-val");
let weight = document.getElementById("weight");
let weight_val = document.getElementById("weight-val");
const metricButton = document.getElementById("metric-button");
const imperialButton = document.getElementById("imperial-button");
const heightUnit = document.getElementById("height-unit");
const weightUnit = document.getElementById("weight-unit");

//WHEN METRIC BUTTON IS PRESSED, CALL THIS FUNCTION
metricButton.addEventListener("click", function () {
    //CHANGE UNITS TO METRIC
    heightUnit.textContent = "cm";
    weightUnit.textContent = "kg";
    height.min = 0;
    height.max = 250;
    height.value = height_val.value;
    height_val.placeholder = height_val.value;
    weight.min = 0;
    weight.max = 500;
    weight.value = weight_val.value;
    weight_val.placeholder = weight_val.value;
    //TOGGLING BUTTON STYLING
    metricButton.style.color = "white";
    metricButton.style.borderColor = "rgb(51,51,51)";
    metricButton.style.backgroundColor = "rgb(51,51,51)";
    imperialButton.style.color = "rgb(51,51,51)";
    imperialButton.style.borderColor = "rgb(51,51,51)";
    imperialButton.style.backgroundColor = "white";
    //RUN CALCULATE FUNCTION SO THAT THE BMI INDICATOR
    // IS ALSO UPDATED ON BUTTON TOGGLE
    calculate();
});
//WHEN IMPERIAL BUTTON IS PRESSED, CALL THIS FUNCTION
imperialButton.addEventListener("click", function () {
    //CHANGE UNITS TO IMPERIAL
    heightUnit.textContent = "inches";
    weightUnit.textContent = "lbs";
    height.value = height_val.value;
    height_val.placeholder = height_val.value;
    weight.value = weight_val.value;
    weight_val.placeholder = weight_val.value;
    //TOGGLING BUTTON STYLING
    imperialButton.style.color = "white";
    imperialButton.style.borderColor = "rgb(51,51,51)";
    imperialButton.style.backgroundColor = "rgb(51,51,51)";
    metricButton.style.color = "rgb(51,51,51)";
    metricButton.style.borderColor = "rgb(51,51,51)";
    metricButton.style.backgroundColor = "white";
    //RUN CALCULATE FUNCTION SO THAT THE BMI INDICATOR
    // IS ALSO UPDATED ON BUTTON TOGGLE
    calculate();
});

//AUTOMATICALLY UPDATED THE INPUT [TYPE=TEXT] WITH
// SLIDER INPUT
function updateInput() {
    height_val.value = height.value;
    weight_val.value = weight.value;
}
//AUTOMATICALLY UPDATE THE SLIDER VALUE WITH
// INPUT[TYPE=TEXT] CHANGE
function updateSlider() {
    height.value = height_val.value;
    weight.value = weight_val.value;
}

//SECOND FUNCTION IS CALLED ON SLIDER INPUT OR TEXT INPUT TO
//AUTOMATICALLY UPDATE THE BMI AND CATEGORY AS WELL
function calculate() {
    let bmi;
    let result = document.getElementById("result");

    //IF METRIC UNITS, RUN THIS SCRIPT
    if (weightUnit.textContent === "kg") {
        let weight = parseInt(document.getElementById("weight").value);
        let height = parseInt(document.getElementById("height").value);
        //CALCULATE BMI
        bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
        //IF BMI = X, CHANGE CATEGORY ACCORDINGLY
        if (bmi < 18.5) {
            category = "Underweight";
            result.style.color = "#ffc44d";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal Weight";
            result.style.color = "#0be881";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
            result.style.color = "#ff884d";
        } else {
            category = "Obese";
            result.style.color = "#ff5e57";
        }
    }
    //ELSE IF IMPERIAL UNITS, RUN THIS SCRIPT
    else {
        let weight = parseInt(document.getElementById("weight").value);
        let height = parseInt(document.getElementById("height").value);
        //CALCULATE BMI
        bmi = ((weight / (height * height)) * 703).toFixed(1);
        //IF BMI = X, CHANGE CATEGORY ACCORDINGLY
        if (bmi < 18.5) {
            category = "Underweight";
            result.style.color = "#ffc44d";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal Weight";
            result.style.color = "#0be881";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
            result.style.color = "#ff884d";
        } else {
            category = "Obese";
            result.style.color = "#ff5e57";
        }
    }
    //UPDATE CATEGORY TEXT
    document.getElementById("category").textContent = category;
    //UPDATE BMI VALUE
    result.textContent = bmi;
}

const bmiButton = document.querySelector("#bmi-button");
const cat = document.querySelector("#category");
const bmi1 = document.querySelector(".bmi1");
const bmi2 = document.querySelector(".bmi2");
const bmi3 = document.querySelector(".bmi3");
const bmi4 = document.querySelector(".bmi4");

bmiButton.addEventListener("click", function () {
    if (cat.innerText === "Underweight") {
        bmi1.scrollIntoView({ behavior: "smooth" });
    } else if (cat.innerText === "Normal Weight") {
        bmi2.scrollIntoView({ behavior: "smooth" });
    } else if (cat.innerText === "Overweight") {
        bmi3.scrollIntoView({ behavior: "smooth" });
    } else if (cat.innerText === "Obese") {
        bmi4.scrollIntoView({ behavior: "smooth" });
    }
});
