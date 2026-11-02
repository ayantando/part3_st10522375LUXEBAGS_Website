
// LUXE BAGS - Interactive Image Gallery

document.addEventListener("DOMContentLoaded", function () {

    // Find all gallery images
    const images = document.querySelectorAll(".gallery-image");

    if (images.length === 0) {
        return;
    }

    // Create the lightbox
    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.hidden = true;

    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged handbag image");

    // Create close button
    const closeButton = document.createElement("button");
    closeButton.className = "gallery-lightbox-close";
    closeButton.type = "button";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close image");

    // Create enlarged image
    const enlargedImage = document.createElement("img");
    enlargedImage.className = "gallery-lightbox-image";

    // Create image description
    const caption = document.createElement("p");
    caption.className = "gallery-lightbox-caption";

    lightbox.append(closeButton, enlargedImage, caption);
    document.body.appendChild(lightbox);

    let previousImage = null;

    // Close the lightbox
    function closeLightbox() {
        lightbox.hidden = true;
        document.body.classList.remove("gallery-lightbox-open");

        if (previousImage) {
            previousImage.focus();
        }
    }

    // Open an enlarged image when clicked
    images.forEach(function (image) {

        image.style.cursor = "zoom-in";
        image.setAttribute("tabindex", "0");

        function openLightbox() {

            previousImage = image;

            enlargedImage.src = image.src;
            enlargedImage.alt = image.alt;

            caption.textContent = image.alt;

            lightbox.hidden = false;
            document.body.classList.add("gallery-lightbox-open");

            closeButton.focus();
        }

        image.addEventListener("click", openLightbox);

        // Allow keyboard users to open images
        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox();
            }
        });

    });

    // Close using the X button
    closeButton.addEventListener("click", closeLightbox);

    // Close by clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close using Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !lightbox.hidden) {
            closeLightbox();
        }
    });

});
  
