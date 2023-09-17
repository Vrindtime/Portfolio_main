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
