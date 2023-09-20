export default function scrollToForm() {
    const preRegisterForm = document.getElementById('preRegisterForm');

    if (preRegisterForm) {
        const topOffset = preRegisterForm.getBoundingClientRect().top + window.scrollY - 150;

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
        });
    }
}
