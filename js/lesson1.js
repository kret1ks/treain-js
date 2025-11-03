class UserProfile {
    constructor() {
        this.name = "Олександр Петренко";
        this.age = 25;
        this.bio = "Фронтенд розробник з любов'ю до чистих кодів та красивих інтерфейсів";
        this.followers = 1200;
        this.projects = 47;
        this.avatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
        
        this.init();
    }

    init() {
        this.updateDisplay();
        this.setupEventListeners();
        this.loadFromLocalStorage();
    }

    updateDisplay() {
        document.querySelector('.name').textContent = this.name;
        document.querySelector('.bio').textContent = this.bio;
        
        const statValues = document.querySelectorAll('.stat-value');
        statValues[0].textContent = this.age;
        statValues[1].textContent = this.formatNumber(this.followers);
        statValues[2].textContent = this.projects;
        
        document.querySelector('.avatar').src = this.avatar;
        
        this.saveToLocalStorage();
    }

    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    }

    changeName(newName) {
        if (newName && newName.trim() !== '') {
            this.name = newName.trim();
            this.updateDisplay();
        }
    }

    updateAge(newAge) {
        const age = parseInt(newAge);
        if (!isNaN(age) && age > 0 && age < 150) {
            this.age = age;
            this.updateDisplay();
        } else {
            alert('Будь ласка, введіть коректний вік!');
        }
    }

    changeBio(newBio) {
        if (newBio && newBio.trim() !== '') {
            this.bio = newBio.trim();
            this.updateDisplay();
        }
    }

    changeAvatar(newAvatar) {
        if (newAvatar && newAvatar.trim() !== '') {
            this.avatar = newAvatar.trim();
            this.updateDisplay();
        }
    }

    setupEventListeners() {
        // Кнопка редагування
        document.querySelector('.edit-btn').addEventListener('click', () => {
            this.openEditModal();
        });

        // Перемикач теми
        document.querySelector('.theme-toggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            this.saveThemePreference();
        });

        // Додаємо можливість зміни аватара при кліку
        document.querySelector('.avatar').addEventListener('click', () => {
            const newAvatar = prompt('Введіть URL нового аватара:', this.avatar);
            if (newAvatar) this.changeAvatar(newAvatar);
        });
    }

    openEditModal() {
        const newName = prompt("Введіть нове ім'я:", this.name);
        if (newName !== null) this.changeName(newName);

        const newBio = prompt("Введіть новий опис:", this.bio);
        if (newBio !== null) this.changeBio(newBio);

        const newAge = prompt("Введіть новий вік:", this.age);
        if (newAge !== null) this.updateAge(newAge);
    }

    saveToLocalStorage() {
        const profileData = {
            name: this.name,
            age: this.age,
            bio: this.bio,
            followers: this.followers,
            projects: this.projects,
            avatar: this.avatar,
            theme: document.body.classList.contains('dark-theme') ? 'dark' : 'light'
        };
        localStorage.setItem('userProfile', JSON.stringify(profileData));
    }

    loadFromLocalStorage() {
        const savedData = localStorage.getItem('userProfile');
        if (savedData) {
            const profileData = JSON.parse(savedData);
            this.name = profileData.name || this.name;
            this.age = profileData.age || this.age;
            this.bio = profileData.bio || this.bio;
            this.followers = profileData.followers || this.followers;
            this.projects = profileData.projects || this.projects;
            this.avatar = profileData.avatar || this.avatar;
            
            if (profileData.theme === 'dark') {
                document.body.classList.add('dark-theme');
            }
            
            this.updateDisplay();
        }
    }

    saveThemePreference() {
        this.saveToLocalStorage();
    }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const userProfile = new UserProfile();
});