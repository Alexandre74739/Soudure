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
