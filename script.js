// ===========================
// INTRO VIDEO (Only First Time)
// ===========================

const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");
const introVideo = document.getElementById("introVideo");
const skipIntro = document.getElementById("skipIntro");

if (localStorage.getItem("introPlayed") === "yes") {

    intro.style.display = "none";
    mainWebsite.style.display = "block";

} else {

    introVideo.addEventListener("ended", function () {

        localStorage.setItem("introPlayed", "yes");

        intro.style.display = "none";
        mainWebsite.style.display = "block";

    });

    skipIntro.addEventListener("click", function () {

        introVideo.pause();

        localStorage.setItem("introPlayed", "yes");

        intro.style.display = "none";
        mainWebsite.style.display = "block";

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

const shopStatus = document.getElementById("shopStatus");

function updateShopStatus(){

    if(!shopStatus) return;

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let displayHour = hour % 12;
    if(displayHour === 0) displayHour = 12;

    const ampm = hour >= 12 ? "PM" : "AM";
    const time =
        displayHour + ":" +
        String(minute).padStart(2,"0") +
        " " + ampm;

    if(hour >= 9 && hour < 19){

        shopStatus.className="shop-status open";
        shopStatus.innerHTML =
        `<span class="dot"></span>
        🟢 OPEN NOW | ${time}`;

    }else{

        shopStatus.className="shop-status closed";
        shopStatus.innerHTML =
        `<span class="dot"></span>
        🔴 CLOSED | ${time}`;

    }
}

updateShopStatus();
setInterval(updateShopStatus, 1000);
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if (menuBtn && sideMenu) {
    menuBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (
            !sideMenu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            sideMenu.classList.remove("active");
        }
    });
}
