const projectData = {
    'logo': { title: 'Logo Design', images: ['logo1.jpg'], price: 'Starting from €50' },
    'poster': { title: 'Poster Design', images: ['poster1.jpg'], price: 'Starting from €30' },
    'card': { title: 'Business Cards', images: ['card1.jpg'], price: 'Starting from €25' },
    'invitation': { title: 'Invitations', images: ['image_a7e622.png', 'image_a7e73b.png'], price: 'Starting from €20' },
    'photo': { title: 'Photography', images: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'], price: 'Price by agreement' },
    'video_edit': { title: 'Video Editing', images: [], price: 'Starting from €30', note: 'Portfolio coming soon' },
    'video_rec': { 
        title: 'Video Recording', 
        images: [], 
        price: '€50 / per hour (Available only in BiH)', 
        link: 'https://www.youtube.com/@kklider' 
    },
    'web': { title: 'Web Design', images: [], price: 'Starting from €100', note: 'Portfolio coming soon' },
    'presentation': { title: 'Presentations', images: [], price: 'Starting from €30', note: 'Portfolio coming soon' },
    'marketing': { title: 'Marketing Products', images: [], price: 'Price by agreement', note: 'Custom prints: Mugs, Pens, Lighters, etc.' }
};

function openModal(cat) {
    const d = projectData[cat];
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    
    let imgsHtml = '';
    if (d.images && d.images.length > 0) {
        imgsHtml = `<div class="modal-img-container">` + 
                   d.images.map(i => `<img src="${i}" onerror="this.src='https://via.placeholder.com/150/000/d4af37?text=Nexa'">`).join('') + 
                   `</div>`;
    } else if (d.note) {
        imgsHtml = `<p style="color: #666; margin: 20px 0; font-style: italic;">${d.note}</p>`;
    }

    let linkHtml = d.link ? `<br><a href="${d.link}" target="_blank" class="cta-btn" style="margin-top:20px; display:inline-block; font-size: 0.8rem;">Visit YouTube Channel</a>` : '';

    b.innerHTML = `
        <h2 style="color:#d4af37; letter-spacing: 2px;">${d.title}</h2>
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
