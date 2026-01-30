// Podaci o uslugama, cenama i slikama
const serviceData = {
    'logo': { title: 'Logo Design', price: '25€ - 250€', images: ['logo1.jpg', 'logo2.jpg', 'logo3.jpg'] },
    'poster': { title: 'Poster Design', price: '15€ - 100€', images: ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'] },
    'card': { title: 'Business Cards', price: '10€ - 60€', images: ['card1.jpg', 'card2.jpg'] },
    'invitation': { title: 'Invitations', price: '10€ - 80€', images: ['invitation1.jpg', 'invitation2.jpg'] },
    'photo': { title: 'Photography', price: '25€ - 300€', images: [] },
    'video': { title: 'Video Editing', price: '20€ - 400€', images: [] },
    'web': { title: 'Web Design', price: '150€ - 800€', images: [], link: 'https://nexast.github.io/UKTBIH/' },
    'presentation': { title: 'Presentations', price: '30€ - 150€', images: [] },
    'social': { title: 'Social Media Management', price: 'Po dogovoru', images: [] }
};

// Funkcija za otvaranje prozora (modala)
function openModal(key) {
    const data = serviceData[key];
    const modal = document.getElementById('portfolioModal');
    const title = document.getElementById('modalTitle');
    const price = document.getElementById('modalPrice');
    const gallery = document.getElementById('modalGallery');

    // Postavljanje naslova i cene
    title.innerText = data.title;
    price.innerText = data.price;
    gallery.innerHTML = ''; // Čišćenje prethodnih slika

    // Poseban tretman za Web Design (link umesto slika)
    if(key === 'web') {
        gallery.innerHTML = `<div style="width:100%; padding:20px;"><a href="${data.link}" target="_blank" class="gold-cta-btn" style="position:static;">Pogledaj sajt uživo</a></div>`;
    } 
    // Ako ima slika, dodaj ih u galeriju
    else if (data.images && data.images.length > 0) {
        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = data.title;
            // Dodajemo mogućnost klika na sliku da se uveća (opciono)
            img.onclick = () => window.open(src, '_blank');
            gallery.appendChild(img);
        });
    } else {
        gallery.innerHTML = '<p style="color: #666; padding: 20px; width: 100%;">Primjeri radova stižu uskoro...</p>';
    }

    // Prikaži modal i resetuj skrol na vrh
    modal.style.display = 'block';
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden'; // Zabrani skrolovanje pozadine
}

// Funkcija za zatvaranje prozora
function closeModal() {
    document.getElementById('portfolioModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Vrati skrolovanje pozadine
}

// Funkcija za slanje poruke na WhatsApp
function sendWhatsApp() {
    const msg = document.getElementById('waMessage').value;
    const phone = "38765959096";
    
    if(msg.trim() !== "") {
        const encodedMsg = encodeURIComponent(msg);
        window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank');
    } else {
        alert("Molimo unesite poruku pre slanja.");
    }
}

// Zatvori modal ako korisnik klikne bilo gde van crnog okvira
window.onclick = function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target == modal) {
        closeModal();
    }
};
