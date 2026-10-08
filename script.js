/* 모바일 메뉴 */
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

/* 스크롤 등장 애니메이션 */
const animatedElements = document.querySelectorAll(
    ".section-header, .about-main, .about-info, .project-card, .skill-card, .timeline-item"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.1 }
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

/* 현재 스크롤 위치에 따른 Navigation */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});