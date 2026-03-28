// Inicijalizacija AOS animacija
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});

// Smooth scroll za navigaciju
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Promena providnosti navigacije na scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.9)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '30px 8%';
    }
});;
    }
};
