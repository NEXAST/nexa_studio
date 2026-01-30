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

function openModal(key) {
    const data = serviceData[key];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalPrice').innerText = data.price;
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    
    if(key === 'web') {
        gallery.innerHTML = `<div style="padding: 20px;"><a href="${data.link}" target="_blank" class="gold-cta-btn" style="position:static;">Visit Live Site</a></div>`;
    } else if (data.images && data.images.length > 0) {
        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.onclick = () => {
                document.getElementById('lightboxImg').src = src;
                document.getElementById('lightbox').style.display = 'flex';
            };
            gallery.appendChild(img);
        });
    } else {
        gallery.innerHTML = '<p style="color: #666; padding: 20px;">Samples coming soon...</p>';
    }
    
    document.getElementById('portfolioModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('portfolioModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(e) { if(e.target.id === 'portfolioModal') closeModal(); }
