// OUR TEAM SLIDER

document.addEventListener("DOMContentLoaded", function () {
    const teamBox = document.getElementById("our-team-box");
    const teamMembers = document.querySelectorAll(".team-member");
    const prevBtn = document.querySelector(".team-box-left");
    const nextBtn = document.querySelector(".team-box-right");

    function getVisibleCount() {
        if (window.innerWidth <= 700) return 1;
        if (window.innerWidth <= 990) return 2;
        return 3;
    }

    let visibleCount = getVisibleCount();
    let currentIndex = 0;

    function updateSlider() {
        visibleCount = getVisibleCount();
        const totalMembers = teamMembers.length;

        if (window.innerWidth <= 700) {
            // Hide buttons and enable scrolling
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
            teamBox.style.overflowX = "auto";
            teamBox.style.scrollBehavior = "smooth";
            teamMembers.forEach(member => {
                member.style.display = "flex";
                member.style.minWidth = "200px";
                member.style.flexShrink = "0";
            });
        } else {
            // Show buttons and apply sliding logic
            prevBtn.style.display = "flex";
            nextBtn.style.display = "flex";
            teamBox.style.overflowX = "hidden";

            teamMembers.forEach((member, index) => {
                if (index >= currentIndex && index < currentIndex + visibleCount) {
                    member.style.display = "flex";
                } else {
                    member.style.display = "none";
                }
            });

            prevBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
            nextBtn.style.visibility = currentIndex + visibleCount >= totalMembers ? "hidden" : "visible";
        }
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex + visibleCount < teamMembers.length) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
});


// NEWS AND BLOGS SLIDER
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("newsSlider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    
    const scrollAmount = 500; // Move one card at a time

    rightBtn.addEventListener("click", function () {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});

// NAVBAR MENU BARS ICON SWITCH ON CLICK
document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector("#hamburger-container .fa-bars");
    const xmark = document.querySelector("#hamburger-container .fa-xmark");
    const navLinks = document.querySelector(".nav-links-mobile");

    // Ensure only bars icon is visible and nav-links is hidden on page load
    bars.style.display = "inline";
    xmark.style.display = "none";
    navLinks.style.display = "none";

    document.getElementById("hamburger-container").addEventListener("click", function () {
        if (bars.style.display === "none") {
            bars.style.display = "inline";
            xmark.style.display = "none";
            navLinks.style.display = "none"; // Hide nav when bars is shown
        } else {
            bars.style.display = "none";
            xmark.style.display = "inline";
            navLinks.style.display = "block"; // Show nav when xmark is shown
        }
    });
});

  