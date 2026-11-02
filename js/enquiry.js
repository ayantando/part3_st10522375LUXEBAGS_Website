
// LUXE BAGS - Enquiry Form Functionality

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiry-form");
    const phoneInput = document.getElementById("phone");
    const response = document.getElementById("enquiry-response");

    // Stop if this page does not contain the enquiry form
    if (!enquiryForm) {
        return;
    }

    // Remove letters and unsupported characters from phone input
    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9+() -]/g, "");
        });
    }

    // Handle enquiry form submission
    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check the number of digits in the phone number
        const phoneDigits = phoneInput.value.replace(/\D/g, "");

        if (phoneDigits.length < 7 || phoneDigits.length > 15) {
            phoneInput.setCustomValidity(
                "Please enter a phone number containing 7 to 15 digits."
            );

            phoneInput.reportValidity();
            phoneInput.setCustomValidity("");
            return;
        }

        // Collect customer information
        const name = enquiryForm.elements["name"].value.trim();
        const email = enquiryForm.elements["email"].value.trim();
        const phone = phoneInput.value.trim();
        const subject = enquiryForm.elements["subject"].value.trim();
        const service = enquiryForm.elements["service"].value;
        const message = enquiryForm.elements["message"].value.trim();

        // Prepare the email subject
        const emailSubject = encodeURIComponent(
            "LUXE BAGS Enquiry: " + subject
        );

        // Prepare the email message
        const emailBody = encodeURIComponent(
            "Customer Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Enquiry Type: " + service + "\n\n" +
            "Message:\n" + message
        );

        // Give the customer a response
        response.textContent =
            "Your enquiry details are ready. Your email application should open. Please review and send the email to complete your enquiry.";

        // Open the customer's email application
        window.location.href =
            "mailto:Luxebags240@gmail.com" +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

    });

    // Clear the response when the form is reset
    enquiryForm.addEventListener("reset", function () {
        response.textContent = "";
    });

});










// Phone number validation
const phoneInput = document.getElementById("phone");

if (phoneInput) {
    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9+() -]/g, "");
    });
}