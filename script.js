function welcome() {
    console.log("Welcome to Milan's Portfolio");
}

welcome();

/* =========================
   SMOOTH SCROLL (FIXED)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

});

/* =========================
   3 DOT MENU TOGGLE
========================= */

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll("#menu a").forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("show");
    });
});

/* =========================
   CLOSE MENU OUTSIDE CLICK
========================= */

document.addEventListener("click", function (e) {
    const menu = document.getElementById("menu");
    const dots = document.querySelector(".dots");

    if (menu && dots) {
        if (!menu.contains(e.target) && !dots.contains(e.target)) {
            menu.classList.remove("show");
        }
    }
});
