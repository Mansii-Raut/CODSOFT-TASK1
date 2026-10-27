// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile navigation after clicking a link.

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";

    });

});


// =========================================
// PROJECT DETAILS
// =========================================

const projectDetails = {

    noctra: {
        title: "NOCTRA — Smart Sleep Tracker",

        description:
            "NOCTRA is a sleep-tracking application designed to help users understand their sleep habits. Its planned features include daily sleep tracking, sleep assessments, weekly and monthly reports, charts, and user accounts. The application uses a Node.js and Express backend with an SQLite database.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "SQLite",
            "Chart.js"
        ]
    },

    blogspace: {
        title: "BLOGSPACE — Blog Website",

        description:
            "BLOGSPACE is a blog website concept focused on a clean and responsive reading experience. Planned features include article search, category filtering, individual article pages, and a theme switcher.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ]
    },

    portfolio: {
        title: "Personal Portfolio Website",

        description:
            "This portfolio presents my introduction, education, technical skills, and projects. It uses responsive layouts, interactive project cards, navigation links, and a contact form that can prepare an email.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design"
        ]
    },

    student: {
        title: "Student Management System",

        description:
            "This is a student management project concept for organising student information. Possible features include adding student records, viewing details, searching for students, and updating existing information. Implement these features before presenting the project as completed.",

        technologies: [
            "Java",
            "Hibernate",
            "Maven",
            "Database"
        ]
    }

};


const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTechnologies = document.getElementById("modalTechnologies");
const modalClose = document.getElementById("modalClose");
const modalDone = document.getElementById("modalDone");

let previousFocusedElement = null;


// Open the project details popup.

document.querySelectorAll(".details-button").forEach(function (button) {

    button.addEventListener("click", function () {

        const projectKey = button.dataset.project;
        const project = projectDetails[projectKey];

        if (!project) {
            return;
        }

        previousFocusedElement = button;

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modalTechnologies.replaceChildren();

        project.technologies.forEach(function (technology) {

            const tag = document.createElement("span");

            tag.textContent = technology;

            modalTechnologies.appendChild(tag);

        });

        projectModal.classList.add("open");
        projectModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        modalClose.focus();

    });

});


// Close the modal.

function closeProjectModal() {

    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previousFocusedElement) {
        previousFocusedElement.focus();
    }

}


modalClose.addEventListener("click", closeProjectModal);
modalDone.addEventListener("click", closeProjectModal);


// Close when clicking the dark background.

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {
        closeProjectModal();
    }

});


// Close when pressing Escape.

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("open")
    ) {
        closeProjectModal();
    }

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please complete all fields before continuing.");
        return;
    }

    const recipient = "mansiraut184@gmail.com";

    const subject = encodeURIComponent(
        "Portfolio enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;

});