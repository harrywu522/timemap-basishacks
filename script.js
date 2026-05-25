// AP CSP Basic Level Logic: Using a List and a Procedure

// 1. DATA: Our List (Array) of locations
var cities = [
    { name: "Shanghai, China", year: "1930" },
    { name: "New York, USA", year: "1920" },
    { name: "Dubai, UAE", year: "1990" },
    { name: "Hong Kong, China", year: "1960" },
    { name: "London, UK", year: "1920" },
    { name: "Singapore", year: "1970" },
    { name: "Tokyo, Japan", year: "1950" }
];

// 2. STATE: Keeping track of which city we are looking at
var currentIndex = 0;

// 3. PROCEDURE: Update the screen based on the currentIndex
function updateUI() {
    var city = cities[currentIndex];
    
    // Update the text on screen
    document.getElementById("location-name").innerText = city.name;
    document.getElementById("past-year").innerText = "PAST (" + city.year + ")";
    
    // Update the images using our file naming system (past0.jpg, modern0.jpg, etc)
    document.getElementById("past-layer").style.backgroundImage = "url('past" + currentIndex + ".jpg')";
    document.getElementById("modern-layer").style.backgroundImage = "url('modern" + currentIndex + ".jpg')";
}

// 4. PROCEDURE: Moving forward
function moveForward() {
    currentIndex = currentIndex + 1;
    
    // If we go past the end, loop back to the start
    if (currentIndex >= cities.length) {
        currentIndex = 0;
    }
    updateUI();
}

// 5. PROCEDURE: Moving backward
function moveBack() {
    currentIndex = currentIndex - 1;
    
    // If we go before the start, loop to the end
    if (currentIndex < 0) {
        currentIndex = cities.length - 1;
    }
    updateUI();
}

// 6. PROCEDURE: Reveal the hidden layer using the slider
function revealLayer() {
    var sliderValue = document.getElementById("slider").value;
    document.getElementById("modern-layer").style.width = sliderValue + "%";
}

// Start the program by showing the first city
updateUI();
