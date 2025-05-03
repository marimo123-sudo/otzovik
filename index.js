document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.setHeaderColor("#ff00c8");
    Telegram.WebApp.setBackgroundColor("#ff00c8");
    const heit = window.innerHeight;
    console.log(heit);
    
    document.documentElement.style.setProperty('--viewport-height', `${heit}px`);
});