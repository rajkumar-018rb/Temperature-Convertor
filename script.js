// =====================================
// GET HTML ELEMENTS
// =====================================

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertButton =
    document.getElementById("convert-btn");

const resetButton =
    document.getElementById("reset-btn");

const errorMessage =
    document.getElementById("error-message");

const celsiusResult =
    document.getElementById("celsius-result");

const fahrenheitResult =
    document.getElementById("fahrenheit-result");

const kelvinResult =
    document.getElementById("kelvin-result");


// =====================================
// CONVERT BUTTON
// =====================================

convertButton.addEventListener("click", function () {

    // Get input value
    const temperature =
        temperatureInput.value.trim();

    // Get selected unit
    const unit =
        unitSelect.value;


    // Clear previous error
    errorMessage.textContent = "";


    // =================================
    // VALIDATE EMPTY INPUT
    // =================================

    if (temperature === "") {

        errorMessage.textContent =
            "Please enter a temperature.";

        return;
    }


    // Convert string to number
    const value = Number(temperature);


    // =================================
    // VALIDATE NUMBER
    // =================================

    if (!Number.isFinite(value)) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        return;
    }


    // =================================
    // CONVERT TO CELSIUS
    // =================================

    let celsius;


    if (unit === "celsius") {

        celsius = value;

    }

    else if (unit === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;

    }

    else if (unit === "kelvin") {

        celsius = value - 273.15;

    }


    // =================================
    // ABSOLUTE ZERO VALIDATION
    // =================================

    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        return;
    }


    // =================================
    // CONVERT CELSIUS → FAHRENHEIT
    // =================================

    const fahrenheit =
        (celsius * 9 / 5) + 32;


    // =================================
    // CONVERT CELSIUS → KELVIN
    // =================================

    const kelvin =
        celsius + 273.15;


    // =================================
    // DISPLAY RESULTS
    // =================================

    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;


    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;


    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;

});


// =====================================
// RESET BUTTON
// =====================================

resetButton.addEventListener("click", function () {

    // Clear input
    temperatureInput.value = "";


    // Reset unit
    unitSelect.value = "celsius";


    // Clear error
    errorMessage.textContent = "";


    // Reset results
    celsiusResult.textContent = "-- °C";

    fahrenheitResult.textContent = "-- °F";

    kelvinResult.textContent = "-- K";

});