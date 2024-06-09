
$(document).ready(function () {
    emailjs.init({
        publicKey: "MKw8mkbVacyNqFahR"
    })

    $("#contactForm").on("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', "#contactForm")
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
});