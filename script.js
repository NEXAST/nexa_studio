const projectData = {
    'logo': { title: 'Logo Design', images: ['logo1.jpg', 'logo2.jpg'], price: 'Od €50' },
    'poster': { title: 'Poster Design', images: ['poster1.jpg', 'poster2.jpg'], price: 'Od €20' },
    'card': { title: 'Business Cards', images: ['card1.jpg'], price: 'Od €25' },
    'invitation': { 
        title: 'Invitations', 
        images: ['image_a7e622.png', 'image_a7e73b.png'], 
        price: 'Od €20' 
    },
    'photo': { 
        title: 'Photography', 
        images: ['image_a8631b.jpg', 'image_a865c7.jpg', 'image_a86604.jpg'], 
        price: 'Dostupno samo u BiH' 
    },
    'video_edit': { title: 'Video Editing', images: [], price: 'Po dogovoru', note: 'Radovi uskoro' },
    'video_rec': { 
        title: 'Video Recording', 
        images: [], // Nema slike, nema okvira
        price: '€50 / 1h (Dostupno samo u BiH)', 
        link: 'https://www.youtube.com/@kklider' 
    },
    'web': { title: 'Web Design', images: [], price: 'Od €200', note: 'Radovi uskoro' },
    'presentation': { title: 'Presentations', images: [], price: 'Od €30', note: 'Radovi uskoro' },
    'social': { title: 'S.M. Management', images: [], price: 'Po dogovoru', note: 'Strategija za vaš brend' }
};

function openModal(cat) {
    const d = projectData[cat];
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    
    let imgsHtml = '';
    // Prikazujemo slike samo ako postoje u nizu
    if (d.images && d.images.length > 0) {
        imgsHtml = `<div class="modal-img-container">` + 
                   d.images.map(i => `<img src="${i}" onerror="this.src='https://via.placeholder.com/150/000/d4af37?text=Rad'">`).join('') + 
                   `</div>`;
    } else if (d.note) {
        imgsHtml = `<p style="color: #555; margin: 20px 0; font-style: italic;">${d.note}</p>`;
    }

    let linkHtml = d.link ? `<br><a href="${d.link}" target="_blank" class="cta-btn" style="margin-top:20px; display:inline-block; font-size: 0.8rem;">Posjetite YouTube kanal</a>` : '';

    b.innerHTML = `
        <h2 style="color:#d4af37">${d.title}</h2>
        ${imgsHtml}
        <p class="modal-price">${d.price}</p>
        ${linkHtml}
    `;
    m.style.display = "block";
}

function closeModal() { document.getElementById('detailsModal').style.display = "none"; }
window.onclick = function(e) { if(e.target == document.getElementById('detailsModal')) closeModal(); }

function sendWA() {
    const msg = document.getElementById('msg').value;
    if(msg.trim()) window.open(`https://wa.me/38765959096?text=${encodeURIComponent(msg)}`, '_blank');
}
