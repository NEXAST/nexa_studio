const serviceData = {
    'logo': {
        title: 'Logo Design & Branding',
        price: 'From 50€ to 250€',
        images: ['logo1.jpg', 'logo2.jpg', 'logo3.jpg']
    },
    'poster': {
        title: 'Poster & Flyer Design',
        price: 'From 30€ to 100€',
        images: ['poster1.jpg', 'poster2.jpg', 'poster3.jpg']
    },
    'card': {
        title: 'Business Card Design',
        price: 'From 20€ to 60€',
        images: ['card1.jpg', 'card2.jpg']
    },
    'invitation': {
        title: 'Invitation Design',
        price: 'From 20€ to 80€',
        images: ['invitation1.jpg', 'invitation2.jpg']
    },
    'photo': {
        title: 'Professional Photography',
        price: 'From 50€ to 300€',
        images: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']
    },
    'video': {
        title: 'Video Editing & Motion Graphics',
        price: 'From 40€ to 400€',
        images: ['video1.jpg']
    },
    'web': {
        title: 'Web Design & Development',
        price: 'From 150€ to 800€',
        images: [],
        link: 'https://nexast.github.io/UKTBIH/'
    },
    'presentation': {
        title: 'Presentation Design',
        price: 'From 30€ to 150€',
        images: ['pres1.jpg', 'pres2.jpg']
    }
};

function openModal(serviceKey) {
    const modal = document.getElementById('portfolioModal');
    const data = serviceData[serviceKey];
    
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalPrice').innerText = data.price;
    
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = ''; 
    
    if(serviceKey === 'web') {
        gallery.innerHTML = `<div style="text-align:center; width:100%; padding: 40px 0;">
            <p style="margin-bottom:20px;">Check out our latest live project:</p>
            <a href="${data.link}" target="_blank" class="cta-btn" style="background: #0A2647; color:white; text-decoration:none;">Visit Live Website</a>
        </div>`;
    } else {
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title;
            img.onerror = function() { this.style.display='none'; }; // Skriva sliku ako fali
            gallery.appendChild(img);
        });
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeModal() {
    document.getElementById('portfolioModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
}

window.onclick = function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target == modal) { closeModal(); }
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = `Hello Nexa Studio, I am ${name}. I am interested in a quote for your services.`;
    window.open(`https://wa.me/38765959096?text=${encodeURIComponent(message)}`, '_blank');
});
