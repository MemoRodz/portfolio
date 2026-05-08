/*
window.portfolio = window.portfolio || {};

window.portfolio.scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

window.portfolio.toggleBackToTopButton = function () {
    const button = document.getElementById('btn-back-to-top');
    if (!button) return;

    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
};

window.addEventListener('scroll', function () {
    window.portfolio.toggleBackToTopButton();
});

window.addEventListener('load', function () {
    window.portfolio.toggleBackToTopButton();
});
*/

window.onscroll = function() {
    const btn = document.getElementById("btn-back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
