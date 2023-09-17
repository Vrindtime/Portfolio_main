const cursor = document.querySelector(".cursor");
//cursor effect on movement
document.addEventListener("mousemove" , (e)=>{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block"; // so it displays back when the cursor is back on the page
});

// cursor effect on mouse out
document.addEventListener("mouseout",() => {
    cursor.style.display = "none";
});