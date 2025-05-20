const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}





document.addEventListener('DOMContentLoaded', function () {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    whatsappBtn.addEventListener('click', function () {
        // Replace the phone number and message with your own
        const phoneNumber = '923119921465'; // Your WhatsApp business number
        const message = 'Hello! I would like to purchase some products.';

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Construct WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp chat window
        window.open(whatsappUrl, '_blank');
    });
});



document.getElementById("callButton").addEventListener("click", function () {
    // Replace the phone number with your own
    var phoneNumber = "+923119921465";

    // Construct the tel: URL
    var telUrl = "tel:" + phoneNumber;

    // Open the phone app with the tel: URL
    window.open(telUrl, '_blank');
});





//for form submission....

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

// Function to send email using EmailJS
function sendEmail(templateParams) {
    emailjs.send("service_rwoo1c6", "template_9jcdwum", templateParams)
        .then(function (response) {
            console.log("Email sent successfully:", response);
            alert("Thank you! Your purchase details have been submitted.");
            // You can add further actions here, like closing the popup
        }, function (error) {
            console.error("Email sending failed:", error);
            alert("Oops! Something went wrong, please try again later.");
        });
}

// Form submission event listener
document.getElementById("purchaseForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    // Send email
    sendEmail(formData);
});