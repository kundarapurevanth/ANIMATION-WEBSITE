// Trigger animations on load
window.addEventListener("load", () => {
    document.querySelectorAll(".animate").forEach(el => {
        el.style.opacity = "1";
    });
});

