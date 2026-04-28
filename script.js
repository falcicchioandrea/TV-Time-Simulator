document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("menu-overlay");

    function openMenu() {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
    }

    function closeMenu() {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", openMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }
});