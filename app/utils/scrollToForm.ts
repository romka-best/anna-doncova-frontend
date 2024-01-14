export default function scrollToForm() {
    const form = document.getElementById('form');

    if (form) {
        const topOffset = form.getBoundingClientRect().top + window.scrollY - 150;

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
        });
    }
}
