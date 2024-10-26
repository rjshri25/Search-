// Search functionality for IPC sections
function searchCrime() {
    const crime = document.getElementById("crimeInput").value;
    let result = '';

    // Mock crime classifications based on IPC sections
    const crimes = {
        "theft": "IPC Section 378 - Theft, Chapter XVII",
        "murder": "IPC Section 302 - Murder, Chapter XVI",
        "fraud": "IPC Section 420 - Cheating and Fraud, Chapter XVII"
    };

    if (crime in crimes) {
        result = crimes[crime];
    } else {
        result = "No classification found for the entered crime.";
    }

    document.getElementById("result").innerHTML = result;
}

// Simulated payment and token generation for Pro/UltraPro plans
function buyPlan(plan) {
    const token = Math.random().toString(36).substr(2); // Generate a token
    const validUntil = new Date();
    validUntil.setMonth(validUntil.getMonth() + 1); // Valid for one month

    alert(`${plan} plan purchased! Token: ${token}. Valid until: ${validUntil.toDateString()}`);
    
    // You can save the token in a database or localStorage for future use
}
