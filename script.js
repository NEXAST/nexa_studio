function sendWA() {
    const msg = document.getElementById('msg').value;
    const phone = "38765959096";
    if(msg.trim() !== "") {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Please enter a message.");
    }
}

// Navigacija menja providnost na skrol
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.8)';
});
