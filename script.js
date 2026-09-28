const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");

// Open image preview
galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        document.body.style.overflow = "hidden";
    });

});

// Close button
closeBtn.addEventListener("click", () => {

    closeLightbox();

});

// Close when clicking outside image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});

// Close using Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});

// Close function
function closeLightbox() {

    lightbox.classList.remove("active");

    lightboxImage.src = "";

    document.body.style.overflow = "auto";
}