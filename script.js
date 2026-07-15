// ===========================
// INTRO VIDEO
// ===========================

const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");
const introVideo = document.getElementById("introVideo");
const skipIntro = document.getElementById("skipIntro");

function showWebsite() {
    intro.style.display = "none";
    mainWebsite.style.display = "block";
}

if (introVideo) {
    introVideo.addEventListener("ended", showWebsite);
}

if (skipIntro) {
    skipIntro.addEventListener("click", () => {
        introVideo.pause();
        showWebsite();
    });
}

// ===========================
// SEARCH
// ===========================

const searchBox = document.getElementById("searchBox");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        console.log("Searching:", this.value);
    });
}

// ===========================
// SHOP STATUS
// ===========================

const status = document.getElementById("shopStatus");
const orderBtn = document.querySelector(".order-btn");

if (status) {

    const now = new Date();
    const hour = now.getHours();

    if (hour >= 9 && hour < 19) {

        status.innerHTML = "🟢 We are Open (9 AM - 7 PM)";
        status.classList.remove("closed");

    } else {

        status.innerHTML = "🔴 Shop Closed - Opens Tomorrow at 9 AM";
        status.classList.add("closed");

        if (orderBtn) {
            orderBtn.disabled = true;
            orderBtn.innerHTML = "Shop Closed";
            orderBtn.style.opacity = "0.6";
            orderBtn.style.cursor = "not-allowed";
        }

    }

}
