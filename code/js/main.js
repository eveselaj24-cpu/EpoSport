
const filterButtons = document.querySelectorAll(".filter-btn");
const championshipCards = document.querySelectorAll(".championship-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        championshipCards.forEach(function(card) {
            const cardStatus = card.dataset.status;

            if (selectedFilter === "all" ||
                selectedFilter === cardStatus) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* SCROLL REVEAL ANIMATION */

const animatedCards = document.querySelectorAll(
    ".sport-card, .championship-card, .news-card"
);

const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

animatedCards.forEach(function(card) {
    card.classList.add("reveal");
    observer.observe(card);
});

/* GALLERY LIGHTBOX */

const galleryImages = document.querySelectorAll(
    ".gallery-item img"
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

let previousFocus = null;

if (lightbox && lightboxImage && closeButton) {

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.removeAttribute("src");
        document.body.style.overflow = "";

        if (previousFocus) {
            previousFocus.focus();
        }
    }

    galleryImages.forEach(function(image) {
        image.setAttribute("tabindex", "0");
        image.setAttribute("role", "button");
        image.setAttribute("aria-label",
            "View " + image.alt);

        function openImage() {
            previousFocus = document.activeElement;
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            closeButton.focus();
        }

        image.addEventListener("click", openImage);

        image.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImage();
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            closeButton.focus();
        }
    });
}
