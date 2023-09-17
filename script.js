const cursor = document.querySelector(".cursor");

// Function to update the cursor position
function updateCursorPosition(x, y) {
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
}

// Update cursor position on mousemove
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    updateCursorPosition(x, y);
    cursor.style.display = "block"; // Display the cursor
});

// Update cursor position on scroll
document.addEventListener("scroll", () => {
    let x = event.clientX;
    let y = event.clientY + window.scrollY;
    updateCursorPosition(x, y);
});

// Hide cursor on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});


//for the current nav viewed
// Get references to the links and sections
const aboutLink = document.getElementById("about-link");
const skillsLink = document.getElementById("skills-link");
const experienceLink = document.getElementById("experience-link");
const certLink = document.getElementById("cert-link");
const contactLink = document.getElementById("contact-link");

const aboutSection = document.getElementById("about");
const skillsSection = document.getElementById("skills");
const experienceSection = document.getElementById("experience");
const certSection = document.getElementById("cert");
const contactSection = document.getElementById("contact");

// Function to add "active" class to the currently visible link
function setActiveLink(link) {
  // Remove "active" class from all links
  aboutLink.classList.remove("active");
  skillsLink.classList.remove("active");
  experienceLink.classList.remove("active");
  certLink.classList.remove("active");
  contactLink.classList.remove("active");

  // Add "active" class to the specified link
  link.classList.add("active");
}

// Function to remove "active" class from all links
function deactivateLinks() {
  // Do nothing, since we already removed the "active" class from all links in the setActiveLink() function
}

// Add a scroll event listener to check which section is in view
window.addEventListener("scroll", () => {
  const yOffset = window.scrollY;

  if (yOffset >= aboutSection.offsetTop && yOffset < skillsSection.offsetTop) {
    setActiveLink(aboutLink);
  } else if (yOffset >= skillsSection.offsetTop && yOffset < experienceSection.offsetTop) {
    setActiveLink(skillsLink);
  } else if (yOffset >= experienceSection.offsetTop && yOffset < certSection.offsetTop) {
    setActiveLink(experienceLink);
  } else if (yOffset >= certSection.offsetTop && yOffset < contactSection.offsetTop) {
    setActiveLink(certLink);
  } else if (yOffset >= contactSection.offsetTop) {
    setActiveLink(contactLink);
  } else {
    // No section is in view
    deactivateLinks();
  }
});

// Call setActiveLink initially to set the active link on page load
setActiveLink(aboutLink); // This will make About Me the default active menu when the page loads
