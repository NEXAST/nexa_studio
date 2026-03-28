const projectData = {
    'logo': { title: 'Logo Design', images: ['logo1.jpg', 'logo2.jpg'], price: 'Starting from €150' },
    'poster': { title: 'Poster Design', images: ['poster1.jpg', 'poster2.jpg'], price: 'Starting from €80' },
    'card': { title: 'Business Cards', images: ['card1.jpg'], price: 'Starting from €50' },
    'invitation': { title: 'Invitations', images: ['invitation1.jpg'], price: 'Starting from €40' },
    // Photography koristi tvoja imena slika: basketball_1.jpg, basketball_2.jpg, basketball_3.jpg
    'photo': { title: 'Photography', images: ['basketball_1.jpg', 'basketball_2.jpg', 'basketball_3.jpg'], price: 'Basketball Special' },
    'video_edit': { title: 'Video Editing', images: ['sdfvbf.png'], price: 'Starting from €200' },
    // Video Recording sa YouTube linkom
    'video_rec': { 
        title: 'Video Recording', 
        images: ['sdfvbf.png'], 
        price: 'Starting from €200', 
        link: 'https://www.youtube.com/@kkliderkanal' 
    },
    'web': { title: 'Web Design', images: ['image_7cb3dc.png'], price: 'Starting from €500' },
    'presentation': { title: 'Presentations', images: ['logo1.jpg'], price: 'Starting from €100' },
    // Nova kategorija za marketing proizvode
    'marketing': { title: 'Marketing Products', images: ['logo2.jpg'], price: 'Custom Quote (Pens, Mugs, Lighters, Magnets)' }
};

function openModal(cat) {
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    const d = projectData[cat];
    
    let imgsHtml = d.images.map(i => `<img src="${i}" onerror="this.src='https://via.placeholder.com/150/000/d4af37?text=Work'">`).join('');
    
    // Generisanje YouTube linka ako postoji (samo za Video Recording)
    let linkHtml = d.link ? `<a href="${d.link}" target="_blank" class="cta-btn" style="margin-top:20px; display:inline-block">Watch on YouTube Channel</a>` : '';

    b.innerHTML = `<h2 style="color:#d4af37; margin-bottom:10px;">${d.title}</h2><div class="modal-img-container">${imgsHtml}</div><p class="modal-price">${d.price}</p>${linkHtml}`;
    m.style.display = "block";
}

function closeModal() { document.getElementById('detailsModal').style.display = "none"; }
window.onclick = function(e) { if(e.target == document.getElementById('detailsModal')) closeModal(); }

function sendWA() {
    const msg = document.getElementById('msg').value;
    const phone = "38765959096";
    if(msg.trim() !== "") {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Please enter a message.");
    }
}
