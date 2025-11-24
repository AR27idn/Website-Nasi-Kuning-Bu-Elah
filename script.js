// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Menu list
const menuItems = [
    { 
        nama: "Nasi Kuning Biasa",
        harga: 15000,
        img: "assets/nasi kuning biasa.webp",
        quote: "Nasi kuning gurih khas Ibu Elah, lengkap dengan lauk rumahan yang bikin kangen."
    },
    { 
        nama: "Nasi Kuning Komplit",
        harga: 18000,
        img: "assets/nasi kuning komplit.webp",
        quote: "Ayam suwir pedas manis yang dipadukan dengan nasi kuning lembut dan harum."
    },
    { 
        nama: "Lontong Sayur",
        harga: 12000,
        img: "assets/Lontong sayur.JPG",
        quote: "Kuah santan gurih dengan potongan lontong lembut—pas untuk sarapan hangat."
    }
];

const menuContainer = document.getElementById("menu-container");
menuContainer.innerHTML = "";

menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
        <img src="${item.img}" alt="${item.nama}">
        <h4>${item.nama}</h4>
        <p class="menu-quote">"${item.quote}"</p>
        <p class="harga">Rp ${item.harga.toLocaleString()}</p>
        <button onclick="alert('Ditambahkan ke keranjang: ${item.nama}')">Tambah</button>
    `;
    menuContainer.appendChild(card);
});

// Slider
let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

document.querySelector(".next").addEventListener("click", () => nextSlide());
document.querySelector(".prev").addEventListener("click", () => prevSlide());

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlider();
}
function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
}
function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Auto slide 4 detik
setInterval(nextSlide, 4000);

// Dots generator
const dotsContainer = document.querySelector(".dots");
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
}
