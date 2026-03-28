const projectData = {
    'logo': { title: 'Logo Design', images: ['logo1.jpg', 'logo2.jpg'], price: 'From €50' },
    'poster': { title: 'Poster Design', images: ['poster1.jpg', 'poster2.jpg'], price: 'From €20' },
    'card': { title: 'Business Cards', images: ['card1.jpg'], price: 'From €25' },
    // Slike iz tvog foldera (Photography)
    'photo': { title: 'Photography', images: ['image_a8631b.jpg', 'image_a865c7.jpg', 'image_a86604.jpg'], price: 'Available only in BiH' },
    'video_rec': { 
        title: 'Video Recording', 
        images: ['sdfvbf.png'], 
        price: '€50 / 1h (Available only in BiH)', 
        link: 'https://www.youtube.com/@kkliderkanal' 
    },
    'social': { title: 'S.M. Management', images: ['logo2.jpg'], price: 'Price by agreement' }
};

function openModal(cat) {
    const d = projectData[cat];
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    
    let imgsHtml = d.images.map(i => `<img src="${i}" onerror="this.src='https://via.placeholder.com/150/000/d4af37?text=Work'">`).join('');
    let linkHtml = d.link ? `<br><a href="${d.link}" target="_blank" class="cta-btn" style="margin-top:20px; display:inline-block; font-size: 0.7rem;">Visit YouTube Channel</a>` : '';

    b.innerHTML = `<h2 style="color:#d4af37">${d.title}</h2><div class="modal-img-container">${imgsHtml}</div><p class="modal-price">${d.price}</p>${linkHtml}`;
    m.style.display = "block";
}

function closeModal() { document.getElementById('detailsModal').style.display = "none"; }
window.onclick = function(e) { if(e.target == document.getElementById('detailsModal')) closeModal(); }

function sendWA() {
    const msg = document.getElementById('msg').value;
    if(msg.trim()) window.open(`https://wa.me/38765959096?text=${encodeURIComponent(msg)}`, '_blank');
}
