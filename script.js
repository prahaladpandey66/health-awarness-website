// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to HEALTHIFY!");
});

// Contact Form
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const message = contactForm.querySelector(
        "textarea"
    ).value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields!");
    } else {
        alert("Thank you, " + name + "! Your message has been received.");

        contactForm.reset();
    }
});

// Navigation Active Effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.style.color = "white";
        });

        link.style.color = "#b9f6ca";
    });
});

// Scroll to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";
topButton.title = "Back to Top";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.borderRadius = "50%";
topButton.style.fontSize = "25px";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

console.log("HEALTHIFY JavaScript Loaded Successfully!");