// This script handles the contact form submission

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {

    // Get the form element
    const contactForm = document.getElementById("contactForm");

    // Get the response div element where we show the message after form submission
    const responseDiv = document.getElementById("responseMessage");

    // Add an event listener for the form submission
    contactForm.addEventListener("submit", function (event) {
        
        // Prevent the form from submitting the traditional way (page reload)
        event.preventDefault();

        // Get form values (name, email, message)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation (optional)
        if (name === "" || email === "" || message === "") {
            responseDiv.innerHTML = "<p style='color: red;'>Please fill out all fields before submitting.</p>";
            return; // Prevent submission if validation fails
        }

        // Display a success message (this would be replaced by actual email handling in the future)
        responseDiv.innerHTML = `<p style='color: green;'>Thank you, ${name}! Your message has been sent successfully. We will get back to you soon.</p>`;

        // Optionally, clear the form fields
        contactForm.reset();
    });

});
