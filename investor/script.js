// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounters() {

    if (started) {
        return;
    }

    const statsSection = document.querySelector(".stats");

    const position = statsSection.getBoundingClientRect();

    if (position.top < window.innerHeight) {

        started = true;

        counters.forEach(function (counter) {

            const target = parseFloat(
                counter.getAttribute("data-target")
            );

            let current = 0;

            const increment = target / 80;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    if (target % 1 !== 0) {
                        counter.textContent = current.toFixed(1);
                    } else {
                        counter.textContent = Math.floor(current);
                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target % 1 !== 0) {
                        counter.textContent = target.toFixed(1);
                    } else {
                        counter.textContent = target;
                    }

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();