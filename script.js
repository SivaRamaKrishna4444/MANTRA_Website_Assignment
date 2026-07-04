// MANTRA Educational Institutions Website

// Mobile Navigation Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}


// Registration Form Validation
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;

        const formMessage = document.getElementById("formMessage");

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            course === ""
        ) {
            formMessage.style.color = "red";
            formMessage.textContent =
                "Please fill all required fields.";
            return;
        }

        if (
            !email.includes("@") ||
            !email.includes(".")
        ) {
            formMessage.style.color = "red";
            formMessage.textContent =
                "Please enter a valid email address.";
            return;
        }

        if (
            phone.length !== 10 ||
            isNaN(phone)
        ) {
            formMessage.style.color = "red";
            formMessage.textContent =
                "Please enter a valid 10-digit mobile number.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent =
            "Thank you! Your registration has been submitted successfully.";

        bookingForm.reset();

    });

}


// Program Fee Calculator
function calculateCost() {

    const packageSelect =
        document.getElementById("packageSelect");

    const peopleCount =
        document.getElementById("peopleCount");

    const costResult =
        document.getElementById("costResult");

    if (!packageSelect || !peopleCount || !costResult) {
        return;
    }

    const price = Number(packageSelect.value);
    const students = Number(peopleCount.value);

    if (students <= 0) {

        costResult.style.color = "red";
        costResult.textContent =
            "Please enter a valid number of students.";

        return;
    }

    const total = price * students;

    costResult.style.color = "green";
    costResult.textContent =
        "Estimated Total Fee: ₹" +
        total.toLocaleString("en-IN");
}


// Gallery Filter
function filterGallery(category) {

    const items =
        document.querySelectorAll(".gallery-item");

    items.forEach(function(item) {

        if (
            category === "all" ||
            item.classList.contains(category)
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
}