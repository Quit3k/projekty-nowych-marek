document.addEventListener('DOMContentLoaded', () => {
    // Pobieramy wszystkie karty
    const cards = document.querySelectorAll('.reveal');

    // Ustawienia obserwatora
    const observerOptions = {
        threshold: 0.15, // Karta musi być widoczna w 15% żeby się pojawiła
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Przestań obserwować po animacji (żeby nie migało przy scrollowaniu góra/dół)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});