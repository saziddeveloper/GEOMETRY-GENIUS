// Function - re-useable input-field value in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// Function- re-useable set value on area
function setElementInnerText(elementId, areaValue){
    const element = document.getElementById(elementId);
    element.innerText = areaValue;
}

//-------------------------------------------------------------------

// Calculate triangle
function calculateTriangleArea(){
    const base = getInputValue("triangle-base");
    const height = getInputValue("triangle-height");
    const resultArea = 0.5 * base * height;
    const area = resultArea.toFixed(2);
    if (isNaN(base) || isNaN(height)) {
        alert("Please! Insert A Number");
        return;
    }
    setElementInnerText("triangle-area", area);
    //-----------------------------------------
    addToCalculationEntry("Triangle", area);
}
// Calculate rectangle
function calculateRectangleArea(){
    const width = getInputValue("rectangle-width");
    const length = getInputValue("rectangle-length");
    const resultArea = width * length;
    const area = resultArea.toFixed(2);
    if (isNaN(width) || isNaN(length)) {
        alert("Please! Insert A Number");
        return;
    }
    setElementInnerText("rectangle-area", area);
    //-----------------------------------------
    addToCalculationEntry("Rectangle", area);
}
// Calculate parallelogram
function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    const resultArea = base * height;
    const area = resultArea.toFixed(2);
    if (isNaN(base) || isNaN(height)) {
        alert("Please! Insert A Number");
        return;
    }
    setElementInnerText("parallelogram-area", area);
    //-----------------------------------------
    addToCalculationEntry("Parallelogram", area);
}
// Calculate rhombus
function calculateRhombusArea(){
    const dia1 = getInputValue("rhombus-dia-1");
    const dia2 = getInputValue("rhombus-dia-2");
    const resultArea = dia1 * dia2;
    const area = resultArea.toFixed(2);
    if (isNaN(dia1) || isNaN(dia2)) {
        alert("Please! Insert A Number");
        return;
    }
    setElementInnerText("rhombus-area", area);
    //-----------------------------------------
    addToCalculationEntry("Rhombus", area);
}
// Calculate pentagon
function calculatePentagonArea(){
    const pen = getInputValue("pentagon-pen");
    const base = getInputValue("pentagon-b-base");
    const resultArea = 0.5 * pen * base;
    const area = resultArea.toFixed(2);
    if (isNaN(pen) || isNaN(base)) {
        alert("Please! Insert A Number");
        return;
    }
    setElementInnerText("pentagon-area", area);
    //-----------------------------------------
    addToCalculationEntry("Pentagon", area);
}
// Calculate ellipse
function calculateEllipseArea(){
    const bigR = getInputValue("ellipse-big-r");
    const smallR = getInputValue("ellipse-small-r");
    const resultArea = Math.PI * bigR * smallR;
    const area = resultArea.toFixed(2);
    if (isNaN(bigR) || isNaN(smallR)) {
        alert("Please! Insert A Number");
        return;
    }
    setElementInnerText("ellipse-area", area);
    //-----------------------------------------
    addToCalculationEntry("Ellipse", area);
}

// advanced js-code
// -------------------------------------------------------------------

function addToCalculationEntry(typeOfArea, areaValue) {
    // Get the calculation entry div
    const calculationEntry = document.getElementById("calculation-entry");

    // Get the count of current child elements inside calculationEntry
    const count = calculationEntry.childElementCount;

    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "flex justify-between items-center px-2 py-1 mb-4 bg-gray-100 rounded-md shadow-sm";

    // Create a new p element
    const newP = document.createElement("p");
    newP.className = "text-gray-700 text-sm font-medium";

    // Check if areaValue is longer than 5 characters (digits + decimal point)
    if (areaValue.toString().length > 6) {
        newP.innerHTML = `${count + 1}. ${typeOfArea}:<br>${areaValue} cm²`; // Add a line break if the value is greater than 5 digits
    } else {
        newP.innerText = `${count + 1}. ${typeOfArea}: ${areaValue} cm²`;
    }

    // Create a new button element
    const newButton = document.createElement("button");
    newButton.className = "bg-[#1090D8] text-sm text-white ml-3 py-1 px-3 rounded hover:bg-blue-800 active:bg-blue-300";
    newButton.innerText = "Convert m²";
    
    // Append the p and button to the new div
    newDiv.appendChild(newP);
    newDiv.appendChild(newButton);

    // Append the new div to the calculation entry container
    calculationEntry.appendChild(newDiv);

    // Optional: Add event listener to the button to convert the area value to m²
    newButton.addEventListener("click", function() {
        // Convert cm² to m²
        const areaInMeters = (areaValue / 10000).toFixed(2); // 1 m² = 10,000 cm²
        
        // Update the p element with the new value
        newP.innerHTML = `${count + 1}. ${typeOfArea}: ${areaInMeters} m²`;
    });
}
