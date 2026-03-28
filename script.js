const projectData = {
    'logo': { title: 'Logo Design', price: 'From €50', note: 'Creating unique, memorable visual identities.' },
    'poster': { title: 'Poster Design', price: 'From €30', note: 'Eye-catching posters for events and marketing.' },
    'card': { title: 'Business Cards', price: 'From €25', note: 'Professional cards for an impact.' },
    'invitation': { title: 'Invitations', price: 'From €20', note: 'Custom designs for your special occasions.' },
    'photo': { title: 'Photography', price: 'Price by Agreement', note: 'BiH regional focus.' },
    'video_edit': { title: 'Video Editing', price: 'Price by Agreement', note: 'Professional editing for impactful media.' },
    // Video Recording with proper YouTube link
    'video_rec': { 
        title: 'Video Recording', 
        price: '€50 / hour (within BiH)', 
        link: 'https://www.youtube.com/@kkliderkanal' 
    },
    'web': { title: 'Web Design', price: 'Price by Agreement', note: 'Modern, responsive, user-friendly websites.' },
    'presentation': { title: 'Presentations', price: 'Price by Agreement', note: 'Compelling pitch decks and slides.' },
    // Custom Merch
    'marketing': { title: 'Custom Merchandising', price: 'Price by Agreement', note: 'Pens, Mugs, Lighters, Magnets, etc.' }
};

function openModal(cat) {
    const d = projectData[cat];
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    
    let contentHtml = `<p class="modal-body">${d.note || ''}</p>`;
    // Add YouTube link for Video Recording
    if (d.link) {
        contentHtml += `<a href="${d.link}" target="_blank" class="cta-btn" style="margin-top:20px; display:inline-block; font-size: 0.8rem;">Watch on YouTube</a>`;
    }

    b.innerHTML = `
        <h2 style="color:#d4af37; letter-spacing: 2px;">${d.title}</h2>
        ${contentHtml}
        <p class="modal-price">${d.price}</p>
    `;
    m.style.display = "block";
}

function closeModal() { document.getElementById('detailsModal').style.display = "none"; }
window.onclick = function(e) { if(e.target == document.getElementById('detailsModal')) closeModal(); }

function sendWA() {
    const msg = document.getElementById('msg').value;
    if(msg.trim()) {
        window.open(`https://wa.me/38765959096?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Please enter a message.");
    }
}
