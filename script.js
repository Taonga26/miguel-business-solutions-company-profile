
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        // Close the menu when a navigation link is selected.
        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });

        // Close menu when clicking outside the navigation.
        document.addEventListener("click", event => {

            const clickedInside =
                navigation.contains(event.target) ||
                menuToggle.contains(event.target);

            if (!clickedInside) {

                navigation.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });

    }


    // =====================================
    // AUTOMATIC FOOTER YEAR
    // =====================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =====================================
    // SCROLL REVEAL ANIMATIONS
    // =====================================

    const revealElements = document.querySelectorAll(
        ".intro-grid, .fact-strip, .vision h2, " +
        ".section-heading, .service-card, " +
        ".hardware-item, .service-note, " +
        ".client-list > div, .leader-card, " +
        ".corporate-grid > div, .contact-layout"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -30px 0px"
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // =====================================
    // HEADER SHADOW ON SCROLL
    // =====================================

    const header = document.querySelector(".site-header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 5px 25px rgba(6, 28, 64, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


});
