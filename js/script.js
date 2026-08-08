javascript
// ==============================
// SEARCH FUNCTION
// ==============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchMessage = document.getElementById("searchMessage");

function searchFood() {

    const searchText = searchInput.value.trim();

    if (searchText === "") {

        searchMessage.textContent =
            "Please enter a restaurant, cuisine, or dish.";

        searchInput.focus();

        return;
    }

    searchMessage.textContent =
        `Searching for "${searchText}"...`;

    // Small animation
    searchBtn.style.transform = "scale(0.95)";

    setTimeout(() => {
        searchBtn.style.transform = "scale(1)";
    }, 150);
}

searchBtn.addEventListener("click", searchFood);


// Search when Enter is pressed

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchFood();
    }

});


// ==============================
// FOOD CARD ANIMATION
// ==============================

const foodCards =
    document.querySelectorAll(".food-card");

foodCards.forEach((card, index) => {

    card.style.animationDelay =
        `${index * 0.15}s`;

    card.addEventListener("click", function () {

        const foodName =
            card.querySelector("h3").textContent;

        searchInput.value = foodName;

        searchMessage.textContent =
            `Looking for ${foodName}...`;

        // Scroll to search box
        document.querySelector(".search-box")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    });

});


// ==============================
// NAVIGATION ACTIVE EFFECT
// ==============================

const navLinks =
    document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

searchBtn.addEventListener("click", function () {

    this.classList.add("clicked");

    setTimeout(() => {
        this.classList.remove("clicked");
    }, 300);

});

