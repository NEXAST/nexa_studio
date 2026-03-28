const projectData = {
    'logo': { title: 'Logo Design', images: ['logo1.jpg', 'logo2.jpg', 'logo3.jpg'], price: 'From $75' },
    'poster': { title: 'Poster Design', images: ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'], price: 'From $40' },
    'card': { title: 'Business Cards', images: ['card1.jpg', 'card2.jpg'], price: 'From $25' },
    'invitation': { title: 'Invitations', images: ['invitation1.jpg', 'invitation2.jpg'], price: 'From $20' },
    'photo': { title: 'Photography', images: ['logo1.jpg'], price: 'From $50 / h' },
    'video_edit': { title: 'Video Editing', images: ['sdfvbf.png'], price: 'From $40' },
    'video_rec': { title: 'Video Recording', images: ['sdfvbf.png'], price: 'From $100' },
    'web': { title: 'Web Design', images: ['image_7cb3dc.png'], price: 'From $250' },
    'presentation': { title: 'Presentations', images: ['logo1.jpg'], price: 'From $30' },
    'social': { title: 'Social Media', images: ['logo2.jpg'], price: 'From $100 / m' }
};

function openModal(cat) {
    const m = document.getElementById('detailsModal');
    const b = document.getElementById('modalBody');
    const d = projectData[cat];
    let imgs = d.images.map(i => `<img src="${i}" onerror="this.src='https://via.placeholder.com/150/000/d4af37?text=Work'">`).join('');
    b.innerHTML = `<h2 style="color:#d4af37; margin-bottom:10px;">${d.title}</h2><div class="modal-img-container">${imgs}</div><p class="modal-price">${d.price}</p>`;
    m.style.display = "block";
}

function closeModal() { document.getElementById('detailsModal').style.display = "none"; }
window.onclick = function(e) { if(e.target == document.getElementById('detailsModal')) closeModal(); }

function sendWA() {
    const msg = document.getElementById('msg').value;
    if(msg.trim()) {
        window.open(`https://wa.me/38765959096?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Molimo unesite poruku.");
    }
}
