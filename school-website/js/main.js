// بيانات الإعلانات
const announcementsData = [
    { id: 1, title: "موعد امتحانات الفصل الأول", date: "2025-01-15", description: "تبدأ امتحانات الفصل الأول يوم الأحد 15 يناير 2025 لجميع الشعب" },
    { id: 2, title: "يوم مفتوح لأولياء الأمور", date: "2025-01-20", description: "ندعوكم لحضور اليوم المفتوح والتعرف على تقدم أبنائكم الدراسي" },
    { id: 3, title: "تسجيل طلاب جدد", date: "2025-01-25", description: "يفتح باب التسجيل للعام الدراسي الجديد 2025/2026" },
    { id: 4, title: "مسابقة في الرياضيات", date: "2025-01-28", description: "تنظيم مسابقة داخلية في مادة الرياضيات للمتفوقين" }
];

// تحميل الإعلانات
function loadAnnouncements() {
    const grid = document.getElementById('announcementsGrid');
    if (!grid) return;
    
    grid.innerHTML = announcementsData.map(ann => `
        <div class="announcement-card">
            <div class="announcement-img">
                <i class="fas fa-newspaper"></i>
                <span class="announcement-date">${formatDate(ann.date)}</span>
            </div>
            <div class="announcement-content">
                <h3 class="announcement-title">${ann.title}</h3>
                <p class="announcement-desc">${ann.description}</p>
            </div>
        </div>
    `).join('');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
}

// تحريك الأرقام
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        updateCounter();
    });
}

// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
});

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadAnnouncements();
    setTimeout(animateStats, 500);
});