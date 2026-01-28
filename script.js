const serviceData = {
    'logo': { title: 'Logo Design', price: '50€ - 250€', images: ['logo1.jpg', 'logo2.jpg', 'logo3.jpg'] },
    'poster': { title: 'Poster Design', price: '30€ - 100€', images: ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'] },
    'card': { title: 'Business Cards', price: '20€ - 60€', images: ['card1.jpg', 'card2.jpg'] },
    'invitation': { title: 'Invitations', price: '20€ - 80€', images: ['invitation1.jpg', 'invitation2.jpg'] },
    'photo': { title: 'Photography', price: '50€ - 300€', images: [] },
    'video': { title: 'Video Editing', price: '40€ - 400€', images: [] },
    'web': { title: 'Web Design', price: '150€ - 800€', images: [], link: 'https://nexast.github.io/UKTBIH/' },
    'presentation': { title: 'Presentations', price: '30€ - 150€', images: [] }
};

function openModal(key) {
    const data = serviceData[key];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalPrice').innerText = data.price;
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    
    if(key === 'web') {
        gallery.innerHTML = `<a href="${data.link}" target="_blank" class="cta-btn" style="background: #0A2647; color:white;">Visit Site</a>`;
    } else {
        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            // Funkcija za uvećanje na klik
            img.onclick = () => {
                document.getElementById('lightboxImg').src = src;
                document.getElementById('lightbox').style.display = 'flex';
            };
            gallery.appendChild(img);
        });
    }
    document.getElementById('portfolioModal').style.display = 'block';
}

function closeModal() { document.getElementById('portfolioModal').style.display = 'none'; }

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const msg = `Hello, I am ${name}. I am interested in your services.`;
    window.open(`https://wa.me/38765959096?text=${encodeURIComponent(msg)}`, '_blank');
});
