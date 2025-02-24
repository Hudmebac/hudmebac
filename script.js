document.addEventListener("DOMContentLoaded", function() {
    const hourHand = document.getElementById("hour-hand");
    const tirednessIndicator = document.getElementById("tiredness-indicator");

    // Function to animate the clock hand
    function animateClock() {
        // Rotate the hour hand by 30 degrees (360 degrees / 12 hours = 30 degrees per hour)
        hourHand.style.transition = "transform 1s ease-in-out"; // Smooth transition
        hourHand.style.transform = "rotate(30deg)"; // Move the hour hand by 1 hour

        // Show tiredness indicator
        tirednessIndicator.style.display = "block"; // Show the "ZZzz" text
        setTimeout(() => {
            tirednessIndicator.style.display = "none"; // Hide the "ZZzz" text after 1 second
        }, 1000); // Display for 1 second

        // Reset the rotation after the animation
        setTimeout(() => {
            hourHand.style.transition = "none"; // Remove transition for instant reset
            hourHand.style.transform = "rotate(0deg)"; // Reset to original position
        }, 1000); // Wait for the animation to finish before resetting
    }

    // Call the animation function every 5 seconds (for demonstration purposes)
    setInterval(animateClock, 5000);
});
