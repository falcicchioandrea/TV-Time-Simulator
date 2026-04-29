document.addEventListener("DOMContentLoaded", () => {

    // Gestione autenticazione

    // Protezone pagine (se non si è su login.html si viene reinderizzati)
    const isLoginPage = window.location.pathname.endsWith("login.html");
    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (!currentUser && !isLoginPage) {
        window.location.href = "login.html";
        return;
    }
    // Se l'utente è loggato, impostiamo il nome utente a quello memorizzato nel local storage
    if (currentUser && document.getElementById("username")) {
        document.getElementById("username").textContent = currentUser.username;
    }

    // Logica del form di login se siamo su login.html
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita il ricaricamento della pagina quando viene inviato il form
            // Prendiamo l'username inserito nel campo username
            const username = document.getElementById("login-username").value;
            // Prendiamo la password inserita nel campo password
            const password = document.getElementById("login-password").value;

            // Creiamo un oggetto userData con le credenziali inserite
            const userData = {
                username: username,
                password: password,
                isLoggedIn: true
            };

            localStorage.setItem("user", JSON.stringify(userData));
            // Reindirizziamo l'utente alla pagina principale (index.html)
            window.location.href = "index.html";
        });
    }

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