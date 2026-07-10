// Intro Video

const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");
const introVideo = document.getElementById("introVideo");
const skipIntro = document.getElementById("skipIntro");

// Show website after video ends
introVideo.addEventListener("ended", () => {
    intro.style.display = "none";
    mainWebsite.style.display = "block";
});

// Skip button
skipIntro.addEventListener("click", () => {
    introVideo.pause();
    intro.style.display = "none";
    mainWebsite.style.display = "block";
});

// Search (temporary)
const searchBox = document.getElementById("searchBox");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        console.log("Searching:", this.value);
    });
}
