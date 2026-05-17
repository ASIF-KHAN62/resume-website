// Donation
function donate() {
    const amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Enter valid amount");
    } else {
        alert("Thank you for donating ₹" + amount + " ❤️");
    }
}

// Scroll animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    faders.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
});