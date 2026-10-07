const yearEl = document.getElementById("year");

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

const floatingCards = document.querySelectorAll(".menu-card, .ai-card, .gallery-item");
floatingCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 80}ms`;
});
