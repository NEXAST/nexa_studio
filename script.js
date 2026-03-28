const projectData = {
    'logo': { title: 'Logo Design', price: 'Starting from €50', note: 'Creating unique, memorable visual identities.' },
    'poster': { title: 'Poster Design', price: 'Starting from €30', note: 'Eye-catching posters for events and marketing.' },
    'card': { title: 'Business Cards', price: 'Starting from €25', note: 'Professional cards for an impact.' },
    'invitation': { title: 'Invitations', price: 'Starting from €20', note: 'Custom designs for your special occasions.' },
    'photo': { title: 'Photography', price: 'Price by Agreement', note: 'Professional photography services.' },
    'video_edit': { title: 'Video Editing', price: 'Starting from €30', note: 'Professional video post-production.' },
    'video_rec': { 
        title: 'Video Recording', 
        price: '€50 / hour (within BiH)', 
        link: 'https://www.youtube.com/@kklider' 
    },
    'web': { title: 'Web Design', price: 'Starting from €100', note: 'Modern, responsive, user-friendly websites.' },
    'presentation': { title: 'Presentations', price: 'Starting from €30', note: 'Compelling pitch decks and slides.' },
    'marketing': { title: 'Marketing Products', price: 'Price by Agreement', note: 'Custom prints: Mugs, Pens, Lighters, Magnets, etc.' }
};

function openModal(cat) {
    const d = projectData[cat];
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    
    let contentHtml = `<p class="modal-body" style="color:#ccc; margin: 20px 0;">${d.note || ''}</p>`;
    
    if (d.link) {
        contentHtml += `<br><a href="${d.link}" target="_blank" class="cta-btn" style="margin-top:20px; display:inline-block; font-size: 0.8rem;">Watch on YouTube</a>`;
    }

    b.innerHTML = `
        <h2 style="color:#d4af37; letter-spacing: 2px; text-transform: uppercase;">${d.title}</h2>
        ${contentHtml}
        <p class="modal-price" style="font-size: 2rem; color: #d4af37; font-weight: 700; margin-top: 20px;">${d.price}</p>
    `;
    m.style.display = "block";
}

function closeModal() { document.getElementById('detailsModal').style.display = "none"; }
window.onclick = function(e) { if(e.target == document.getElementById('detailsModal')) closeModal(); }

function sendWA() {
    const msg = document.getElementById('msg').value;
    if(msg.trim()) window.open(`https://wa.me/38765959096?text=${encodeURIComponent(msg)}`, '_blank');
}
