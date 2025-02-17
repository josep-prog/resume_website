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

    // List of Projects with GitHub Links
    const projects = [
        { name: "ALU Higher Level Programming", link: "https://github.com/josep-prog/alu-higher_level_programming.git" },
        { name: "ALU Shell", link: "https://github.com/josep-prog/alu-shell.git" },
        { name: "FARCA Website", link: "https://github.com/josep-prog/FARCA-WEBSITE.py.git" },
        { name: "ALU Web Development", link: "https://github.com/josep-prog/alu-web-development.git" },
        { name: "Hospital Monitoring System", link: "https://github.com/josep-prog/hospital_monitoring_group-9.git" },
        { name: "ALU Zero Day", link: "https://github.com/josep-prog/alu-zero_day.git" },
        { name: "Loops & Conditions Parsing", link: "https://github.com/josep-prog/loops_conditions_and_parsing.git" },
        { name: "Submission Reminder App", link: "https://github.com/josep-prog/submission_reminder_app_josep-prog.git" },
        { name: "Regex Data Extraction", link: "https://github.com/josep-prog/alu_regex-data-extraction-josep-prog.git" },
        { name: "ALU Scripting", link: "https://github.com/josep-prog/alu-scripting.git" },
        { name: "ALU Back-End", link: "https://github.com/josep-prog/alu-back-end.git" },
        { name: "City West Website", link: "https://github.com/josep-prog/City-West_website.py.git" },
        { name: "eTikets", link: "https://github.com/josep-prog/eTikets.git" }
    ];

    // Populate the Project List Dynamically (Prevent Duplicate Entries)
    const projectList = document.getElementById("project-list");
    if (projectList && projectList.children.length === 0) {
        projects.forEach(project => {
            const listItem = document.createElement("li");
            const projectLink = document.createElement("a");

            projectLink.href = project.link;
            projectLink.textContent = project.name;
            projectLink.target = "_blank"; // Open in new tab

            listItem.appendChild(projectLink);
            projectList.appendChild(listItem);
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