// Fungsi untuk berpindah slide dengan efek transisi halus
function nextSlide(slideNumber) {
    // Sembunyikan semua slide yang sedang aktif
    const activeSlides = document.querySelectorAll('.slide');
    activeSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Tampilkan slide tujuan
    const targetSlide = document.getElementById(`slide-${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }
}

// Fitur Tombol "Nggak mau Aamiin" yang kabur saat didekati/disentuh
const btnNo = document.getElementById('btn-no');

function kabur() {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 20);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

if (btnNo) {
    btnNo.addEventListener('mouseover', kabur);
    btnNo.addEventListener('touchstart', kabur);
}

// Fungsi Selebrasi saat tombol "Aamiin!" diklik di slide terakhir
function celebrate() {
    const emoji = document.getElementById('final-emoji');
    const title = document.getElementById('final-title');
    const message = document.getElementById('final-message');
    const buttons = document.getElementById('final-buttons');

    // Ubah konten akhir menjadi lebih ekspresif
    emoji.innerHTML = '🥳👑💖';
    title.innerHTML = 'Hooray! ⚡️';
    message.innerHTML = 'Semoga semua doa baiknya berbalik ke lo juga ya, Sa. Senang bisa merayakan hari spesial lo meskipun lewat digital gini!';
    
    // Sembunyikan tombol
    buttons.style.display = 'none';

    // Munculkan hujan konfeti warna-warni
    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-5vh';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        // Pilihan warna konfeti neon
        const colors = ['#00f2fe', '#4facfe', '#ff007f', '#ffff00', '#b60dfb'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(confetti);
        
        // Hapus konfeti dari DOM setelah selesai animasi agar tidak lemot
        setTimeout(() => confetti.remove(), 4000);
    }
}
