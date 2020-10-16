window.addEventListener("scroll", function () {
    var navigationBar = document.querySelector("nav");
    navigationBar.classList.toggle("sticky", window.scrollY > 0);
    document.querySelector("nav a.navbar-brand").classList.toggle("navbar-brand-scroll", window.scrollY > 0);
    $("nav").removeClass("navbar-dark", window.scrollY > 0);
    $("nav .nav-item a").addClass("navbar-brand-scroll", window.scrollY > 0);
});
