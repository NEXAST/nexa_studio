// Init Animations
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// WhatsApp Function
function sendWA() {
    const msg = document.getElementById('msg').value;
    const phone = "38765959096";
    if(msg.trim() !== "") {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Please enter a message.");
    }
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.95)';
        nav.style.padding = '20px 10%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '40px 10%';
    }
});
