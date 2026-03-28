const projectData = {
    'logo': {
        title: 'Logo Design',
        images: ['logo1.jpg', 'logo2.jpg', 'logo3.jpg'],
        price: 'From $150 to $500'
    },
    'poster': {
        title: 'Poster Design',
        images: ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'],
        price: 'From $80 to $250'
    },
    'card': {
        title: 'Business Cards',
        images: ['card1.jpg', 'card2.jpg'],
        price: 'From $50 to $150'
    },
    'video': {
        title: 'Video Recording',
        images: ['sdfvbf.png'],
        price: 'From $200 to $1000'
    },
    'merch': {
        title: 'Custom Merchandising',
        images: ['invitation1.jpg'],
        price: 'By Agreement'
    },
    'web': {
        title: 'Web Design',
        images: ['image_7cb3dc.png'],
        price: 'From $500 to $2000'
    }
};

function openModal(category) {
    const modal = document.getElementById('detailsModal');
    const body = document.getElementById('modalBody');
    const data = projectData[category];

    let imagesHtml = data.images.map(img => `<img src="${img}" onclick="window.open('${img}', '_blank')">`).join('');

    body.innerHTML = `
        <h2 style="color: #d4af37; margin-bottom: 20px;">${data.title}</h2>
        <div class="modal-img-container">${imagesHtml}</div>
        <p class="modal-price">${data.price}</p>
    `;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}

// Zatvori na klik van modala
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function sendWA() {
    const msg = document.getElementById('msg').value;
    const phone = "38765959096";
    if(msg.trim() !== "") {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Please enter a message.");
    }
}
