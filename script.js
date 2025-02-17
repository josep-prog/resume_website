// Wait for the DOM to fully load before running script
document.addEventListener("DOMContentLoaded", function () {
    
    // Toggle Menu Visibility
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("show"); // Toggle 'show' class
    });

    // List of Projects with GitHub Links
    const projects = [
        { name: "alu-higher_level_programming", link: "https://github.com/yourusername/alu-higher_level_programming" },
        { name: "alu-shell", link: "https://github.com/yourusername/alu-shell" },
        { name: "FARCA-WEBSITE.py", link: "https://github.com/yourusername/FARCA-WEBSITE" },
        { name: "alu-web-development", link: "https://github.com/yourusername/alu-web-development" },
        { name: "hospital_monitoring_group-9", link: "https://github.com/yourusername/hospital_monitoring_group-9" },
        { name: "alu-zero_day", link: "https://github.com/yourusername/alu-zero_day" },
        { name: "loops_conditions_and_parsing", link: "https://github.com/yourusername/loops_conditions_and_parsing" },
        { name: "submission_reminder_app_josep-prog", link: "https://github.com/yourusername/submission_reminder_app" },
        { name: "alu-regex-data-extraction-josep-prog", link: "https://github.com/yourusername/alu-regex-data-extraction" },
        { name: "alu-scripting", link: "https://github.com/yourusername/alu-scripting" },
        { name: "alu-back-end", link: "https://github.com/yourusername/alu-back-end" },
        { name: "City-West_website.py", link: "https://github.com/yourusername/City-West_website" },
        { name: "eTikets", link: "https://github.com/yourusername/eTikets" }
    ];

    // Populate the Project List Dynamically
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = project.link;
        a.textContent = project.name;
        a.target = "_blank"; // Open in new tab
        li.appendChild(a);
        projectList.appendChild(li);
    });

    // Handle Comment Submission
    const commentBox = document.getElementById("comment-box");
    const submitComment = document.getElementById("submit-comment");
    const commentSection = document.getElementById("comments");

    submitComment.addEventListener("click", function () {
        let commentText = commentBox.value.trim();
        if (commentText !== "") {
            let p = document.createElement("p");
            p.textContent = commentText;
            commentSection.appendChild(p);
            commentBox.value = ""; // Clear input after submission
        }
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        alert("Your request has been submitted!");
        contactForm.reset(); // Clear the form
    });

});
