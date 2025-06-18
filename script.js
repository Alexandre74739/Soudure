const avisItems = document.querySelectorAll(".avis-item");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let visibleCount = 3;

function updateAvisVisibility() {
    avisItems.forEach((item, index) => {
        item.style.display = index < visibleCount ? "block" : "none";
    });

    // Cacher le bouton s’il n’y a plus d’éléments à afficher
    if (visibleCount >= avisItems.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadMoreBtn.addEventListener("click", () => {
    visibleCount += 3;
    updateAvisVisibility();
});

// Initialisation
updateAvisVisibility();

// Hamburger
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Bouton déroulant (aboutUs)
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("toggleAboutBtn");
    const moreText = document.getElementById("moreAboutText");

    if (btn && moreText) {
        btn.addEventListener("click", () => {
            const isHidden = moreText.style.display === "none";
            moreText.style.display = "inline";
            btn.style.display = "none";
        });
    }
});