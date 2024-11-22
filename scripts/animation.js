// Para la animación del scroll con la flecha
const scrollArrow = document.querySelector('.scroll-arrow');

scrollArrow.style.cursor = 'pointer'; // Cambia el cursor a una mano

scrollArrow.addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight * 1.0,  // Desplaza hacia abajo un 90% de la altura de la pantalla
        behavior: 'smooth'  // Movimiento suave
    });
});

// Mostrar los elementos del nav al hacer scroll
window.addEventListener('scroll', function () {
    const extraItemLeft = document.querySelector('.extra-item-left');
    const extraItemRight = document.querySelector('.extra-item-right');

    if (window.scrollY > 100) {
        extraItemLeft.classList.add('visible');
        extraItemRight.classList.add('visible');
    } else {
        extraItemLeft.classList.remove('visible');
        extraItemRight.classList.remove('visible');
    }
});

// Pill changer

// LTV

document.querySelectorAll('.filter-btn_ltv').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn_ltv').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        let selectedTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-item_ltv').forEach(item => {
            item.classList.remove('select_tab_ltv');
            if (item.classList.contains(selectedTab)) {
                item.classList.add('select_tab_ltv');
            }
        });
    });
});

//CLTV

document.querySelectorAll('.filter-btn_cltv').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn_cltv').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        let selectedTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-item_cltv').forEach(item => {
            item.classList.remove('select_tab_cltv');
            if (item.classList.contains(selectedTab)) {
                item.classList.add('select_tab_cltv');
            }
        });
    });
});

// Para abrir y cerrar el menú hamburguesa
const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');

navToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active');
});

// Cerrar el menú al hacer clic en cualquier parte del menú
navCenter.addEventListener('click', () => {
    navCenter.classList.remove('active');
});