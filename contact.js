
// LUXE BAGS - Contact Form Functionality

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");
    const phoneInput = document.getElementById("contact-phone");
    const response = document.getElementById("contact-response");

    // Check that the contact form exists
    if (!contactForm) {
        return;
    }

    // Remove letters and unsupported characters from phone input
    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9+() -]/g, "");
        this.setCustomValidity("");
    });

    // Process contact form submission
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check South African phone number
        const phoneDigits = phoneInput.value.replace(/\D/g, "");

        const validLocalNumber =
            phoneDigits.length === 10 && phoneDigits.startsWith("0");

        const validInternationalNumber =
            phoneDigits.length === 11 && phoneDigits.startsWith("27");

        if (!validLocalNumber && !validInternationalNumber) {

            phoneInput.setCustomValidity(
                "Please enter a complete South African phone number, for example 082 123 4567."
            );

            phoneInput.reportValidity();
            phoneInput.setCustomValidity("");
            return;
        }

        // Collect customer information
        const name = contactForm.elements["name"].value.trim();
        const email = contactForm.elements["email"].value.trim();
        const phone = phoneInput.value.trim();
        const subject = contactForm.elements["subject"].value.trim();
        const message = contactForm.elements["message"].value.trim();

        // Prepare email subject and message
        const emailSubject = encodeURIComponent(
            "LUXE BAGS Contact Message: " + subject
        );

        const emailBody = encodeURIComponent(
            "Customer Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Phone Number: " + phone + "\n\n" +
            "Message:\n" + message
        );

        // Display customer response
        response.textContent =
            "Your contact message is ready. Your email application should open. Please review and send your message.";

        // Open the customer's email application
        window.location.href =
            "mailto:Luxebags240@gmail.com" +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

    });

    // Clear response when the form is reset
    contactForm.addEventListener("reset", function () {
        response.textContent = "";
        phoneInput.setCustomValidity("");
    });

});
