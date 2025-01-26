document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            this.classList.toggle("clicked");
        });
    });
});
function viewFile() {
    const fileUrl = 'https://docs.google.com/document/d/1wYrtf_O-8wncpm5nO_-e57o79pX5-tpd/edit';
    // const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`;
    window.open(fileUrl, '_blank');
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});
