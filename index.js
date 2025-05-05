// Инициализация Telegram WebApp
// Telegram.WebApp.ready();
// Telegram.WebApp.expand();
// Telegram.WebApp.setHeaderColor("#ff00c8");
// Telegram.WebApp.setBackgroundColor("#f5f5f5");

// Адаптация под viewport
const updateViewport = () => {
    const vh = Math.min(
        window.innerHeight, 
        window.visualViewport?.height || window.innerHeight
    );
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

updateViewport();
window.addEventListener('resize', updateViewport);
window.visualViewport?.addEventListener('resize', updateViewport);

// Логика выпадающего меню
const dropdown = document.getElementById('dropdown');
const mainButton = dropdown.querySelector('.main-button');
let selectedValue = null;

mainButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    // Telegram.WebApp.HapticFeedback.impactOccurred('light');
});

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        selectedValue = option.dataset.value;
        mainButton.textContent = option.textContent;
        dropdown.classList.remove('active');
        Telegram.WebApp.HapticFeedback.impactOccurred('medium');
        
        // Здесь можно обработать выбранный вариант
        console.log('Выбрано:', selectedValue);
    });
});

// Закрытие при клике вне меню
document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

// Предотвращаем закрытие при клике внутри меню
dropdown.querySelector('.options-container').addEventListener('click', (e) => {
    e.stopPropagation();
});