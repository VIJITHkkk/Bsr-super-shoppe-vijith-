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
