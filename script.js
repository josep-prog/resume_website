document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu Visibility
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("menu");

    if (menuBtn && navMenu) {
        // Toggle menu when clicking the menu button
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent the click from bubbling up to the document
            console.log("Menu button clicked!"); // Debugging
            navMenu.classList.toggle("hidden");
            navMenu.classList.toggle("show");
        });

        // Close menu when clicking outside of it
        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.add("hidden");
                navMenu.classList.remove("show");
            }
        });
    }

    // List of Projects with Links to Local HTML Files
    const projects = [
        { name: "ALU Higher Level Programming", link: "../resume_website/projects/alu-higher_level_programming.html" },
        { name: "ALU Shell", link: "../resume_website/projects/alu-shell.html" },
        { name: "FARCA Website", link: "../resume_website/projects/FARCA-WEBSITE.html" },
        { name: "ALU Web Development", link: "../resume_website/projects/alu-web-development.html" },
        { name: "Hospital Monitoring System", link: "../resume_website/projects/hospital_monitoring_group-9.html" },
        { name: "ALU Zero Day", link: "../resume_website/projects/alu-zero_day.html" },
        { name: "Loops & Conditions Parsing", link: "../resume_website/projects/loops_conditions_and_parsing.html" },
        { name: "Submission Reminder App", link: "../resume_website/projects/submission_reminder_app_josep-prog.html" },
        { name: "Regex Data Extraction", link: "../resume_website/projects/alu_regex-data-extraction-josep-prog.html" },
        { name: "ALU Scripting", link: "../resume_website/projects/alu-scripting.html" },
        { name: "ALU Back-End", link: "../resume_website/projects/alu-back-end.html" },
        { name: "City West Website", link: "../resume_website/projects/City-West_website.html" },
        { name: "eTikets", link: "../resume_website/projects/eTiketshtml" }
    ];

    // Populate the Project List Dynamically
const projectList = document.getElementById("project-list");
if (projectList && projectList.children.length === 0) {
    projects.forEach(project => {
        const listItem = document.createElement("li");
        const projectLink = document.createElement("a");

        projectLink.href = project.link;
        projectLink.textContent = project.name;
        projectLink.target = "_blank"; // Open in new tab

        // Add event listener to handle clicks
        projectLink.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            window.location.href = project.link; // Navigate to the project page
        });

        listItem.appendChild(projectLink);
        projectList.appendChild(listItem);

        console.log(`Project link created: ${project.name} -> ${project.link}`); // Debugging
    });
}

    // Handle Comment Submission with Basic Validation
    const commentBox = document.getElementById("comment-box");
    const submitComment = document.getElementById("submit-comment");
    const commentSection = document.getElementById("comment-list");

    if (submitComment && commentBox && commentSection) {
        submitComment.addEventListener("click", function () {
            const commentText = commentBox.value.trim();

            if (commentText !== "") {
                const commentParagraph = document.createElement("p");
                commentParagraph.textContent = commentText;
                commentSection.appendChild(commentParagraph);
                commentBox.value = ""; // Clear input after submission
            } else {
                alert("Please enter a comment before submitting."); // Validation message
            }
        });
    }

    // Handle Contact Form Submission with Confirmation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                alert("Your request has been submitted successfully!");
                contactForm.reset(); // Clear the form
            } else {
                alert("Please fill out all fields before submitting."); // Validation message
            }
        });
    }

    // Toggle Content Sections Based on Navigation Links
    document.querySelectorAll('nav a').forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.getAttribute("data-target");
            const targetSection = document.getElementById(target);

            if (targetSection) {
                // Hide all sections
                document.querySelectorAll(".content-section").forEach(section => {
                    section.classList.remove("active");
                });

                // Show the target section
                targetSection.classList.add("active");
            } else {
                console.error("Target section not found:", target); // Debugging
            }
        });
    });

    // Handle Dropdown Menu for Projects
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            dropdownContent.classList.toggle("show");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (e) {
            if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove("show");
            }
        });
    }
});