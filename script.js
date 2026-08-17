// Typewriter Effect
const textArray = ["Cybersecurity Analyst", "Penetration Tester", "Digital Forensics Expert"];
const typeWriterElement = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2; // Delete faster
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of the word
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeWriter, typeSpeed);
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    // Impressive Smooth Scroll Restoration
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && parseInt(savedScrollPosition, 10) > 0) {
        // Scroll from top to the saved position after a short dramatic delay
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(savedScrollPosition, 10),
                behavior: 'smooth'
            });
            sessionStorage.removeItem('scrollPosition');
        }, 500); 
    }

    // Save position before reloading
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });

    // Start typewriter
    if (typeWriterElement) {
        setTimeout(typeWriter, 1000);
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Toggle icon between bars and times
            const icon = hamburger.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });

    // Custom Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Update URL manually without causing jump
                history.pushState(null, null, targetId);
            }
        });
    });
});
